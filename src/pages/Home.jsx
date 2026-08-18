import React, { useEffect } from 'react'
import profile from '../assets/Profile.jpg'
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function Home(){
  useEffect(()=>{
    const texts = ["Software Developer", "AI Enthusiast", "CSE Student", "Tech Learner"]
    let count = 0; 
    let index = 0
    let currentText = ''
    let letter = ''
    const el = document.querySelector('.typing')
    let mounted = true
    
    function type(){
      if(!mounted) return
      if(count === texts.length) count = 0
      currentText = texts[count]
      letter = currentText.slice(0, ++index)
      if(el) el.textContent = letter
      
      if(letter.length === currentText.length){
        count++
        index = 0
        setTimeout(type, 2000) // Stay on full word longer
      } else {
        setTimeout(type, 80)
      }
    }
    
    setTimeout(type, 500) // Initial delay
    return ()=>{ mounted = false }
  },[])

  return (
    <main id="home" className="home-container-page">
      <div className="home-hero-centered">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">Kanishkaa M</h1>
        <h2 className="hero-subtitle">
          I am <span className="typing" /><span className="typing-cursor">|</span>
        </h2>
        <p className="hero-description">
          Dedicated Computer Science Engineering student passionate about Software Development and Artificial Intelligence.
          Focused on building intelligent algorithms and full-stack web platforms to solve real-world industry problems.
        </p>

        <div className="home-focus-cards">
          <div className="glass-card focus-card">
            <div className="focus-icon-box"><i className="fas fa-brain"></i></div>
            <h4>AI & Machine Learning</h4>
            <p>Python, Gemini API, AI-ML Concepts</p>
          </div>
          <div className="glass-card focus-card">
            <div className="focus-icon-box"><i className="fas fa-code"></i></div>
            <h4>Full-Stack Development</h4>
            <p>ReactJS, Node.js, Express, Supabase</p>
          </div>
          <div className="glass-card focus-card">
            <div className="focus-icon-box"><i className="fas fa-laptop-code"></i></div>
            <h4>Core Programming</h4>
            <p>Java, C, Core Algorithms & OOPs</p>
          </div>
        </div>
        
        <div className="home-socials">
          <a href="https://www.linkedin.com/in/kanishkaa-maheshkumar-874927327" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-btn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/Kanishkaa-M" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-btn">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:kanishkaamaheshkumar@gmail.com" target="_blank" rel="noreferrer" aria-label="Gmail" className="social-btn">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://wa.me/919788086531" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="social-btn">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://instagram.com/kanishkaamaheshkumar" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-btn">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <div className="home-actions">
          <a href="/Kanishkaa_Resume.pdf" download className="btn-primary">
            Download CV <i className="fas fa-download icon-right"></i>
          </a>
          <a href="#contacts" className="btn-secondary">
            Get in Touch
          </a>
        </div>
      </div>
    </main>
  )
}