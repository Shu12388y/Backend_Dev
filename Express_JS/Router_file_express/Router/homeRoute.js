const express=require("express");
const router=express.Router();
const path=require("path")
router.get("/",(req,res)=>{
    res.render("../views/index.ejs")
})

router.get("/about",(req,res)=>{
    res.render("../views/about.ejs")
})



module.exports=router