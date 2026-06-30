import React, { useState } from 'react'
// import "./navbar.css";
import "./navbar.modules.css";
import { IoCallOutline } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav id='navbar-box'>

      <div id="main-nav">
        <div className="logo-box">
          <img src="../images/final-logo.png" alt="" />
          <h1 className='fw-bold'>MEDIX</h1>
        </div>

        {/* Menu */}
        <div id="nav-item" className={open ? "nav-active" : ""}>
          

           
                    <Link to="/"></Link> 
                    <Link to="/home" style={{textDecoration:"none", color:"black", fontSize:"20px"}}><h4>HOME</h4></Link>
                    <Link to="/about" style={{textDecoration:"none", color:"black", fontSize:"20px"}}><h4>ABOUT</h4></Link>
                    <Link to="/facilities" style={{textDecoration:"none", color:"black", fontSize:"20px"}}><h4>FACILITIES</h4></Link>
                    <Link to="/contacts" style={{textDecoration:"none", color:"black", fontSize:"20px"}}><h4>CONTACTS</h4></Link>
        </div>

        {/* Toggle Button */}
        <div className="menu-icon" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <div id="gmail">
        
        <div id="cg_icon">
          <IoCallOutline id="call_icon"/> <p id="call_num">+91 97345 67890</p>
          <i className="fa-regular fa-envelope" id="mail_icon"></i> <p>medixhospital@gmail.com</p>
        </div>
        

        <div id="face">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fab fa-instagram-square"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
      </div>

    </nav>
  )
}




