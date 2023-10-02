const model=require("../model/model")

const homeController=async(req,res,next)=>{
    const data=await model.fetch()

     res.json(data)


}

module.exports=homeController