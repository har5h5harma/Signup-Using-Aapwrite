import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { account,ID } from '../Auth/auth';
import { Link } from 'react-router-dom';
import './Signup.css';
const Signup = () => {
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    email: "",
    password: ""
  });
  const move = useNavigate();
 

  const handleSignupPage = async (e) => {
    e.preventDefault();
    try {
        const Data = await account.create(
            ID.unique(),
            userDetails.email,
            userDetails.password
        )
        
        console.log(Data);
        move('/login');
        //await account.deleteSessions();
        
    } catch (error) {
        console.log(error);
        console.log("something went wrong!");
    }
    setUserDetails(
        {
        fullName: "",
        email: "",
        password: ""
        }
    )
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className='Signupcss'>
      <h1>Signup Page</h1>
      <h3>Full Name</h3>
      <input 
        type='text' 
        name='fullName'
        value={userDetails.fullName} 
        onChange={handleChange} 
        placeholder='enter here' 
      />
      <h3>Email</h3>
      <input 
        type='email' 
        name='email'
        value={userDetails.email} 
        onChange={handleChange} 
        placeholder='enter email' 
      />
      <h3>Password</h3>
      <input 
        type='password' 
        name='password'
        value={userDetails.password} 
        onChange={handleChange} 
        placeholder='enter password' 
      />

      <button onClick={handleSignupPage}>Create</button>
      <br/><br/>
      <label>Already have an account?  
          
          <Link to="/login"> login</Link>
      </label>
    </div>
  );
};

export default Signup;
