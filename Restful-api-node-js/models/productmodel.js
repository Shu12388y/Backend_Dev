// In model we add the product details

const product = require("../data/product.json");


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
findById()

module.exports={
    findALL,
    findById
}