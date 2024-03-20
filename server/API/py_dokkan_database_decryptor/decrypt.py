#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Module        : decrypt.py
# Author        : bssthu
# Project       : pysqlsimplecipher
# Creation date : 2016-06-03
# Description   :
#


import sys
import decryptor
import config


def usage():
    ('Usage: python decrypt.py encrypted.db output.db password?')


def main():
    # arguments
    argv = sys.argv
    if len(argv) != 4 and not (argv[1].endswith('.db') and argv[2].endswith('.db')):
        usage()
        return
    filename_in = argv[1]
    filename_out = argv[2]
    if len(argv) == 3:
        password = bytearray(config.dokkandb_password.encode('utf-8'))
    else:
        password = bytearray(argv[3].encode('utf-8'))

    decryptor.decrypt_file(filename_in, filename_out, password)


if __name__ == '__main__':
    main()
