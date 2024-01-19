const express = require('express');
const route = express.Router();
const data =require('../data/jokes.json');
const {helloworld} =require('../controller/helloworld.js');


route.get('/', helloworld)

route.get("/health",(req,res)=>{
    res.json({
        message:"Health Check",
        status:"OK"
        
    })
})

route.get("/jokes",(req,res)=>{
    res.json({
        message:"Jokes",
        data:data
    })
})


module.exports = route;