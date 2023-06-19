import { createWriteStream  } from 'fs';
import __dirname from './pathGenerator/pathGenerator.js';

const write = async () => {
    const newWriteStream = createWriteStream(`${__dirname}files/fileToWrite.txt`)
    process.stdin.pipe(newWriteStream);
};

await write();