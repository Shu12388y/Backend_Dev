const express=require("express")
const PORT =3000 || process.env.PORT

const app=express()

const productRoute=require("./routes/productRoute")
const homeRoute=require("./routes/userRoute")


app.use(productRoute)
app.use(homeRoute)





app.listen(PORT,()=>{
    console.log("server is on")
})