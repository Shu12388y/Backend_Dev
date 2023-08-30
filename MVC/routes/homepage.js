const express = require("express");
const route = express.Router();
const {homeController}=require("../controller/homeController")

// home page route
route.get("/", homeController );

module.exports = route;
