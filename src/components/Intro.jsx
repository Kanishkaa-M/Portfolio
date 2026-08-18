import React from 'react'
import './Intro.scss' 

export default function Intro() {
  return (
    <div className="intro-container">
      <div className="intro-content">
        <div className="logo-initials">
          <span className="char">K</span>
          <span className="char">M</span>
        </div>
        <div className="name-reveal">
          <span className="first-name">Kanishkaa</span>
          <span className="last-name">Maheshkumar</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </div>
    </div>
  )
}