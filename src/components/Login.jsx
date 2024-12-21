import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { account,ID } from '../Auth/auth';
import './Login.css';

const Login = () => {
  const [loginDetails, SetLoginDetails] = useState({
    email: "",
    password: ""
  });

  const move = useNavigate();

  const handleSignupPage = async (e) => {  
    e.preventDefault();
    try {
          await account.createEmailPasswordSession(
                loginDetails.email,
                loginDetails.password
            )
            //console.log(Data);
            move('/Main'); 
            await account.deleteSessions();
        } catch (error) {
            console.log(error);
            console.log("something went wrong!");
        }
        SetLoginDetails(
            {
            fullName: "",
            email: "",
            password: ""
            }
        )
   
  };

  const HandleChange = (e) => {
    const { name, value } = e.target;
    SetLoginDetails(prevState => ({
      ...prevState,
      [name]: value 
    }));
  };

  return (
    <div className='Logincss'>
      <h1>Login Page</h1>
      <h3>Email</h3>
      <input
        type='text'
        name='email'
        value={loginDetails.email} 
        onChange={HandleChange} 
        placeholder='Enter email'
      />
      <h3>Password</h3>
      <input
        type='password'
        name='password'
        value={loginDetails.password} 
        onChange={HandleChange} 
        placeholder='Enter password'
      />
      <br /><br />
      <button onClick={handleSignupPage}>Login</button>
    </div>
  );
};

export default Login;
