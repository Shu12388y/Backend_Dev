// In model we add the product details

const product = require("../data/product.json");
const utilis=require("../utilis.js")
const {v4:uuidv4}=require("uuid")


function findALL(){
 return  new Promise((resolve,reject)=>{
    resolve(product)
 }) 

}
function findById(id){
    return new Promise((resolve,reject)=>{
        const products=product.find((p)=>p.id===id)
        resolve(products)
    })
   
}


function create(prods){
    return new Promise((resolve,reject)=>{
        
            const newProduct={id:uuidv4(),...prods}
            product.push(newProduct)
            utilis.writeDataToFile("./data/product.json",product)
            resolve(newProduct)

        
    })
}


function update(id,products){
    return new Promise ((resolve,reject)=>{
        const index=product.findIndex((p)=>p.id===id)
        product[index]={id,...products}
        utilis.writeDataToFile("./data/product.json",product)
        resolve(product[index])

        
    })
}

module.exports={
    findALL,
    findById,
    create,
    update
}