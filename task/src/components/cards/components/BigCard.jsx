import React from 'react'
import cardimg from '../assets/card-img.png'
import { IoMdCheckmark } from "react-icons/io";
import data from '../../../assets/bigcard.json'
import '../styles/bigcard.scss'
import { FaStar } from 'react-icons/fa6';
import { FaRegStar } from "react-icons/fa";


const BigCard = () => {
  return (
      <>
        {data.products.map((i)=>{
          return(
            <div key={i.id} className="bigcontainer">
            <div className='img-n-name' >
              <img src={cardimg} alt="product-img" />
              <p>{i.name}</p>
            </div>
            <div className='details'>
              <div>
              <p><b>{i.heading}</b>{i.description}</p>
              <span className='discount'>
               {i.discount} Off
              </span>
              <h4>
              Main highlights
              </h4>
              </div>
              <div className='features'>
              <div className='r-1'>
              <span className='number'>{i['feature1-rating']}</span>
              <span>{i.feature1}</span>
              </div>
              <div className='r-1'>
              <span className='number'>{i['feature2-rating']}</span>
              <span>{i.feature2}</span>
              </div>
              <div className='r-1'>
              <span className='number' >{i['feature3-rating']}</span>
              <span>{i.feature3}</span>
              </div>
        
        
              </div>
              <div className='b-end' >
                <p>Why we love it</p>
                <p className='feature-child'><IoMdCheckmark  className='icon' /> {i.benefit1}</p>
                <p className='feature-child'><IoMdCheckmark  className='icon' /> {i.benefit2}</p>
                <p className='feature-child'><IoMdCheckmark  className='icon' /> {i.benefit3}</p>
                  
              </div>
              <select id='dropdown'   >
        <option value="">Show more</option>
        <option value="United States">United States</option>
        </select>
              
            </div>
            <div className='btn-n-card'>
              <div className='review-card'>
                  <div className='side-card'>
                <p className='rating' >9.5</p>
                <p className='review' >Exceptional</p>
                <p className='stars'><FaStar className='star' /> <FaStar className='star' /> <FaStar className='star' /> <FaStar className='star' /> 
<FaRegStar /></p>
                </div>
           
              </div>
              <button>View</button>
            </div>
          </div>
          )
        })}
      </>
  )
}

export default BigCard