const { log } = require("console")
const express=require("express")
const PORT=3000 || process.env.PORT

const app = express()


const homePage=require("./routes/homePage")

app.set("view engine","ejs")
app.set("views","views")




app.use(homePage)



app.listen(PORT,()=>{
    console.log("server is on")
})