const mongoose = require('mongoose');
const bcrypt =require("bcrypt")
const jwt = require("jsonwebtoken")


// defining user schema
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,

    },
    password:{
        type:String,
        required:[true,"Password is required"],
        trim:true,
        lowercase:true,
    },
    fullname:{
        type:String,
        unique:true,
        index:true,
        trim:true,
    },
    avator:{
        type:String,
        required:true,
    
    },
    coverImage:{
        type:String,
     
    
    },
    watchHistory:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Video"
        }
    ],
    refrehToken:{
        type:String,
    }

    

    

    
},
{
    timestamps:true

})

// hash the password
userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next()

    this.password=bcrypt.hash(this.password,10)
    next()
})

// defining a methdd for check the hashed password

userSchema.methods.checkPassword=async function(password){
    return await bcrypt.compare(password,this.password)
}


// creating user model
const  User = mongoose.model("User",userSchema)


module.exports = User