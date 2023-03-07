import React, { useState } from 'react';
import './style.css';
import { useParams } from 'react-router-dom';
import productData from '../../assets/data/productsData';
import { motion } from 'framer-motion';
import { IoIosStar } from 'react-icons/io';
import ProductsContainer from '../../common/productsContainer/ProductsContainer';

function ProductDiscussion() {

    const { id } = useParams();
    const product = productData.find((item) => item.id === id)
    const { description, reviews, category } = product
    
    const [tab,setTab] = useState('desc')
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const relatedProducts = productData.filter((item) => item.category === category)

  return (
    <>
    <div className="product-discussion">
        <div className="desc-rev">
            <h4 className={`${tab === 'desc'  ? 'active-tab' : ''}`} onClick={() => setTab('desc')}>Description</h4>
            <h4 className={`${tab === 'rev' ? 'active-tab' : ''}`} onClick={() => setTab('rev')} >Reviews ({reviews.length})</h4>
        </div>
        {
        tab === 'desc' ? <p>{description}</p> : (
            <>
                <ul className="reviews">
                    {
                    reviews.map((review, index) => (
                        <li key={index}>
                            <h5>Jhon Doe</h5>
                            <span>{review.rating} (rating)</span>
                            <p>{review.text}</p>
                        </li>
                    ))
                    }
                </ul>
                <form onSubmit={handleSubmit} className="from">
                    <h3>Leave Your Experience</h3>
                    <input type="text" placeholder='Enter Your Name'  required />
                    <div className="stars-container">
                    <motion.span whileTap={{ scale : 1.2 }}>
                        1 <IoIosStar />
                    </motion.span>
                    <motion.span whileTap={{ scale : 1.2 }}>
                        2 <IoIosStar/>
                    </motion.span>
                    <motion.span whileTap={{ scale : 1.2 }}>
                        3 <IoIosStar />
                    </motion.span>
                    <motion.span whileTap={{ scale : 1.2 }}>
                        4 <IoIosStar />
                    </motion.span>
                    <motion.span whileTap={{ scale : 1.2 }}>
                        5 <IoIosStar />
                    </motion.span>
                    </div>
                    <textarea  cols={120} rows={5} placeholder='Review Message'  required></textarea>
                    <button type='submit'>Submit</button>
                </form>
            </>
            )
        }
    </div>
    <h3 className='realted-title'>You might Also Like</h3>
    <div className="related-products container">
        <ProductsContainer data={relatedProducts} />
    </div>
    </>
  )
}

export default ProductDiscussion