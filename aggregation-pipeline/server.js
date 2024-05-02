import dotenv from "dotenv"
dotenv.config({
    path:".env"
});



import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import pkg  from "body-parser"
import { dbConnect } from "./database/database.js";


const {urlencoded} = pkg;




const app =  express()


app.use(cors())
app.use(cookieParser({limit:"16kb"}))
app.use(urlencoded({extended:true,limit:"16kb"}))
app.use(express.json());



app.use("/",(_req,res)=>{
    res.send("<h1>Server is on</h1>");
})



dbConnect()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("server is on",process.env.PORT)
    })
})
.catch((error)=>{
    console.log(error)
})





