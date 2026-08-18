import React from 'react'
import NameParticles from '../components/NameParticles'
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function Home(){
  return (
    <main id="home" className="home-container-page">
      <div className="home-split-layout container">
        
        {/* Left Side: Copy and Actions */}
        <div className="home-hero-left">
          <div className="hero-top-badge">CS Student · AI Engineer</div>
          
          <h1 className="hero-main-title">
            I build systems that <br />
            <span className="text-highlight-green">scale intelligently</span> <br />
            Generative AI, full-stack <br />
            applications, <br />
            and intelligent agents.
          </h1>
          
          <p className="hero-description-text">
            Dedicated to becoming a skilled AI Engineer through continuous learning and innovation. 
            Looking to work on impactful AI technologies that solve real-world problems and create a meaningful change.
          </p>

          <div className="hero-action-buttons">
            <a href="#contacts" className="btn-hire-me">
              Hire me <i className="fas fa-arrow-right arrow-icon"></i>
            </a>
            <a href="#projects" className="btn-view-work">
              View my work <span className="arrow-right-icon">→</span>
            </a>
          </div>

          <div className="hero-text-links">
            <a href="https://github.com/Kanishkaa-M" target="_blank" rel="noreferrer" className="text-link-item">
              GitHub
            </a>
            <span className="separator">/</span>
            <a href="https://www.linkedin.com/in/kanishkaa-maheshkumar-874927327" target="_blank" rel="noreferrer" className="text-link-item">
              LinkedIn
            </a>
            <span className="separator">/</span>
            <a href="mailto:kanishkaamaheshkumar@gmail.com" className="text-link-item">
              Email
            </a>
          </div>
        </div>

        {/* Right Side: Dot Particle Name Animation */}
        <div className="home-hero-right">
          <NameParticles name="KANISHKAA" />
        </div>

      </div>
    </main>
  )
}