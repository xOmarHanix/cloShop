import React, { useState } from 'react';
import './style.css';
import  productData  from '../../assets/data/productsData';
import ProductsContainer from '../../common/productsContainer/ProductsContainer';

function ShopProducts() {

  const [productsData, setProductsData] = useState(productData);

  const handleFilter = (e) => {
    const filterValue = e.target.value;

    if(filterValue === 'pants') {
      const filteredJeansProducts = productData.filter(item => item.category === 'jeans' || item.category === 'cargo' || item.category === 'sweat pants');
      setProductsData(filteredJeansProducts);
    }
    if(filterValue === 'jackets') {
      const filteredJacketsProducts = productData.filter(item => item.category === 'sweater jackets' || item.category === 'bomb jackets' || item.category === 'leather jackets' || item.category === 'coats');
      setProductsData(filteredJacketsProducts);
    }
    if(filterValue === 'dresses') {
      const filteredDressesProducts = productData.filter(item => item.category === 'dresses');
      setProductsData(filteredDressesProducts);
    }
    if(filterValue === 'skirts') {
      const filteredSkirtsProducts = productData.filter(item => item.category === 'skirts');
      setProductsData(filteredSkirtsProducts);
    }
    if(filterValue === 'hoodies') {
      const filteredHoodiesProducts = productData.filter(item => item.category === 'hoodies');
      setProductsData(filteredHoodiesProducts);
    }
    if(filterValue === 'sneakers') {
      const filteredSneakersProducts = productData.filter(item => item.category === 'sneakers');
      setProductsData(filteredSneakersProducts);
    }
    if(filterValue === 't-shirts') {
      const filteredTShirtsProducts = productData.filter(item => item.category === 't-shirts');
      setProductsData(filteredTShirtsProducts);
    }
    if(filterValue === 'blouses') {
      const filteredBlousesProducts = productData.filter(item => item.category === 'blouses');
      setProductsData(filteredBlousesProducts);
    }
  }
  
  return (
    <div className="container-two">
        <div className='shop-products'>
            <div className="filter-btns" >
              <button autoFocus className='btn' value='all' onClick={() => setProductsData(productData)}>All</button>
              <button className='btn' value='pants'  onClick={handleFilter}>Pants</button>
              <button className='btn' value='jackets'  onClick={handleFilter}>Jackets</button>
              <button className='btn' value='dresses'  onClick={handleFilter}>Dresses</button>
              <button className='btn' value='skirts'  onClick={handleFilter}>Skirts</button>
              <button className='btn' value='hoodies'  onClick={handleFilter}>Hoodies</button>
              <button className='btn' value='sneakers'  onClick={handleFilter}>Sneakers</button>
              <button className='btn' value='t-shirts'  onClick={handleFilter}>T-Shirts</button>
              <button className='btn' value='blouses'  onClick={handleFilter}>Blouses</button>
            </div>
            
            <ProductsContainer data={productsData} />
        </div>
    </div>
  )

}


export default ShopProducts