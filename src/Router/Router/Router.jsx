import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ResponsiveAppBar from '../../Components/Navbar/ResponsiveAppBar'
import Home from '../../Components/Home/Home'
import Product from '../../Components/Product/Product'
import Pricing from '../../Components/Pricing/Pricing'
import Blog from '../../Components/Blog/Blog'
import SingleProduct from '../../Components/Single/SingleProduct'

function Router() {
  return (
    <BrowserRouter>
    <ResponsiveAppBar/><br />
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Product/>} />
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/singleProduct/:id' element={<SingleProduct/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default Router