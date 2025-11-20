import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl tracking-wide font-semibold">
          Raven & Lack
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `tracking-wide hover:text-neutral-900 transition ${
                  isActive ? 'text-neutral-900' : 'text-neutral-600'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2">
          <Menu className="w-6 h-6" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className="tracking-wide text-neutral-700">
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
