import dotenv from "dotenv"
dotenv.config({
  path:'.env'
});

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.BUCKET,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID,
  databaseURL:process.env.DB_URL
}

const app = initializeApp(firebaseConfig);



export default app