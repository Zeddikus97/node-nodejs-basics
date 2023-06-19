import { createUnzip } from 'zlib';
import { createWriteStream, createReadStream } from 'fs';
import __dirname from './pathGenerator/pathGenerator.js';

const decompress = async () => {
    const inputStream = createReadStream(`${__dirname}files/archive.gz`);
    const outputStream = createWriteStream(`${__dirname}files/fileToCompress.txt`);
    const gzip = createUnzip();
    inputStream.pipe(gzip).pipe(outputStream);
};

await decompress();