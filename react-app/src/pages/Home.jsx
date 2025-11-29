import React, { useEffect } from 'react'
import profile from '../assets/Profile.jpg'
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function Home(){
  useEffect(()=>{
    const texts = ["a Software Developer", "an AI Enthusiast", "a Tech Learner"]
    let count = 0; let index = 0
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
        setTimeout(type, 1500)
      } else {
        setTimeout(type, 100)
      }
    }
    type()
    return ()=>{ mounted = false }
  },[])

  return (
    <main className="home">
      
      <h1 className="one">Hi👋 Myself Kanishkaa</h1>
      <h2>I'm <span className="typing" /></h2>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/kanishkaa-maheshkumar-874927327" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
        <a href="https://github.com/Kanishkaa-M" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
        <a href="mailto:kanishkaamaheshkumar@gmail.com" target="_blank" rel="noreferrer" aria-label="Gmail"><i className="fas fa-envelope"></i> </a>
        <a href="https://wa.me/919788086531" target="_blank" rel="noreferrer" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
        <a href="https://instagram.com/kanishkaamaheshkumar" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
      </div>

      <a href="/Kanishkaa_Resume.pdf" download className="download-btn-glow">Download CV</a>
    </main>
  )
}