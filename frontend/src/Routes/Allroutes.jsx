import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './Pages/Cart'
import { Dashboard } from './Pages/Dashboard'

import Homepage from './Pages/Homepage'
import MensProduct from './Pages/MensProduct'
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
      </Routes>
    </div>
  )
}

export default Allroutes