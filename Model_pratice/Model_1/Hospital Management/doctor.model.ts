import mongoose from "mongoose";

const hospitalAvaialbleSchema = new mongoose.Schema({
name:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Hospital",

},
time:{
    type: String,
    required: true,

}

})

// doctor schema
const doctorSchema = new mongoose.Schema({
    name:{
        type: String,
        lowercase: true,
        required: true,
    },
    specialization:{
        type: String,
        lowercase: true,
        required: true,
    },
    experience:{
        type: Number,
        requried: true,
    },
    address:{
        type: String,
        lowercase: true,
        required: true,
    },
    hospitalAvaialble:{
        type:[hospitalAvaialbleSchema],
        required: true,
    }


    
},{timestamps: true});







// export the model

export const Doctor = mongoose.model("Doctor", doctorSchema);