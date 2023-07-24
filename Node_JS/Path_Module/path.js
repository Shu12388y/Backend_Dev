//? Path module is in-built module in node js


//core module

const { log } = require("console")
const path=require("path")


// console.log(__filename)
//? output: C:\Users\shubham\Desktop\Backend\Node_JS\Path_Module\path.js

//dirName
console.log(path.dirname(__filename))
//? output: C:\Users\shubham\Desktop\Backend\Node_JS\Path_Module


//fileName
console.log(path.basename(__filename))
//? Output: path.js


// extension name
console.log(path.extname(__filename))
//? Output: .js   


//parse name
console.log(path.parse(__filename))
//? Output: {
//?   root: 'C:\\',
//?   dir: 'C:\\Users\\shubham\\Desktop\\Backend\\Node_JS\\Path_Module',
//?   base: 'path.js',
//?   ext: '.js',
//?   name: 'path'
//? }

//join method
console.log(path.join(__dirname,"new","app.js"))
//? Output: C:\Users\shubham\Desktop\Backend\Node_JS\Path_Module\new\app.js





