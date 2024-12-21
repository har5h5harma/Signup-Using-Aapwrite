import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Main.css';
const Main = () => {
    const move=useNavigate();
    const handleMainPage=()=>{
      //console.log("You Are logged out")
        move('/')
    }
  return (
    <div className='maincss'>
      <h1>Home/Main Page</h1>
      <h3>Hello There,</h3>
      <p>Congrats!<br/> Your login credentials are stored on our cloud server. </p>
      <p>If you are already an existing one then welcome again! </p>
      <button onClick={handleMainPage}>Log Out</button>
    </div>
  )
}

export default Main
