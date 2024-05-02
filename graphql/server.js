import dotenv from "dotenv"
dotenv.config({
    path: '.env'
});

import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
import pkg from "body-parser";
import helmet from "helmet";
import graphqlRoute from "./routes/graphql.route.js";
import ruruRouter from "./routes/ruru.route.js";


const app = express()


// configure middlewares
const {urlencoded} = pkg
app.use(express.json({limit:'16kb'}));
app.use(cors({
    origin:'http://localhost:5173'
}));
app.use(cookieParser());
app.use(urlencoded({extended:'true',limit:'16kb'}));
// app.use(helmet());
app.use(ruruRouter)

app.use(graphqlRoute)












app.listen(process.env.PORT, () => {
    console.log(`Server started on port`,process.env.PORT);
});