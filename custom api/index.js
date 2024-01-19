const express = require('express');
require('dotenv').config({
    path: "./.env"
});

const router = require('./routes/user.route.js');
const connectDB = require('./db/dataBase.js');
const cors=require('cors');
const cookieParser=require('cookie-parser');





const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
// define user route
app.use("/api/v1/user",router);

connectDB()
    .then(() => {
        console.log("DB connected")

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log(err)
    })








