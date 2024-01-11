import mongoose from "mongoose";


// hosital schema
const hospitalSchema = new mongoose.Schema({
    name:{
        type: String,
        lowercase: true,
        required: true,
    },
    address:{
        type: String,
        lowercase: true,
        required: true,
    },
    contact:{
        type: Number,
        required: true,
    },
    availableDoctors:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Doctor",
    },
    
},{timestamps: true});









// export the model
export const Hospital = mongoose.model("Hospital", hospitalSchema);