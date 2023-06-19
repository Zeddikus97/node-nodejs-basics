import { createGzip } from 'zlib';
import { createWriteStream, createReadStream } from 'fs';
import __dirname from './pathGenerator/pathGenerator.js';

const compress = async () => {
    const inputStream = createReadStream(`${__dirname}files/fileToCompress.txt`);
    const outputStream = createWriteStream(`${__dirname}files/archive.gz`);
    const gzip = createGzip();
    inputStream.pipe(gzip).pipe(outputStream);
};

await compress();