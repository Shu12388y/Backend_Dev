const express=require("express")
const app =express()
const route=require("./routes/route")
const port=3000


app.use(route)




// listen to port
app.listen(port,()=>{
    console.log("server is on")
})


