import { readFile } from 'fs/promises';
import { createHash } from 'crypto';
import __dirname from './pathGenerator/pathGenerator.js';

const calculateHash = async () => {
    await readFile(`${__dirname}files/fileToCalculateHashFor.txt`, () => {
        //console.log(success)
    })
    .then(fileData => {
        console.log(createHash('sha256').update(fileData).digest('hex'));
    })
    .catch(err => {
        throw err;
    })
};

await calculateHash();