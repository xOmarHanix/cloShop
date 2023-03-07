import React, { useEffect, useState } from 'react';
import ProductsContainer from '../../../common/productsContainer/ProductsContainer';
import { productData } from '../../../assets/data/productsData';
import HeadingTwo from '../../../common/headingTwo/HeadingTwo';

function Jeans() {

    const [jeansProducts, setJeansProducts] = useState([])

    useEffect(()=> {
        const filteredJeansProducts = productData.filter(item => item.category === 'jeans')
        setJeansProducts(filteredJeansProducts)
    },[])

  return (
    <div className='container'>
        <HeadingTwo title='Jeans' />
        <ProductsContainer data={jeansProducts} />
    </div>
  )
}

export default Jeans