import {getFirestore,collection,addDoc,getDoc, doc} from "firebase/firestore";
import app from "./firebase"



const db = getFirestore(app);


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