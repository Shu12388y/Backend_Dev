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

module.exports = {
  fileUploader,
  uploadHandler,
  downloadHandler,
};
