const express = require('express');
require('dotenv').config({
    path: "./.env"
});

const route = require('./routes/route.js');
const connectDB = require('./db/dataBase.js');

const app = express();

app.use(route);

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








