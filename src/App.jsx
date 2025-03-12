import React, { useState } from 'react'
import Home from './components/Home'
import { ToastContainer } from 'react-toastify'

export default function App() {
  return (
    <div className='w-screen bg-opacity-50 h-screen bg-[#4E4D4D] flex justify-center items-start lg:items-center'>
     <Home/>
     <ToastContainer/>
    </div>
  )
}

