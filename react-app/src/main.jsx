import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './pages/global.css';
import './components/nav.css';
import './pages/home.css';
import './pages/about.css';
import './pages/education.css';
import './pages/projects.css';
import './pages/contacts.css';


<global></global>
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
