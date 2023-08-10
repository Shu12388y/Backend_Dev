const Product = require("../models/productmodel");


const productData = async (req, res) => {
    try {
        const products = await Product.findALL();
        res.writeHead(200, {'Content-Type': 'application/json'}); // Corrected function name
        res.end(JSON.stringify(products));
    } catch (error) {
        console.log(error);
    }
};


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

module.exports = {
    productData,
    productId
};
