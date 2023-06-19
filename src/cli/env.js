const parseEnv = () => {
    let variables_array=[];
    let index=1;
    for(let variable in process.env){
        if(variable.split("RSS_").length>1){
            variables_array.push(`${variable}=${process.env[variable]}`);
            index++;
        }
    }
    console.log(variables_array.reverse().join("; "))
    // Write your code here 
};

parseEnv();