import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Products from './pages/Products'
import { useThemeStore } from './store/useThemeStore'
import {Toaster} from 'react-hot-toast'

const App = () => {
  const { theme } = useThemeStore()
  return (
    <div data-theme={theme} className='min-h-screen bg-base-200 transition-colors duration-200'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/product/:id' element={<Products />} />
      </Routes>

      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
    </div>
  )
}

export default App