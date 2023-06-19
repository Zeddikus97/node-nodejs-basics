const parseArgs = async () => {
    let lines = process.argv.slice(2).reduce((lines, arg, index, array)=>{
        const nextValue = array[index+1]
        if(arg.split("--").length>1&&nextValue){
            lines.push(`${arg.slice(2)} is ${nextValue}`);
        }
        return lines;
    }, [])
    console.log(lines.join(", "))
    // Write your code here 
};

await parseArgs();