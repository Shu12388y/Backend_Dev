const express=require("express")
const route=express.Router()
const {getLogin,postLogin}=require("./controller/loginController")

route.get("/login",getLogin)
route.post("/login",postLogin)




module.exports=route