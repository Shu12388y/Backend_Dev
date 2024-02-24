import express from "express"
import { Server } from "socket.io"
import {createServer} from "http"


const app = express()


const server = createServer(app)
const io = new Server(server,{
    cors:{
        origin:"*",
        methods:['GET','POST'],
        credentials:true
    }
})

app.get("/",(req,res)=>{
    res.send("Hello")
})

io.on("connection",(socket)=>{
    socket.emit("welcome","welcome to the room")
    socket.on("message",(data)=>{
        console.log(data)
        io.emit('pool',data)
        // socket.broadcast.emit('pool',data)
        // io.broadcast.emit('pool',data)

    })

    
    console.log("connected")
})


server.listen(3000,()=>{
    console.log("server is on")
})





