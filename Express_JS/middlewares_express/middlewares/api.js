function apiKey(req,res,next){
    const apikey="12345";
    const userApiKey=req.query.apikey;
    if(userApiKey && (userApiKey===apikey)){
        next();
    }
    else{
        res.json({
            message:"Not allowed"
        })
    }
}


module.exports=apiKey