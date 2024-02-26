import React, { useState } from 'react'
import './footer.scss'

const Footer = () => {


    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
      setSelectedOption(event.target.value);
    };

  return (
    <div className='footer-container'>
        <div className='f-categories'>
            <h1>Categories</h1>
            <span>Web Builder</span>
            <span>Hosting</span>
            <span>Data Center</span>
            <span>Robotic-Automation</span>

        </div>
        <div className='f-contact'>
            <h1>Contact</h1>
            <span>Privacy Policy</span>
            <span>Terms Of Service</span>
            <span>Categories</span>
            <span>About</span>
        </div>
        <div className='f-dropdown'>
        <select className='dropdown'  value={selectedOption} onChange={handleChange} >

        <option value="india">India</option>
        <option value="United States">United States</option>
      </select>
        </div>
    </div>
  )
}

export default Footer