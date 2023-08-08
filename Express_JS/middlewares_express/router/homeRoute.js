const express =  require("express")
const route = express.Router()
const apiMiddleware=require("../middlewares/api")



route.get("/apikey",apiMiddleware,(req,res)=>{
    res.json({
        
        Id:1,
        product:"apple"
        
    }
    )

})





module.exports=route