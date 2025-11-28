import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './pages/global.css'
import './components/nav.css'
import './pages/home.css'
import './pages/about.css'
import './pages/education.css'
import './pages/projects.css'
import './pages/skills.css'
import './pages/contacts.css'


// After (fixed)
import Intro from './components/Intro.jsx'
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)

function Root() {
  const [showApp, setShowApp] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowApp(true)
    }, 5000) // Show intro for 3 seconds
    return () => clearTimeout(timer)
  }, [])

  return showApp ? (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ) : (
    <Intro />
  )
}