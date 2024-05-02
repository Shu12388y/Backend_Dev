// import {ref,set,getDatabase} from "firebase/database"
// import app from "./api/firebase";
import "./App.css";
import { useState } from "react";
<<<<<<< HEAD
// import userSignUp from "./api/login";
// import userSignIn from "./api/signIn";

import { addData,getData } from "./api/database";

// const db = getDatabase(app);
function App() {
  const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  
=======
import userSignUp from "./api/login";
import userSignIn from "./api/signIn";
import {getData}  from "./api/database";
import { getRealTimeData } from "./api/realtimeDatabase";
// const db = getDatabase(app);
function App() {
  const [data, setData] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user,setUser] = useState([])
  const [name,setName] = useState("")
  const [phonenumber,setPhonenumber] = useState("") 
>>>>>>> 9370f9ff31eb5d78ef6323dd62337b2f7a1b2c51


<<<<<<< HEAD
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
=======
  const loginUser = async () => {
      await userSignIn(email, password);
  };
>>>>>>> 9370f9ff31eb5d78ef6323dd62337b2f7a1b2c51


  const queryData = async()=>{
    const userData = await getData();
    const data = await userData
    setUser(data)
  }

  const realTimeData = async()=>{
    const userRealtimedata = await getRealTimeData(name,email,phonenumber);
  }



  return (
    <>
      <h1>Welcome to Firebase</h1>
<<<<<<< HEAD
      {data.stringValue} <br />
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <input type="text" onChange={(e) => setGender(e.target.value)} />
      <input type="number" onChange={(e) => setAge(e.target.value)} />

      <br />
      <button onClick={userAddData}>Add Data</button>
      <button onClick={userGetData}>Get Data</button>
=======
      {data} <br />
      {/* {user.name} */}
      {user.map((el,index)=>{
        return(
          <div key={index}>
            {el.name}
            <br />

            {el.age}
              <br />
            {el.gender}
          </div>
        )
      })}
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />

      <h1>Real Time Database</h1>

      <input type="text" onChange={(e) => setName(e.target.value)} />
      <input type="text" onChange={(e) => setEmail(e.target.value)} />
      <input type="number" onChange={(e) => setPhonenumber(e.target.value)} />
      <button onClick={realTimeData}>Update</button>
      
      <br />
      <button onClick={authUser}>signup</button>
      <button onClick={loginUser}>Log In</button>
      <button onClick={queryData}>Query Data</button>
>>>>>>> 9370f9ff31eb5d78ef6323dd62337b2f7a1b2c51
    </>
  );
}

export default App;
