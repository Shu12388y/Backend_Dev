const express = require("express");
const route = express.Router();

const { fileUploader, uploadHandler } = require("../controller/controller");

route.get("/", fileUploader);



route.post("/upload",uploadHandler)

module.exports = route;
