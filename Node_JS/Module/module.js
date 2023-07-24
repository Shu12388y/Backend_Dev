
//? how to import global modules
// const color=require('cli-color')

// console.log(color.red("hello"))



//? How to import local modules
// const {register,login}=require("./auth")  // object destruction
const auth=require("./auth")


// register("shubham")
auth.login("shubham","1234")
