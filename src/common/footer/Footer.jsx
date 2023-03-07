import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-info">
        <div className="brand-name">
          <h3 className='logo'>CloShop</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cum magnam ad reprehenderit similique, beatae blanditiis, quod distinctio quis nemo illum tenetur quaerat. Beatae molestias tenetur reiciendis enim. Autem error magnam harum.</p>
        </div>
        <div className="top-categories">
          <h3>Top Categories</h3>
          <ul>
            <li>
              <Link>Pants</Link>
            </li>
            <li>
              <Link>Jackets</Link>
            </li>
            <li>
              <Link>Shoes</Link>
            </li>
            <li>
              <Link>Shirts</Link>
            </li>
          </ul>
        </div>
        <div className="useful-links">
          <h3>Useful Links</h3>
          <ul>
            <li>
              <Link to='/shop'>Shop</Link>
            </li>
            <li>
              <Link to='/cart'>Cart</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to=''>Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <HiOutlineLocationMarker />
              <span>123 NewYork, USA</span>
            </li>
            <li>
              <BsTelephone />
              <span>+11234567890</span>
            </li>
            <li>
              <AiOutlineMail />
              <span>someOne123@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copyrights">
        <h5>Copyright 2023 developed by <span>Omar Hany.</span> All rights reserved</h5>
      </div>
    </div>
  )
}

export default Footer