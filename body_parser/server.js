const express = require("express")
const bodyParser = require("body-parser")
const PORT = 3000 || process.env.PORT

const app = express()


app.use(bodyParser.urlencoded({extended:false}))


app.use("/", (req, res, next) => {
    res.send("<h1>Home page</h1>")
})

app.use("/addproduct", (req, res, next) => {
    res.send("<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Submit</button></form> ")
})

app.use("/product",(req,res,next)=>{
    console.log(req.body);
    res.redirect("/")
})


app.listen(PORT,()=>{
    console.log("server is on")
})