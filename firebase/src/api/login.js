import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import app from "./firebase";
import Cookies from "js-cookie";

async function userSignUp(email,password){
    try {
        const auth = getAuth(app);
        const signinAuth = await  createUserWithEmailAndPassword(auth,email,password);
        const response =  await signinAuth.user
        if(!response) return "failed"
        Cookies.set('token',response.accessToken)
        return "success"
        
    } catch (error) {
        console.log(error)
        
    }

}


export default userSignUp