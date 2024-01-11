import mongoose from "mongoose";


const orderItem= new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required: true,
    },
    quantiy:{
        type: Number,
        required: true,
    
    }

})

const orderSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product"
    },
    qunatity:{
        type: Number,
        required: true,
    },
    orderItems:{
        type:[orderItem],
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    status:{
        type: String,
        enum: ["pending", "completed", "rejected"],
        default: "pending",
    },

    
},{
    timestamps: true

});









export const Order = mongoose.model("Order", orderSchema);