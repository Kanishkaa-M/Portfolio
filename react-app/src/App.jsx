import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Education from './pages/Education'
import Achievements from './pages/Achievements'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contacts from './pages/Contacts'
import Nav from './components/Nav'


export default function App(){
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/education" element={<Education/>} />
        <Route path="/achievements" element={<Achievements/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/contacts" element={<Contacts/>} />
      </Routes>
    </div>
  )
}
