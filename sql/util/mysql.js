const mysql = require("mysql2");

const dB=mysql.createPool({
  host:"",
  user:"",
  password:""
})


module.exports=dB