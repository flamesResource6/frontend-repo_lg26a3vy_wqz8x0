import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main className="pt-24">{/* space for fixed nav */}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
