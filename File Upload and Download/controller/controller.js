const fs = require("fs");
const path = require("path");

const fileUploader = (req, res, next) => {
  res.render("index.ejs");
};

const uploadHandler = (req, res, next) => {
  const file = req.file;
  res.redirect("/");
};

const downloadHandler = (req, res, next) => {
  res.render("download.ejs");
};

const fileDownload = (req, res, next) => {
  
  const filePath = path.join(__dirname, "../folder", "./test.txt");

  fs.readFile(filePath, (err, data) => {
    if (err) {
      return next(err);
    }
    res.send(data);
  });
};
module.exports = {
  fileUploader,
  uploadHandler,
  downloadHandler,
  fileDownload,
};
