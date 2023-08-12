const Product = require("../models/productmodel");
const {b4:uuid}=require("uuid")
const utilis=require("../utilis.js")

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
        let body=''
        req.on('data',(chuck)=>{
            body+=chuck.toString()
        })

        req.on('end',async()=>{
            const {names,description,price,location}=JSON.parse(body)
            const prods={
                names,
                description,
                price,
                location
            }
            const list=await Product.create(prods)
            res.writeHead(201,{"Content-Type":"application/json"})
            res.end(JSON.stringify(list))
        })
       
    } catch (error) {
        console.log(error)
    }
   

}


// ? Update a product

const updateProduct=async(req,res,id)=>{
try {
    const product=await Product.findById(id)
    if(!product){
        res.writeHead(404,{"Content-Type":"application/json"})
        res.JSON.stringify({message:"product does not exist"})
    }
    else{
        const body=await utilis.getPostData(req)
        const {name,description,price,location}=JSON.parse(body)
        const prods={
            name:name || product.name,
            description :description || product.description,
            price:price || product.price,
            location :location || product.location

        }
        const updproduct=await Product.update(id,prods)
        res.writeHead(200,{"Content-Type":"application/json"})
        res.end(JSON.stringify(updproduct))
    }
} catch (error) {
    console.log(error)
}



}



// ? delete the product
const removeProduct =(req,res)=>{
    
}


module.exports = {
    productData,
    productId,
    ProductCreation,
    updateProduct
};
