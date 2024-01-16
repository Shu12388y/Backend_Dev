const mongoose = require('mongoose');


// connect db
const connectDB = async () => {
    try {
    const db =  await mongoose.connect(`${process.env.MONGODB_URL}/user`)
        console.log(db.connection.host)
    } catch (error) {
        console.log(error)
    }
}


module.exports = connectDB;