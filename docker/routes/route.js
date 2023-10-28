const express=require("express")
const route=express.Router()


route.get("/",(req,res,next)=>{
    res.json({message:"hello web server is on"})
})


route.get("/health",(req,res,next)=>{
    res.status(200).json({message:"health is ok...."})
})



module.exports=route