const express=require("express")
const session = require("express-session")
const PORT=300
const app =express()




const { get } = require("./routes/route")



app.listen(PORT,()=>{
    console.log("server is on")
})