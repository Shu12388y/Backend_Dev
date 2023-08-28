const express = require("express");
const app = express()
const PORT = 3000 || process.env.PORT


app.use("/", (req, res, next) => {
    res.send("<h1>Server is on. Welcome to Home Page")
})




app.listen(PORT, () => {
    console.log("server is on");
})