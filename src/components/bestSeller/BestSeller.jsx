import React, { useEffect, useState } from 'react'
import './style.css';
import Heading from '../../common/heading/Heading';
import  productData  from '../../assets/data/productsData';
import ProductsContainer from '../../common/productsContainer/ProductsContainer';
function BestSeller() {

    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const filteredBestSelller = productData.filter((item) => item.section === 'best seller');
        setBestSeller(filteredBestSelller)
    },[])

  return (
    <div className="container-two">
        <div className='best-seller'>
            <Heading title='Best Seller' />
            <ProductsContainer data={bestSeller} />
        </div>
    </div>
  )
}

export default BestSeller