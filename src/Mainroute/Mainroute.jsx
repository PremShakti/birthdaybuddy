import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BirthdayEffect from '../pages/main'
import Crihstmas from '../pages/Crihstmas'
import Home from '../pages/Home'

const Mainroute = () => {
  return (
    <div>
        <Routes>
            {/* <Route path="/birthday/:name" element={<BirthdayEffect/>} /> */}
            <Route path="/" element={<Home/>} />
            <Route path="/christmas/:name" element={<Crihstmas/>} />
        </Routes>
      
    </div>
  )
}

export default Mainroute
