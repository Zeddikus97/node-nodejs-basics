import { createReadStream  } from 'fs';
import __dirname from './pathGenerator/pathGenerator.js';

const read = async () => {
    const newReadStream = createReadStream(`${__dirname}files/fileToRead.txt`)
    newReadStream.pipe(process.stdout);
};

await read();