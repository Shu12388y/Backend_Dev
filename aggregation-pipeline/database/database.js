import dotenv from "dotenv"
dotenv.config({
    path:'.env'
});


import mongoose from "mongoose"


export const dbConnect=async()=>{
    try {
        await mongoose.connect(process.env.DB_URI)
    } catch (error) {
        console.log("errror in db",error)
        
    }
}