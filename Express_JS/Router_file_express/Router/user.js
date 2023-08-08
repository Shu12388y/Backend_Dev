const express=require("express")
const route=express.Router()

route.get("/signin",(req,res)=>{
    res.render("../views/signin.ejs")
})

route.get("/login",(req,res)=>{
    res.render("../views/login.ejs")
})


module.exports=route