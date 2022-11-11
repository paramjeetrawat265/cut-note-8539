import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Homepage from './Pages/Homepage'
import MensProduct from './Pages/MensProduct'
import Womenpage from './Pages/Womenpage'

const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/h' element={<Homepage/>}/>
            <Route path='/menspage' element={<MensProduct/>}/>
            <Route path='/womenpage' element={<Womenpage/>}/>
        
        </Routes>

    </div>
  )
}

export default Allroutes