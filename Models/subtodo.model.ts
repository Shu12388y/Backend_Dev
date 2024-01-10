import mongoose from "mongoose";


const subTodoSchema = new mongoose.Schema({
    content:{
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


},{
    timestamps:true


});






export const SubTodo=mongoose.model('SubTodo',subTodoSchema)