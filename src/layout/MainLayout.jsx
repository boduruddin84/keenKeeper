import React from 'react'
import Navbar from '../shared/navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../shared/footer/Footer'

const MainLayout = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default MainLayout