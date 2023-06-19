const parseEnv = async () => {
    let variables_array=[];
    let index=1;
    for(let variable in process.env){
        if(variable.split("RSS_").length>1){
            variables_array.push(`RSS_name${index}=${process.env[variable]}`);
            index++;
        }
    }
    console.log(variables_array.join("; "))
    // Write your code here 
};

await parseEnv();