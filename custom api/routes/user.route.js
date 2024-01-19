const express = require('express');
const router =  express.Router();
const userRegister =require('../controller/user.controller.js');

router.route('/register').get(userRegister);





module.exports = router;