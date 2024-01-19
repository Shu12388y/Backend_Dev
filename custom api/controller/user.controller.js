const asynchandler = require('../utils/requestHandler.js');

const userRegister = asynchandler(async (req, res) => {
    res.status(200).json(
        {
             message: "User registered successfully" 
        }
        )
})



module.exports = userRegister