const express=require("express")
const app = express()

const path=require("path")
const fs=require("fs")




// port initalization
const PORT=process.env.PORT || 3000

// creating routes

// ! Method-1
// app.get("/",(req,res)=>{
//     const homePage=fs.readFile(path.join(__dirname,"index.html"),"utf-8",(err,content)=>{
//         if(err){
//             throw err
//         }
//         res.send(content)
//     })

  
// })


// ! Method - 2
app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname)+"/index.html")
}) 



// ! Multiple Route

app.get("/about",(req,res)=>{

    res.sendFile(path.resolve(__dirname)+"/about.html")
})


app.listen(PORT,()=>{
    console.log("server is on")
})