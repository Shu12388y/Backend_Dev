const express = require("express");
const route = express.Router();

const { fileUploader, uploadHandler,downloadHandler } = require("../controller/controller");

route.get("/", fileUploader);



route.post("/upload",uploadHandler)

route.get("/download",downloadHandler)

module.exports = route;
