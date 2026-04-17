import React from 'react'
import Navbar from '../shared/navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../shared/footer/Footer'
import { ToastContainer } from 'react-toastify'

const MainLayout = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />

        <ToastContainer />
    </div>
  )
}

export default MainLayout