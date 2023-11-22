import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './home/Home'
import ProductView from './product-view/ProductView'
import Cart from '../components/cart/Cart'
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='product-cart' element={<Cart/>}/>
        <Route path='/product-view/:id' element={<ProductView/>}/>
      </Routes>
    </>
  )
}

export default AllRoutes