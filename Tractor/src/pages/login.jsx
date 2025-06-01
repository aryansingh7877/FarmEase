import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../CSS/login.css';
const Login = () => {
 const [Login, setLogin]=useState({
    Email:"",
    Password:""
 })
 const handleChange=(e)=>{
    setLogin(
        {...Login,[e.target.name]:e.target.value}
    )

 }
 const handleSubmit=async(e)=>{
   e.preventDefault()
   console.log("login data is :",Login);
   const result = await axios.post("https://farmease-dxu4.onrender.com/auth/login", Login);
            
   console.log("Server Response:", result.data);

  
   setTimeout(() => {
       alert("Login successful!");
   }, 100); 

  
   setLogin({
     Email:"",
     Password:"",
     
   });

  
 }

  return (
    <>
    <div className="body">
    <div className="container">
        <div className="register-box">
            <h2>Login</h2>
            <form method="POST" onSubmit={handleSubmit} action="/Login">
                
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="Email" value={Login.Email} onChange={handleChange} placeholder="Enter your email" />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="Password" value={Login.Password} onChange={handleChange} placeholder="Enter your password" />
                </div>
              
                <button type="submit">Login</button>
            </form>
            <p className="login-text"> Have not account? <Link to="/Register">Register</Link></p>
        </div>
    </div>
</div>

    </>
  )
}

export default Login
