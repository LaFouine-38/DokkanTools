#!/usr/bin/env node

const program = new (require('commander')).Command();
const { exec } = require('child_process');
const path = require('path');

py_dokkan_database_decryptor_folder = path.resolve(__dirname, './API/py_dokkan_database_decryptor')
database_folder = path.resolve(__dirname, './API/database')

program.version('1.0.0').description('Custom CLI');

program
    .command('decrypt <inputFile> [outputFile]')
    .description('Decrypt the database file')
    .action((inputFile, outputFile = "db_glo_decrypted_latest.db") => {
        const inputFilePath = path.resolve(py_dokkan_database_decryptor_folder, database_folder, inputFile)
        const outputFilePath = path.resolve(py_dokkan_database_decryptor_folder, database_folder, outputFile)

        console.log(`python ${path.resolve(py_dokkan_database_decryptor_folder, 'decrypt.py')} ${inputFilePath} ${outputFilePath}`);

        const childProcess = exec(`python -u ${path.resolve(py_dokkan_database_decryptor_folder, 'decrypt.py')} ${inputFilePath} ${outputFilePath}`);
        // Écouter la sortie standard
        childProcess.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });

        // Écouter la sortie d'erreur
        childProcess.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
        });

        // Gérer la fin du processus
        childProcess.on('close', (code) => {
            console.log(`Child process exited with code ${code}`);
        });
    });


    program
    .command('start <mode>')
    .description('Decrypt the database file')
    .action((mode) => {
        if (mode == 'dev'){
            childProcess.exec('node API/index.js')
        }
    })

program.parse(process.argv);
