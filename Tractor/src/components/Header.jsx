import React from 'react'
import "../CSS/header.css";
import { NavLink, useNavigate } from 'react-router-dom';



const Header = () => {
  const navigate=useNavigate()

  const handlelogin=()=>{
    navigate("/login");
  }
  return (
   <>
   <div className='main-header'> 
    <div className="content-1">
        <div className='logo'>
            <img src="/images/logo.png" alt="" />
       </div>
        <div className='navs'>
        <NavLink to="/" className="nav-links"> Home</NavLink>
        <NavLink to="/about" className="nav-links">About</NavLink>
        <NavLink to="/onrent" className="nav-links">On Rent</NavLink>
        <NavLink to="/Account" className="nav-links">Account</NavLink>
        <NavLink to="/viewtool" className="nav-links">ViewTools</NavLink>
        <NavLink to="/contact" className="nav-links">ContactUs</NavLink>
        </div>
         
    </div>
   <div className="content-2">
    <div className="login" onClick={handlelogin}>
     <button >Login/SignUp</button>
        </div>
  </div>
 </div>
 
   </>
  )
}

export default Header