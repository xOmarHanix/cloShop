import React from 'react'
import './style.css';
import ContainerItems from '../containerItems/ContainerItems'

function ProductsContainer({ data }) {
  return (
    <div className='products-container'>
      {
        data?.map((item) => (
          <ContainerItems item={item} key={item.id} />
        ))
      }
    </div>
  )
}

export default ProductsContainer