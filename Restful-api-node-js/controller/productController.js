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

module.exports = {
    productData
};
