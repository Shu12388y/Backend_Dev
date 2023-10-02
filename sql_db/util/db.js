const sql=require("mysql2")
const db= sql.createPool({
    host:"user.c1tvovx2uif3.ap-south-1.rds.amazonaws.com",
    user:"admin",
    database:"user",
    password:"admin1234"
})


module.exports=db.promise()