const server =  require("express")
const app=server()
const PORT=process.env.PORT || 3000

// creating a static middleware

app.use(server.static("public"))




// listening to port
app.listen(PORT,()=>{
    console.log("server is on")
})