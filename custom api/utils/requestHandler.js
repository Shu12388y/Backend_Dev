const asynchandler=(requestHandler)=>{
  return  async (req,res,next)=>{
        return Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}


module.exports=asynchandler;