<<<<<<< HEAD
import {getFirestore,collection,addDoc,getDoc, doc} from "firebase/firestore";
import app from "./firebase"
=======
import {collection,query,getFirestore,where, getDocs} from 'firebase/firestore';
import app from "./firebase";
>>>>>>> 9370f9ff31eb5d78ef6323dd62337b2f7a1b2c51



const db = getFirestore(app);


<<<<<<< HEAD
// add data function
export async function addData(name,age,gender){
   try {
     const docRef = await addDoc(collection(db,"users"),{
        name,
        age,
        gender
     })
 
     const response =  await docRef;
 
     console.log(response.id)
 
   } catch (error) {
    console.log(error)
   }
}


export async function getData(id){
    const docRef = doc(db,"users",id)
    const snap =  await getDoc(docRef);

        return snap

}
=======

export async function getData(){
    const dataQuery = collection(db,"users");


    const q = query(dataQuery,where("gender","==","male"));
    const snap = await getDocs(q);
    const dataUser = await snap.docs.map(doc=>doc.data());  
    return dataUser
    
}


>>>>>>> 9370f9ff31eb5d78ef6323dd62337b2f7a1b2c51
