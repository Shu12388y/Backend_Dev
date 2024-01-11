import mongoose from "mongoose";


// patient model


const patientSchema = new mongoose.Schema({
    name:{
        type: String,
        lowercase: true,
        required: true,
    },
    disease:{
        type: String,
        lowercase: true,
        required: true,
    },
    age:{
        type: Number,
        requried: true,
    },
    address:{
        type: String,
        lowercase: true,
        required: true,
    },
    appointedDoctor:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Doctor",
        required: true,

    },
    admittedDate:{
        type: Date,
        required: true,
    },
    dischargedDate:{
        type: Date,
        required: true,
    },
    
},{timestamps: true});   








// export the model

export const Patient = mongoose.model("Patient", patientSchema);