const express=require("express")
const PORT=3000
const app=express()

const homePage=require("./routes/homepage")


app.set("view engine","ejs")
app.set("views","views")

app.use(express.static('public'))
app.use(homePage)


// listen to port express

app.listen(PORT,()=>{
    console.log("server is on")
})