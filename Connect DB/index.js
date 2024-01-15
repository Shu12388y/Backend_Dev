import express from "express";
import connectDB from "./db/index.js"

const app = express()



connectDB()


// listen to port 
app.listen(8000,()=>{
    console.log("server connected")
})
