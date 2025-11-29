import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav(){
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="topbar">
      <div className="brand">KANISHKAA</div>
      <nav>
        <Link to="/" className={isActive('/') ? 'nav-link active' : 'nav-link'}>Home</Link>
        <Link to="/about" className={isActive('/about') ? 'nav-link active' : 'nav-link'}>About</Link>
        <Link to="/education" className={isActive('/education') ? 'nav-link active' : 'nav-link'}>Education</Link>
        <Link to="/projects" className={isActive('/projects') ? 'nav-link active' : 'nav-link'}>Projects</Link>
        <Link to="/skills" className={isActive('/skills') ? 'nav-link active' : 'nav-link'}>Skills</Link>
        <Link to="/contacts" className={isActive('/contacts') ? 'nav-link active' : 'nav-link'}>Contact</Link>
      </nav>
    </header>
  )
}
