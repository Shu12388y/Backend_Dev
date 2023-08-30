const product=[]

const fs=require("fs")
const path=require("path")

class Product{
    constructor(title){
        this.title=title
    }
// Prototype
    save(){
        const filepath=path.join(__dirname,"../","data","product.json")
        let products="";
        fs.readFile(filepath,(error,content)=>{
            if(!error){
                products=JSON.parse(content)
            }
            product.push(this)
            fs.writeFile(filepath,JSON.stringify(products),(err)=>{
                throw err
            })
        })
    }


    static fetchAll(){
      fs.readFile(path.join(__dirname,"../","data","product.json"),(error,content)=>{
        if(error){
            throw error
        }
        else{
            return JSON.parse(content)
        }
      })
    }
}



module.exports=Product