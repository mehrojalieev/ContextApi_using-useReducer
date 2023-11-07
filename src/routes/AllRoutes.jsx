import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './home/Home'
import ProductView from './product-view/ProductView'
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product-view/:id' element={<ProductView/>}/>
      </Routes>
    </>
  )
}

export default AllRoutes