import {collection,query,getFirestore,where, getDocs} from 'firebase/firestore';
import app from "./firebase";



const db = getFirestore(app);



export async function getData(){
    const dataQuery = collection(db,"users");


    const q = query(dataQuery,where("gender","==","male"));
    const snap = await getDocs(q);
    const dataUser = await snap.docs.map(doc=>doc.data());  
    return dataUser
    
}


