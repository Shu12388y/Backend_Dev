// import {ref,set,getDatabase} from "firebase/database"
// import app from "./api/firebase";
import "./App.css";
import { useState } from "react";
// import userSignUp from "./api/login";
// import userSignIn from "./api/signIn";

import { addData,getData } from "./api/database";

// const db = getDatabase(app);
function App() {
  const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  


  // const authUser = async () => {
  //   await userSignUp(email, password);
  // };

  // const loginUser = async () => {
  //   await userSignIn(email, password);
  // };

  async function userAddData(){
    try {
      await addData(name,age,gender)
    } catch (error) {
      console.log(error)
    }
  }

  async function userGetData(){
    try {
      const response = await getData("fx6P6DuBpNM8ehWn5xyA")
      console.log(response._document.data.value.mapValue.fields.name)
      setData(response._document.data.value.mapValue.fields.name)
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h1>Welcome to Firebase</h1>
      {data.stringValue} <br />
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <input type="text" onChange={(e) => setGender(e.target.value)} />
      <input type="number" onChange={(e) => setAge(e.target.value)} />

      <br />
      <button onClick={userAddData}>Add Data</button>
      <button onClick={userGetData}>Get Data</button>
    </>
  );
}

export default App;
