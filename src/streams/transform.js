import { pipeline, Transform } from 'stream';
import __dirname from './pathGenerator/pathGenerator.js';

const reverse = (str) => {
    if (str === "") return "";
    else return reverse(str.substr(1)) + str.charAt(0);
}

const transform = async () => {
    const transformedData = new Transform({
        transform(chunk, encoding, callback){
            try{
                const chunkString = chunk.toString().trim();
                const reversedChunk = reverse(chunkString);
                callback(null, `${reversedChunk}\n`)
            }
            catch{
                callback(err)
            }
        }
    })
    pipeline(
        process.stdin,
        transformedData,
        process.stdout,
        err => {
            throw err;
        }
    )
};

await transform();

