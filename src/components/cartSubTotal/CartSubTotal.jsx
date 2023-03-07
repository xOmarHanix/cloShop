import React from 'react';
import './style.css';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

function CartSubTotal() {

    const totalAmount = useSelector((state) => state.cart.totalAmount)

  return (
    <div className='subtotal'>
        <div className="subtotal-price">
            <h4>Subtotal</h4>
            <h2>${totalAmount}</h2>
        </div>
        <p>Takes And Shipping Will Calculate In Checkout</p>
        <Link to='/checkout'>
            <button>Checkout</button>
        </Link>
        <Link to='/shop'>
            <button>Continue Shopping</button>
        </Link>
    </div>
  )
}

export default CartSubTotal