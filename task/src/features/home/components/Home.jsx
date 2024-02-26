import React, { useState } from 'react'
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { FaGreaterThan } from "react-icons/fa6";
import cardimg from '../assets/card-img.png'
import '../styles/home.scss'
import data from '../../../assets/data.json'
import Cards from '../../../components/cards/components/Cards'
import BigCard from '../../../components/cards/components/BigCard';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";


const Home = () => {
  const [category,setCategory]= useState('')
  const [signup,setSignup]= useState('')
  const timestamp = Date.now();
  const currentDate = new Date(timestamp); 
  
 
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  

  const year = currentDate.getFullYear();
  const monthIndex = currentDate.getMonth();
  const day = currentDate.getDate();
  
  // Format the date
  const formattedDate = `${months[monthIndex]} ${day}, ${year}`;

  const handleSignUp = (e)=>{
  e.preventDefault()
  console.log(signup)
  setSignup('')
  


}


  return (
    <div className='home-container'>
      <h2>Best Website builders in the US</h2>
      <div className='info'>
        <label><CiCircleCheck /> Last Updated - {formattedDate}  <CiCircleInfo /> Advertising Disclosure</label>
          <select onChange={(e)=>setCategory(e.target.value)} className='dd-2'  >
          <option value="Top Relevant">Top Relevant</option>
          <option value="Hot">Hot</option>
        </select>
      </div>
    <div className='bottom-input'>
    

    </div>
    <div className='products' >
          <span>Tools</span>
          <span>AWS Builder</span>
          <span>Start Build</span>
          <span>Build Supplies</span>
          <span>Tooling</span>
          <span>BlueHosting</span>
        </div>

        <div className='route' >
          <label><span>Home</span> <FaGreaterThan/> </label>
          <label><span>Hosting for all</span> <FaGreaterThan/> </label>
          <label><span>Hosting</span> <FaGreaterThan/> </label>
          <label><span>Hosting6</span> <FaGreaterThan/> </label>
          <label><span>Hosting5</span> <FaGreaterThan/> </label>
        </div>

        
            
              {data.products.map((i)=>{
                return(
                
            <div className='card' key={i.id} >
            <div className='img-n-text'>
              <img src={cardimg} alt='card' />
              <p>{i.name}</p>
            </div>
                  <div className='product-info'>
                  <p> <b>{i.heading}</b>{i.description}</p>
                  <h4 id='highlight'>Main highlights</h4>
                  <p className='end-para'>{i.highlight}</p>
                    <select className='select'>
                    <option value="">Show more</option>
                    <option value="Other">Other</option>
                    </select>
                    
                  </div>

                  <div>
              <div className='view-card'>
                <p className='rating'>{i.rating}</p>
                <p className='review'>{i.feedback}</p>
                <p className='stars'> <FaStar className='star' /> <FaStar className='star' /> <FaStar className='star' /> <FaStar className='star' /> <FaRegStar/> </p>
              </div>
              <button className='view-btn'>View</button>
              </div>
              </div>
               
                )
              })}
             <BigCard/>

 

              
     

        <div className='related-field'>
            <h1>Related deals you might like for</h1>
          </div>
          <div className='cards'>
          <Cards/>
          <Cards/>
          <Cards/>
          </div>

      
        <div className='form'>
          <p>Sign up and get exclusive  <br /> special deals</p>
          <form onSubmit={handleSignUp} >
          <input type="text" value={signup} onChange={(e)=>setSignup(e.target.value)} />
          <button type='submit'>Sign Up</button>
            </form>
          </div>


    </div>
  )
}

export default Home