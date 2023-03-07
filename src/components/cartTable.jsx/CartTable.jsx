import React from 'react';
import './style.css';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../redux/features/cartSlice';
import { toast } from 'react-toastify';

function CartTable() {

    const  cartItems = useSelector((state) => state.cart.cartItmes)

    const dispatch = useDispatch();

  return (
    <>
        {cartItems.length === 0 ? 
        (<h1 className='empty-cart'>No items Added To Cart</h1>) : 
        (    
            <div className='table'>
                <table>
                    <thead>
                        <tr>
                            <th className='img'>Image</th>
                            <th className='title'>Title</th>
                            <th className='price'>Price</th>
                            <th className='qty'>Qty</th>
                            <th className='delete'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartItems.map((item,index) => (
                                <tr key={index}>
                                    <td className='img'><img src={item.img} /></td>
                                    <td className='title'>{item.productName}</td>
                                    <td className='price'>${item.price}</td>
                                    <td className='qty'>{item.quantity}px</td>
                                    <td className='delete' onClick={() => dispatch(cartActions.deleteItem(item.id), toast.success('Product Deleted Successfullt'))} ><RiDeleteBinLine /></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )}
    </>
  )
}

export default CartTable