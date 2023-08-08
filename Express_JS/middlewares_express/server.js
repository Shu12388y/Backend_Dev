const express =require("express")
const path= require("path")
const PORT=process.env.PORT || 3000


const app = express()

const homeRoute=require("./router/homeRoute")
app.set("view engine","ejs")


app.use(homeRoute)



app.listen(PORT,()=>{
    console.log("server is on")
})