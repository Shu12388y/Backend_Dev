const homeController=(req,res,next)=>{
        res.render("index.ejs",{title:"Home page",heading:"Welcome to Our Home Page"})
    
}

module.exports={
    homeController
}