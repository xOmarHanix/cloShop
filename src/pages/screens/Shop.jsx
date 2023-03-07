import React from 'react'
import Banner from '../../common/banner/Banner';
import Header from '../../common/header/Header';
import ShopProducts from '../../components/shopProducts/ShopProducts';
import Helmet from '../../common/helmet/Helmet';

function Shop() {
  return (
    <Helmet title='Shop'>
      <Header />
      <Banner title='Shop'/>
      <ShopProducts />
    </Helmet>
  )
}

export default Shop