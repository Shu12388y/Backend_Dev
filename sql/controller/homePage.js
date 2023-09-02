const homePage = (req, res, next) => {
  res.render("index.ejs", {
    title: "Home Page",
    header: "Welcome to our Page",
  });
};


module.exports={
    homePage
}