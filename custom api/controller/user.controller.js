const asynchandler = require('../utils/requestHandler.js');
const ApiError = require('../utils/ApiError.js');
const User = require('../models/user.model.js');
const uploadFile = require('../utils/cloudinary.js');
const ApiResponse = require('../utils/apiResponse.js');


const userRegister = asynchandler(async (_req, res) => {
    res.status(200).json(
        {
            message: "User registered successfully"
        }
    )
})

const registerUser = asynchandler(async (req, res) => {
    // send user data
    // check the user data
    // check the user already exists or not
    // check for image and avator
    //  upload the file to cloudinary
    // create the user object
    // remove the password and refresh token from the user object
    // check user creation
    // return response

    const { username, email, password, fullname } = req.body

    if ([username, email, password, fullname].some((field) => field ? trim() === "" : false)) {
        throw new ApiError(400, "All fields are required");

    }

    const userExist = await User.findOne({
        $or: [{ username }, { email }],

    })

    if (userExist) {
        throw new ApiError(409, "User already exists");
    }

    const avatorlocalPath = req.file?.avator[0].path;
    const imageLocalPath = req.file?.image[0].path || null;

    if (!avatorlocalPath) {
        throw new ApiError(400, "Avator is required");
    }

    const avator = await uploadFile(avatorlocalPath);
    const image = imageLocalPath ? await uploadFile(imageLocalPath) : null;

    if (!avator) {
        throw new ApiError(500, "Something went wrong");
    }


    const user = await User.create({
        fullname,
        avator: avator.url,
        image: image?.url || "",
        email,
        password,
        username: username.toLowerCase(),

    })

    const createUser = await User.findById(user._id).select("-password -refreshToken")

    if (!createUser) {
        throw new ApiError(500, "Something went wrong");
    }

    return res.status(201).json(
        new ApiResponse(200, createUser, "User created successfully")
    )

})

const loginUser = asynchandler(async (req, res) => {

    
})








module.exports = { userRegister, registerUser }