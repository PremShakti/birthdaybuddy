import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BirthdayEffect from '../pages/main'

const Mainroute = () => {
  return (
    <div>
        <Routes>
            <Route path="/birthday/:name" element={<BirthdayEffect/>} />
        </Routes>
      
    </div>
  )
}

export default Mainroute
