import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import ProductView from './product-view/ProductView'
import Cart from '../components/cart/Cart'
import CreatePRoduct from '../routes/sub-routes/create-product/CreateProduct'
import Auth from '../pages/auth/Auth'
import Login from './sub-routes/login/Login'
import SignUp from './sub-routes/sign-up/SignUp'
import UserProducts from './sub-routes/user-products/UserProducts'
import Private from './private/Private'
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='product-cart' element={<Cart />} />
        <Route path='/product-view/:id' element={<ProductView />} />
        <Route path='auth' element={<Auth />}>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
        </Route>
        <Route path='admin' element={<Private />}>
          <Route path='create-product' element={<CreatePRoduct />} />
          <Route path='user-product' element={<UserProducts />} />
        </Route>
      </Routes>
    </>
  )
}

export default AllRoutes