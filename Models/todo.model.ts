import mongoose, { mongo } from "mongoose";

const todoSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true,
        lowercase:true,
    
    },
    description:{
        type:String,
        required:true,
        lowercase:true,
    
    },
    status:{
        type:String,
        completed:false,
        lowercase:true,
    
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'

    },
    subTodo:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"SubTodo"
        }
    ]
},{
    timestamps:true

});

export const Todo=mongoose.model('Todo',todoSchema)