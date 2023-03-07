import React from 'react';
import './style.css';
import BI from '../../assets/images/shop/AdobeStock_303370764.jpeg';

function Banner({ title}) {
  return (
    <div className='banner'>
        <div className="banner-box">
            <div className="banner-overlay"></div>
            <img src={BI}  />
            <h1>{title}</h1>
        </div>
    </div>
  )
}

export default Banner