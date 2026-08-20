import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contacts from './pages/Contacts'
import Nav from './components/Nav'
import NetworkBackground from './components/Background'

export default function App(){
  return (
    <div className="app-shell">
      <NetworkBackground />
      <Nav />
      <main className="page-shell">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contacts />
      </main>
    </div>
  )
}
