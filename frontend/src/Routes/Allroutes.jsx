import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllProducts from './Pages/AllProducts'

import Homepage from './Pages/Homepage'
import MensProduct from './Pages/MensProduct'
import Singleproductpage from './Pages/Singleproductpage'
import Womenpage from './Pages/Womenpage'

const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/menspage' element={<MensProduct/>}/>
            <Route path='/womenpage' element={<Womenpage/>}/>
            <Route path='/alldata' element={<AllProducts/>}/>
            <Route path='/alldata/:id' element={<Singleproductpage/>}/>
        
        </Routes>

    </div>
  )
}

export default Allroutes