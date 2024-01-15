import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config({
    path:"./env"
})

const connectDB=async()=>{
    try {
     const mongoDB =   await mongoose.connect(`${db_URL}/${db_Name}`)
     console.log(mongoDB.connection.host)
    } catch (error) {
        console.error(error)
        process.exit(1)
    }

}



export default connectDB