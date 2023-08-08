const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const path = require("path")

app.set("view engine","ejs")



app.get("/",(req,res)=>{
    res.render("index",{
        title:"Home Page",
        h1: "Home Page"
    })
})

app.get("/about",(req,res)=>{
    res.render("about",{
        title:"About Page",
        h1: "Welcome to About Page"
    })
})





app.listen(PORT,()=>{
    console.log(`server is on ${PORT}`)
})




