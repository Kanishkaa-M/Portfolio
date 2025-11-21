import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav(){
  return (
    <header className="topbar">
      <div className="brand">KANISHKAA</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/education">Education</Link>
        <Link to="/achievements">Achievements</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <a href="https://drive.google.com/file/d/1F-shoLFBxNpLyeHWWCRwa7Yt3j9oObiz/view?usp=drivesdk" target="_blank" rel="noreferrer">Resume</a>
        <Link to="/contacts">Contact</Link>
      </nav>
    </header>
  )
}
