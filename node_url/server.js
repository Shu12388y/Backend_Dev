import express from "express"
const app =express()
const PORT=3000 || process.env.PORT




app.use(express.static('public'))



app.get("/about",(req,res,next)=>{
    res.sendFile("./static/about.html",(error)=>{
        throw error;
    })
})


app.listen(PORT,()=>{
    console.log("server is on")
})