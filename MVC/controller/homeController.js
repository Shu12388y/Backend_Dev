const homeController=(req,res,next)=>{
        res.render("index.ejs",{title:"Home page",heading:"Welcome to Our Home Page"})
    
}


const errorController=(req,res,next)=>{
    res.statusCode=404
    res.render('404.ejs')

}


module.exports={
    homeController,
    errorController
}