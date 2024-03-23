import {getAuth,signInWithEmailAndPassword} from "firebase/auth";
import app from "./firebase";
import Cookies from "js-cookie";



async function userSignIn(email,password){
   try {
     const auth =  getAuth(app);
     const signInUser = await signInWithEmailAndPassword(auth,email,password);
     const response =  await signInUser.user
     if(!response) return "failed"
     Cookies.set("auth",response.accessToken,{expires:7})
     return "success"
    
   } catch (error) {
    console.log(error)
   } 
}



export default userSignIn