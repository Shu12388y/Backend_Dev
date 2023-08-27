const http = require("http")
const PORT = process.env.PORT || 3000
const path=require("path")
const fs=require("fs")
const { url } = require("inspector")

const server = http.createServer((req, res) => {
    //   let create some routes
    let url = req.url;
    let method = req.method;
    if(url==="/",method==="GET"){
        // we will send the html page
        const homePage=fs.readFile(path.join(__dirname,"public","index.html"),"utf-8",(err,content)=>{
            if(err){
                throw err
            }
            else{
                res.end(content)

            }
        })
    }
    if(url==="/message" && method==="GET"){
        const messagePage=fs.readFile(path.join(__dirname,"public","message.html"),"utf-8",(err,content)=>{
            res.setHeader("Content-Type","text/html")
            res.statusCode=200
            if(err){
                throw err
            }
            else{
                res.end(content)
                
            }
        })
    }
    if(url==="/datamessage" && method==="POST"){
        const body=[]
        req.on("data",(chunk)=>{
            body.push(chunk)
        })
        req.on("end",()=>{
            const parseBody=Buffer.concat(body).toString();
            const message=parseBody.split("=")[1]
            fs.writeFile("data.txt",message,(err)=>{
                if(err){
                    throw err
                }
                else{
                    res.statusCode=302;
                    res.setHeader('Content-Type',"text/html")
                    res.setHeader('Location','/')
                    return res.end()
                }

            })

        })
    
    }
})



server.listen(PORT, () => {
    console.log(`server is on working in ${PORT}`)
})


