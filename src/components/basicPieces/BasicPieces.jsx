import React, { useEffect, useState } from 'react'
import './style.css';
import Heading from '../../common/heading/Heading'
import ProductsContainer from '../../common/productsContainer/ProductsContainer'
import  productData  from '../../assets/data/productsData';

function BasicPieces() {

    const [recommendedPieces,setRecommendedPieces] = useState([]);

    useEffect(() => {
        const filteredRecommendedPieces = productData.filter((item) => item.section === 'recommended pieces');
        setRecommendedPieces(filteredRecommendedPieces);
    },[])

  return (
    <div className='container-two'>
        <div className="basic-pieces">
            <br /><br /><br /><br />
            <Heading title='recommendes' />
            <ProductsContainer data={recommendedPieces} />
        </div>
    </div>
  )
}

export default BasicPieces