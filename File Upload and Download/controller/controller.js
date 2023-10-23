const fileUploader = (req, res, next) => {
  res.render("index.ejs");
};

const uploadHandler = (req, res, next) => {
    
  res.redirect("/");
};

module.exports = {
  fileUploader,
  uploadHandler,
};
