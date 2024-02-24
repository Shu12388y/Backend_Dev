import { useState,useEffect,useMemo } from 'react'
import './App.css'
import { io } from "socket.io-client";

function App() {
  const [user,setUser] = useState('')
  const [data,setData] = useState('')
  const [message,setMessage] = useState('')
  const [note,setNote] =useState([])
  const socket = useMemo(()=>io("localhost:3000"),[]);
  function sendMessage(){
    socket.emit("message",message,socket.id)
    setMessage('')
  }
  useEffect(()=>{
    socket.on("connect", () => {
      console.log(socket.id)
      setUser(socket.id)

      socket.on("welcome",(message)=>{
          setData(message)
      })
      socket.on("pool",(datas)=>{
        setNote((message)=> [...message,datas])

      })

      

    });

  },[])

  return (
    <>
      <div>Hello </div>
      <div>{user}</div>
      <div>{data}</div>
      <div>{note.map((n,i)=>{
        return <div key={i}>{n}</div>
      })}</div>
      <div>
        <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)} />
        <button onClick={sendMessage}>Send</button>
      </div>
    </>
  )
}

export default App
