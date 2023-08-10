const Product = require("../models/productmodel");
const {b4:uuid}=require("uuid")

// ? get the product
const productData = async (req, res) => {
    try {
        const products = await Product.findALL();
        res.writeHead(200, {'Content-Type': 'application/json'}); // Corrected function name
        res.end(JSON.stringify(products));
    } catch (error) {
        console.log(error);
    }
};




// ? get product by id
const productId=async(req,res,id)=>{
    try {
        const ProductId=await Product.findById(id);
        if(!ProductId){
            res.writeHead(404,{"application":"application/json"})
            res.end(JSON.stringify({message:"product not found"}))
        }
        else{
            
        res.writeHead(200,{"Content-Type":"application/json"})
       res.end(JSON.stringify(ProductId))

        }

        

        
    }  catch (error) {
        console.log("Error in productId:", error);
        res.writeHead(500, {"Content-Type": "application/json"});
        res.end(JSON.stringify({ message: "Internal Server Error" }));
    }
    

}





//? create a product

const ProductCreation=async(req,res)=>{
    try {
        const prods={
            name:"apple",
            description:"new iphone 14 pro",
            price:20000,
            location:"india"
        }
        const list=await Product.create(prods)
        res.writeHead(201,{"Content-Type":"application/json"})
        res.end(JSON.stringify(list))
    } catch (error) {
        console.log(error)
    }
   

}


module.exports = {
    productData,
    productId,
    ProductCreation
};
