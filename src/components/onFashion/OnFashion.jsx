import React, { useState, useEffect} from 'react';
import Heading from '../../common/heading/Heading';
import  productData  from '../../assets/data/productsData';
import ProductsContainer from '../../common/productsContainer/ProductsContainer';
import './style.css';

function OnFashion() {

    const [onFashion,setOnFashion] = useState([]);

    useEffect(() => {
      const filteredOnFashion = productData.filter((item) => item.section === 'on fashion')
      setOnFashion(filteredOnFashion);
    },[])
    
  return (
    <div className="container-two">
            <div className='on-fashion'>
                <Heading title='On Fashion' />
                <ProductsContainer data={onFashion} />
            </div>
    </div>
  )
}

export default OnFashion