import React, { useContext, useState } from 'react'
import "./Navbar.css"
import elogo from "../assets/e-com-logo.jpg"
import { globalData } from '../App'

const Navbar = () => {
    // const [category, setCategory]= useState("smartphones")
    const [category, setCategory]= useContext(globalData)
    const handleChange=(e)=>{
        setCategory(e.target.value)
    }
  return (
    <div className='nav-cont'>
        <div className='nav-leftside'>
            <img src={elogo} alt="elogo" className='nav-logo'/>
            <h2 className='nav-appname'>ProductApp</h2>
        </div>
        <div className='nav-rightside'>
            <label htmlFor="categories"><h4 className='categories'>CATEGORIES</h4></label>
            <select name="" id="categories" onChange={handleChange} placeholder='select'>
            <option value="laptops">Laptops</option>
            <option value="fragrances">fragrances</option>
            <option value="furniture">furniture</option>
            <option value="automotive">automotive</option>
            <option value="lighting">lighting</option>
            </select>
        </div>
        {/* <Products category={category}/> */}
    </div>
  )
}

export default Navbar