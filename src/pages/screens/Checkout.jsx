import React from 'react'
import Header from '../../common/header/Header';
import Banner from '../../common/banner/Banner';
import Inputs from '../../components/inputs/Inputs';
import PlacingOrder from '../../components/placingOrder/PlacingOrder';
import Helmet from '../../common/helmet/Helmet';

function Checkout() {
  return (
    <Helmet title='Checkout'>
      <Header />
      <Banner title='Checkout' />
      <div className="flex container">
        <div className="flex-2">
          <Inputs />
        </div>
        <div className="flex-1">
          <PlacingOrder />
        </div>
      </div>
    </Helmet>
  )
}

export default Checkout