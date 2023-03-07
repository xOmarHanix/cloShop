import React from 'react';
import { useParams } from 'react-router-dom';
import productData from '../../assets/data/productsData';
import { IoIosStar, IoIosStarHalf } from 'react-icons/io';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import './style.css';
import { cartActions } from '../../redux/features/cartSlice';
import { toast } from 'react-toastify';

function ProductInfo() {

  const {id} = useParams();
  const product = productData.find((item) => item.id === id)
  const { productName, price, img, shortDesc, avgRating } = product

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id : id,
      productName : productName,
      price : price,
      img : img
    }))

    toast.success('Product Added Successgully');
  }

  return (
    <div className='product-informations'>
        <div className="product-image">
            <img src={img}  />
        </div>
        <div className="product-info">
            <h1>{productName}</h1>
            <div className="product-rating">
                <div className="stars">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStarHalf />
                </div>
                <h4>(Rating: <span>{avgRating}</span>)</h4>
            </div>
            <h3>Price: ${price}</h3>
            <p>{shortDesc}</p>
            <motion.button whileTap={{ scale : 1.2 }} onClick={addToCart}>Add To Cart</motion.button>
        </div>
    </div>
  )
}

export default ProductInfo