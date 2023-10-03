const express=require("express")
const app=express()

const home=require("./routes/route")




app.set("view engine","ejs")
app.set("views","views")
app.use(home)




app.listen(3000,()=>{
    console.log("server is on")
})