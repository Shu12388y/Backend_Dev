const express=require("express")
const route=express.Router()
const path=require("path")
const bodyParser=require("body-parser")


route.use(bodyParser.urlencoded({extended:false}))

route.get("/addproduct",(req,res)=>{
res.sendFile(path.join(__dirname,"../","views","product.html"))
})

route.post("/product",(req,res)=>{
console.log(req.body)
res.redirect("/")
})

module.exports=route