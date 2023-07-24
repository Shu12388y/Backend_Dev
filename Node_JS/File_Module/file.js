//? FIle module is in built module in the js
const fs=require("fs")
const { default: test } = require("node:test")
const path=require("path")

//? make a dir
// fs.mkdir(path.join(__dirname,"/test"),(err)=>{
//     if(err){
//         console.log("something went wrong")
//         return
//     }
//     console.log("folder is created")
// })

//? If the folder exist it will not make the folder



//? create a file
fs.writeFile(path.join(__dirname,'test',"test.txt"),"hello text file \n",(err)=>{
    if(err){
        throw err
    }
    console.log("File is created")
})

//? If the folder doesn't exist it will not create the file
//? for that we have to create the folder and we can write in the file






//? Append the data to the file
fs.appendFile(path.join(__dirname,"test","test.txt"),"new data is added",(err)=>{
    if(err){
        throw err
    }
    console.log("data is added")
})



//? Read a file

fs.readFile(path.join(__dirname,"test","test.txt"),"utf-8",(err,data)=>{
    if(err){
        throw err
    }
    // const content=Buffer.from(data)
    console.log(data)
})