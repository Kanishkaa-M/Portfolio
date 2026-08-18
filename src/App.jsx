import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Education from './pages/Education'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contacts from './pages/Contacts'
import Nav from './components/Nav'
import Background from './components/Background'

export default function App(){
  return (
    <div>
      <Background />
      <Nav />
      <main className="page-shell">
        <Home />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Contacts />
      </main>
    </div>
  )
}
