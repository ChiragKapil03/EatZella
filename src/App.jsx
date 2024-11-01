import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Header />
      <Outlet></Outlet>
      <Footer/>
      <ToastContainer />
    </>
  )
}

export default App
