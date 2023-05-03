import React from 'react'
import "./Navbar.css"
import elogo from "../assets/e-com-logo.jpg"

const Navbar = () => {
  return (
    <div className='nav-cont'>
        <div className='nav-leftside'>
            <img src={elogo} alt="elogo" className='nav-logo'/>
            <h2>ProductApp</h2>
        </div>
        <div>Categories</div>
    </div>
  )
}

export default Navbar