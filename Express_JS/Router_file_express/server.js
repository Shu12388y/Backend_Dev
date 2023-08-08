const express =require("express")
const PORT=process.env.PORT || 3000
const app=express();
const homeRoute=require("./Router/homeRoute")
const userRoute=require("./Router/user")

app.set("view engine","ejs")

app.use(homeRoute)
app.use(userRoute)
app.listen(PORT,()=>{
    console.log("server is on")
})