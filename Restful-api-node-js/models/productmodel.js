// In model we add the product details

const product = require("../data/product.json");


function findALL(){
 return  new Promise((resolve,reject)=>{
    resolve(product)
 }) 

}



module.exports={
    findALL
}