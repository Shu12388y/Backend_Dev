import {ref,set,getDatabase} from "firebase/database"
import app from "./api/firebase"
import "./App.css";
import { useState } from "react";



const db = getDatabase(app);
function App() {
  const [data,setData] = useState('');

  async function addData(){
   const dataInfo =  await set(ref(db,'user'),{
      data
    })
    if(dataInfo){

      setData('')
    }
  }
  return (
    <>
      <h1>Welcome to Firebase</h1>
      <input type="text" onChange={(e)=>setData(e.target.value)} />
      <button onClick={addData}>Add Data</button>
    </>
  );
}

export default App;
