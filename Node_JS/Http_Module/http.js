//? let create a http server

const http=require("http");
const fs=require("fs");
const path=require("path")
const port = process.env.PORT || 3000


const app=http.createServer((req,res)=>{


    res.writeHead(200,{
        'Content-Type':"text/html"
    })



    if(req.url ==="/"){

    
    const file=fs.readFile(path.join(__dirname,"public","index.html"),"utf-8",(err,content)=>{
        if(err){
            throw err
        }
        

            res.end(content)
        
       
        
    
    })
}


if(req.url==="/about"){
    const file=fs.readFile(path.join(__dirname,"public","about.html"),"utf-8",(err,content)=>{
        if(err){
            throw err
        }
        

            res.end(content)
        
       
        
    
    })



}
    
})



app.listen(port,()=>{
    console.log("server is on")
})