const express = require("express");
const route = express.Router();

const {
  fileUploader,
  uploadHandler,
  downloadHandler,
  fileDownload,
} = require("../controller/controller");

route.get("/", fileUploader);

route.post("/upload", uploadHandler);

route.get("/download", downloadHandler);

route.get("/filedownload", fileDownload);

module.exports = route;
