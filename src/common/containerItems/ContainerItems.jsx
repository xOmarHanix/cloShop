import React from 'react';
import './style.css';
import { CiShoppingCart } from 'react-icons/ci';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/features/cartSlice';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function ContainerItems({item}) {

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id : item.id,
      img : item.img,
      productName : item.productName,
      price : item.price
    }))

    console.log(addToCart)

    toast.success('Product Added Successfully');
  }

  return (
    <div className='container-items'>
      <div className="product-img">
        <Link to={`/shop/${item.id}`}>
          <motion.img whileHover={{ scale: 0.8 }} src={item.img} />
        </Link>
      </div>
      <h4>{item.productName}</h4>
      <h5>{item.category}</h5>
      <div className="added-product" onClick={addToCart}>
        <hr />
        <CiShoppingCart />
      </div>
      <h3>${item.price}</h3>
    </div>
  )
}

export default ContainerItems