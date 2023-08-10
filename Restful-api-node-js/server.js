const http = require("http");
const path = require("path");
const fs = require("fs");
const productController = require("./controller/productController.js");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        const homePage = fs.readFile(path.join(__dirname, "public", "index.html"), "utf-8", (err, content) => {
            if (err) {
                throw err;
            }
            res.end(content);
        });
    } else if (req.url === "/product" && req.method === "GET") {
        productController.productData(req, res); // Calling the productData function from the imported module
    }
    else if (req.url.match(/\/product\/([0-9]+)/) && req.method==="GET"){
        const id = req.url.match(/\/product\/([0-9]+)/)[1];
        productController.productId(req,res,id)
    }
    
    
    else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({
            "message": "Wrong Route"
        }));
    }
});

server.listen(PORT, () => {
    console.log("Server is on");
});
