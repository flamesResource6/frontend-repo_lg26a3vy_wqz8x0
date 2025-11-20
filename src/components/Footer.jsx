import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10 text-sm">
        <div className="space-y-4">
          <h3 className="font-medium tracking-wide">About</h3>
          <p className="text-neutral-600 leading-relaxed">
            Raven & Lack is a house of design creating harmonious, luxurious spaces across Australia, Europe, and the Middle East.
          </p>
        </div>
        <div>
          <h3 className="font-medium tracking-wide mb-4">Quick Links</h3>
          <ul className="space-y-2 text-neutral-700">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium tracking-wide mb-4">Locations</h3>
          <p className="text-neutral-600">Gold Coast • London</p>
        </div>
        <div>
          <h3 className="font-medium tracking-wide mb-4">Social</h3>
          <p className="text-neutral-600">Instagram: @ravenandlack</p>
        </div>
      </div>
      <div className="border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-6 text-xs text-neutral-600 flex items-center justify-between">
          <span>© 2024 Raven & Lack. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
