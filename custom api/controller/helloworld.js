function helloworld(req,res){
    res.json({
        message:"Hello World",
        status:"OK"
    })
}


module.exports = {helloworld}