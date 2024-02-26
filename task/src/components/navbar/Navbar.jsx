import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
const [search,setSearch]=useState('')
console.log(search)
  return (
    
    <nav>
    
      <div className='container'>
      <div className="search-container">
      <input type="text" onChange={(e)=>setSearch(e.target.value)}  />
      < CiSearch  className="search-icon" />
    </div>
        <Link to={'/categories'}>Categories</Link>
        <Link to={'/builders'}>Website Builders</Link>
        <Link to={'/deals'}>Today's deals</Link>
        <Link to={'/'}>Home</Link>
      </div>
    </nav>
  )
}

export default Navbar