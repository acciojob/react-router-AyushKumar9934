import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Home'
import About from '../About'

const Switch = () => {
  return (
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />}/>
   </Routes>
  )
}

export default Switch