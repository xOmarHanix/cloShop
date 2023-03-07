import React from 'react';
import './style.css';

function Inputs() {
  return (
     <div className='inputs'>
        <h4>Billing Information</h4>
        <form className='inputs-container'>
            <input type="text" placeholder='Enter Your Name' required />
            <input type="text" placeholder='Enter Your Email' />
            <input type="text" placeholder='Phone Number' />
            <input type="text" placeholder='Street Address' />
            <input type="text" placeholder='City' />
            <input type="text" placeholder='postal Code' />
            <input type="text" placeholder='Country' />
        </form>
    </div>
  )
}

export default Inputs