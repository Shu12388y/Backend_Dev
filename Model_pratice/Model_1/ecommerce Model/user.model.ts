import mongoose from "mongoose";

// ecommerce model
// define  the schema
const userSchema= new mongoose.Schema({
username:{
    type: String,
    required: true,
    unique: true,
    lowercase: true,
},
email:{
    type: String,
    required: true,
    unique: true,
    lowercase: true,
},
password:{
    type: String,
    required: true,
},
 

},{
    timestamps: true

})









// export the model
export const User = mongoose.model("User", userSchema);