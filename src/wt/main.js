
import { Worker } from "worker_threads";
import { cpus } from "os";
import __dirname from './pathGenerator/pathGenerator.js';


const performCalculations = async () => {
    const procs = cpus();
    //console.log(procs);

    const results = await Promise.allSettled(procs.map((proc, index)=>{
        //console.log(index, "index")
        return new Promise((res, rej)=> {
            const worker = new Worker(`${__dirname}worker.js`, {
                workerData: index+10
            })
            worker.on("message", msg => res(msg))
            worker.on("error", err => rej(err))
        })
    }))

    const output = results.map(({status, value}) =>(
        {
            status : status==="fulfilled" ? "resolved" : "error",
            data: status==="fulfilled" ? value : null
        }
    ))
    console.log(output)
};

await performCalculations();