import React from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import { Link } from 'react-router-dom';

function PlacingOrder() {

    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <div className='placing-order'>
        <div className="total-qty">
            <h3>Total Qty:</h3>
            <span>{totalQuantity} items</span>
        </div>
        <div className="sub-total">
            <h3>Subtotal:</h3>
            <span>${totalAmount}</span>
        </div>
        <div className="shipping">
            <h3>Shipping: <br /> Free Shipping</h3>
            <span>$0</span>
        </div>
        <div className="total-cost">
            <h2>Total Cost</h2>
            <span>${totalAmount}</span>
        </div>
        <Link to='/login'>
            <button>Place An Order</button>
        </Link>
    </div>
  )
}

export default PlacingOrder