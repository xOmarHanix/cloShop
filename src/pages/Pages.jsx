import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Cart from './screens/Cart';
import Checkout from './screens/Checkout';
import Home from './screens/Home';
import Login from './screens/Login';
import ProductDetails from './screens/ProductDetails';
import Shop from './screens/Shop';
import Signup from './screens/Signup';

function Pages() {
  return (
    <Routes>
        <Route path='/cloShop/' element={<Navigate to='/home' />} />
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default Pages