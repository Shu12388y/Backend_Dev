const express = require("express")
const app = express()
const PORT=process.env.PORT || 3000
const path =require("path")


app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname)+"/public/download.html")
})

app.get("/download",(req,res)=>{
    res.download(path.resolve(__dirname)+"/download/1306631.png")

})


// listening to port 3000

app.listen(PORT,()=>{
    console.log("server is on")
})