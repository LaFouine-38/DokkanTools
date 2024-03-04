#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Module        : decryptor.py
# Author        : bssthu
# Project       : pysqlsimplecipher
# Creation date : 2016-06-03
# Description   :
#


import config
import util

def get_print_frequency(max_iteration_count):
    #//10 = 1/10 du nombre d'itérations
    return max(1, max_iteration_count//10)

def decrypt_file(filename_in, filename_out, password):
    if not isinstance(filename_in, str):
        raise RuntimeError('filename_in must be a str.')
    if not isinstance(password, bytearray):
        raise RuntimeError('password must be a bytearray.')
    if not isinstance(filename_out, str):
        raise RuntimeError('filename_out must be a str.')

    # read
    with open(filename_in, 'rb') as fp:
        raw = fp.read()

    # decrypt
    dec = decrypt_default(raw, password)

    # write
    with open(filename_out, 'wb') as fp:
        fp.write(dec)
        
    print('File Successfully Decrypted !')


def decrypt_default(raw, password):
    # configs
    salt_mask = config.salt_mask
    key_sz = config.key_sz
    key_iter = config.key_iter
    hmac_key_sz = config.hmac_key_sz
    hmac_key_iter = config.hmac_key_iter
    page_sz = config.page_sz
    iv_sz = config.iv_sz
    reserve_sz = config.reserve_sz
    hmac_sz = config.hmac_sz

    return decrypt(raw, password, salt_mask, key_sz, key_iter, hmac_key_sz, hmac_key_iter, page_sz, iv_sz, reserve_sz, hmac_sz)


def decrypt(raw, password, salt_mask, key_sz, key_iter, hmac_key_sz, hmac_key_iter, page_sz, iv_sz, reserve_sz, hmac_sz):
    dec = b'SQLite format 3\0'

    # derive key
    salt_sz = 16
    salt = raw[:salt_sz]
    key, hmac_key = util.key_derive(salt, password, salt_mask, key_sz, key_iter, hmac_key_sz, hmac_key_iter)

    # decrypt file header, try with default page size
    page_sz, reserve_sz = decrypt_page_header(raw, key, salt_sz, page_sz, iv_sz, reserve_sz)
    if page_sz < 0 or reserve_sz < 0:
        raise RuntimeError('failed to decide page size or reserve size.')

    # decrypt pages
    pages_amount = int(len(raw) / 1024)
    print_frequency = get_print_frequency(pages_amount)
    #for i in range(0, int(len(raw) / 1024)):
    for i in range(0, pages_amount):
        page = util.get_page(raw, page_sz, i + 1)
        if i == 0:
            # skip salt
            page = page[salt_sz:]
        page_content = page[:-reserve_sz]
        reserve = page[-reserve_sz:]
        iv = reserve[:iv_sz]
        # check hmac
        hmac_old = reserve[iv_sz:iv_sz+hmac_sz]
        hmac_new = util.generate_hmac(hmac_key, page_content + iv, i + 1)
        if not hmac_old == hmac_new:
            raise RuntimeError('hmac check failed in page %d.' % (i+1))
        # decrypt content
        page_dec = util.decrypt(page_content, key, iv)
        dec += page_dec + util.random_bytes(reserve_sz)
        if i % print_frequency == 0:
            print(f"\rPage {i + 1}/{pages_amount} decrypted.", end='')

    print()  # Retour à la ligne pour la prochaine instruction print

    return dec


def decrypt_page_header(raw, key, salt_sz, page_sz, iv_sz, reserve_sz):
    """Try to decrypt first page with default config.

    If default page size fail, change page size.
    When succeed, return page_sz, reserve_sz.
    If fail, return -1, -1.
    """

    if not util.is_valid_page_size(page_sz):
        page_sz = 512

    new_reserve_sz = try_get_reserve_size_for_specified_page_size(raw, key, salt_sz, page_sz, iv_sz, reserve_sz)
    if new_reserve_sz > 0:  # default page_sz is ok
        return page_sz, new_reserve_sz

    page_sz = 512
    print_frequency = get_print_frequency(65536)
    while page_sz <= 65536:
        new_reserve_sz = try_get_reserve_size_for_specified_page_size(raw, key, salt_sz, page_sz, iv_sz, reserve_sz)
        if new_reserve_sz > 0:
            return page_sz, new_reserve_sz
        
        if page_sz % print_frequency == 0:
            print(f"\rTrying page size {page_sz}/65536.", end='', flush=True)

        page_sz <<= 1

    print()

    return -1, -1   # fail


def try_get_reserve_size_for_specified_page_size(raw, key, salt_sz, page_sz, iv_sz, reserve_sz):
    """Try to decrypt first page with specified page size.

    If default reserve size fail, change reserve size.
    When succeed, return reserve size.
    If always fail, return -1.
    """

    first_page_content = util.get_page(raw, page_sz, 1)[salt_sz:]

    if reserve_sz >= iv_sz:
        first_page_dec = decrypt_by_reserve_size(first_page_content, key, iv_sz, reserve_sz)
        # default reserve_sz is ok
        if util.is_valid_decrypted_header(first_page_dec) \
                and page_sz == util.get_page_size_from_database_header(raw[:salt_sz] + first_page_dec) \
                and reserve_sz == util.get_reserved_size_from_database_header(raw[:salt_sz] + first_page_dec):
            return reserve_sz

    # try every possible reserve size.
    # the usable size of a page is at least 480.
    possible_reserve_sizes = page_sz - 480
    print_frequency = get_print_frequency(possible_reserve_sizes)
    # for reserve_sz in range(iv_sz, page_sz - 480):
    for reserve_sz in range(iv_sz, possible_reserve_sizes):
        first_page_dec = decrypt_by_reserve_size(first_page_content, key, iv_sz, reserve_sz)
        if util.is_valid_decrypted_header(first_page_dec) \
                and page_sz == util.get_page_size_from_database_header(raw[:salt_sz] + first_page_dec) \
                and reserve_sz == util.get_reserved_size_from_database_header(raw[:salt_sz] + first_page_dec):
            return reserve_sz
        
        if reserve_sz % print_frequency == 0:
            print(f"\rTrying reserve size {reserve_sz}/{possible_reserve_sizes}.", end='')

    print()  # Retour à la ligne pour la prochaine instruction print

    return -1   # fail


def decrypt_by_reserve_size(first_page_without_salt, key, iv_sz, reserve_sz):
    """Decrypt page content using specified reserve size"""
    reserve = first_page_without_salt[-reserve_sz:]
    iv = reserve[:iv_sz]
    return util.decrypt(first_page_without_salt, key, iv)
