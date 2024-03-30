import {getDatabase,ref,set} from "firebase/database"
import app from "./firebase"

export async function getRealTimeData(name,email,phonenumber){
    const db = getDatabase(app);
    const setDb = await set(ref(db,"user/"),{
        name,
        email,
        phonenumber
    }) 
    console.log(setDb)
}