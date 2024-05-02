// file system

const fs  = require("fs");


// wrtte to the file sync 
// fs.writeFileSync("./text.txt","Hey Node js")


// async function not return like writeFile,readFile
// but sync function will return some value


// write to the file async

// fs.writeFile("./new.js",`console.log("hello world")`,(err)=>{
//     console.error(err)
// })


// readfile sync


// const result = fs.readFileSync("./text.txt","utf-8")

// console.log(result)



fs.readFileSync("./text.txt","utf-8",(err,result)=>{
    if(err){
        console.error(err)
    }
    else{
        console.log(result)
    }
})