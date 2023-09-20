const dBModel= require("../models/model")

const homePage = (req, res, next) => {
  res.render("index.ejs", {
    title: "Home Page",
    header: "Welcome to our Page",
  });
};


const aboutPage=(req,res,next)=>{
  dBModel.fetchAll().then((result) => {
    res.render('about.ejs',{
      title:'About page',
      header:'Welcome To About Page ',
      data:result
  })
    
  }).catch((err) => {
    console.log(err)
  });
   
}


module.exports={
    homePage,
    aboutPage
}