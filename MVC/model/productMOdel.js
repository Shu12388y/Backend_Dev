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
        return product
    }
}



module.exports=Product