import React from 'react'
import Header from '../../common/header/Header';
import Banner from '../../common/banner/Banner';
import Helmet from '../../common/helmet/Helmet';
import CartTable from '../../components/cartTable.jsx/CartTable';
import CartSubTotal from '../../components/cartSubTotal/CartSubTotal';

function Cart() {
  return (
    <Helmet title='Cart'>
      <Header />
      <Banner title='Cart' />
      <div className="flex container mb">
        <div className="flex-2">
          <CartTable />
        </div>
        <div className="flex-1">
          <CartSubTotal />
        </div>
      </div>
    </Helmet>
  )
}

export default Cart