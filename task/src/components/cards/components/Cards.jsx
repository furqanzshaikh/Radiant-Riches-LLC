import React from 'react'
import '../styles/cards.scss'
import img from '../assets/card-img.png'

const Cards = () => {
  return (
   <div className='box'>

   
    <div className='related-card'>
      <img src={img} alt="img" />
      <div className='offers'>
        <p>20% off</p>
        <p>Limited time </p>
      </div>
      <h1 className='product-name'>Webbuilder 1</h1>
      <p className='description'>Computer  Modern clasic with wix support</p>
      <div className='price'>
        <p className='selling-price'>$39.96</p>
        <p className='discount-price'>$49.96</p>
        <p className='off'>(20% off)</p>
      </div>
      <button className='end-btn'>View Deal</button>
      
    </div>
    </div>     
  )
}

export default Cards