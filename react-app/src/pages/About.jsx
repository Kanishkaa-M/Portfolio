import React from 'react'
import Profile from '../assets/Profile.jpg'

export default function About(){
  return (
    <div className="about">
      <h2>About Me</h2>
      <div className="about-container">
        <div className="about-image">
          <img src={Profile} alt="Profile" />
        </div>
        <div className="about-content">
          <p>I am a Computer Science Engineering student passionate about Software Development and Artificial Intelligence. I love coding, problem-solving, and constantly learning new technologies. By comprehensive exposure to the underlying concepts and applying them vividly to various projects, my love for these domains came into being. I am a passionate individual who thrives to build and apply algorithms to solve real-world industry problems.</p>
          <div className="about-details">
            <div className="detail-item">
              <span className="label">Birthday:</span>
              <span className="value">10 May 2007</span>
            </div>
            <div className="detail-item">
              <span className="label">Phone:</span>
              <span className="value">+91 9788086531</span>
            </div>
            <div className="detail-item">
              <span className="label">City:</span>
              <span className="value">Namakkal</span>
            </div>
            <div className="detail-item">
              <span className="label">Email:</span>
              <span className="value">kanishkaamaheshkumar@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <h2>Interests---------</h2>
      <div>
        <h3 className="box">💻 Software Development</h3>
        <h3 className="box">🤖 Artificial Intelligence</h3>
        <h3 className="box">⚙ Machine Learning</h3>
      </div>
      <div>
        <h3 className="box">🕸 Deep Learning</h3>
        <h3 className="box">🌐 Web Development</h3>
        <h3 className="box">📷 Computer Vision</h3>
      </div>
    </div>
  )
}
