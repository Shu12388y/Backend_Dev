const express=require("express")
const route=express.Router()
const homeController=require("../controller/controller")
route.get("/",homeController)



module.exports=route