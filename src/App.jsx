import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contacts from './pages/Contacts'
import Nav from './components/Nav'

export default function App(){
  return (
    <div>
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
