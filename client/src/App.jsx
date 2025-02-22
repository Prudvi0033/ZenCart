import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Products from './pages/Products'

const App = () => {
  return (
    <div data-theme='business' className='min-h-screen bg-base-200 transition-colors duration-200'>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/product/:id' element={<Products/>} />
      </Routes>
    </div>
  )
}

export default App