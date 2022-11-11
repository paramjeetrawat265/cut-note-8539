import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllProducts from './Pages/AllProducts'
import Cart from './Pages/Cart'
import { Dashboard } from './Pages/Dashboard'

import Homepage from './Pages/Homepage'
import MensProduct from './Pages/MensProduct'
import Singleproductpage from './Pages/Singleproductpage'
import Womenpage from './Pages/Womenpage'

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/menspage' element={<MensProduct />} />
        <Route path='/womenpage' element={<Womenpage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/alldata' element={<AllProducts/>}/>
            <Route path='/alldata/:id' element={<Singleproductpage/>}/>
      </Routes>
    </div>
  )
}

export default Allroutes