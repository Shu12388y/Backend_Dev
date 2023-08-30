const express = require("express");
const route = express.Router();
// const model = require("../model/homePageModel");

// home page route
route.get("/", (req,res)=>{
    res.render("index.ejs",{title:"Home page",heading:"Welcome to Our Home Page"})
});

module.exports = route;
