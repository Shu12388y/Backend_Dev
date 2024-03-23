// import {ref,set,getDatabase} from "firebase/database"
import app from "./api/firebase";
import "./App.css";
import { useState } from "react";
import userSignUp from "./api/login";
import userSignIn from "./api/signIn";

// const db = getDatabase(app);
function App() {
  const [data, setData] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authUser = async () => {
    await userSignUp(email, password);
  };

  const loginUser = async () => {
    await userSignIn(email, password);
  };

  return (
    <>
      <h1>Welcome to Firebase</h1>
      {data} <br />
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={authUser}>signup</button>
      <button onClick={loginUser}>Log In</button>
    </>
  );
}

export default App;
