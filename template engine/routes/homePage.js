const express=require("express")
const path = require("path")
const route=express.Router()

route.get("/",(req,res)=>{
    res.render("index.ejs",{pagetitle:"home page"})
})


module.exports=route