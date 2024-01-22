const express = require('express');
const router =  express.Router();
const userRegister =require('../controller/user.controller.js');
const storage = require('../middlewares/multer.js');

router.route('/register').get(userRegister);

router.route("/register").post(storage,userRegister);



module.exports = router;