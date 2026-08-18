import React from 'react'
import Profile from '../assets/Profile.jpg'

export default function About(){
  const interests = [
    { name: "Software Development", icon: "laptop-code" },
    { name: "Artificial Intelligence", icon: "robot" },
    { name: "Machine Learning", icon: "brain" },
    { name: "Deep Learning", icon: "network-wired" },
    { name: "Web Development", icon: "globe" },
    { name: "Computer Vision", icon: "eye" }
  ]

  const internships = [
    {
      role: "Web Development Intern",
      company: "ITKRISH Technologies, Tamil Nadu",
      period: "Dec 2025 – Jan 2026",
      details: [
        "Worked on a full-stack web development project covering front-end design and back-end integration.",
        "Applied core web technologies to build and deliver a complete project.",
        "Gained practical experience in real-world web development workflows."
      ]
    },
    {
      role: "Industry Learning Intern",
      company: "Touchmark Descience Pvt. Ltd.",
      period: "18 Jun 2026 – 04 Jul 2026",
      details: [
        "Participated in a 2-Week Industry Learning Internship Program.",
        "Worked on industry-oriented projects, applying academic knowledge to practical software development activities.",
        "Enhanced technical skills, problem-solving, teamwork, and professional work ethics."
      ]
    }
  ]

  return (
    <div id="about" className="about-page container">
      <h2 className="about-page-title">About Me</h2>
      
      <div className="about-hero-grid">
        <div className="about-photo-wrapper">
          <img src={Profile} alt="Kanishkaa M" className="about-photo" />
          <div className="photo-backdrop-glow"></div>
        </div>
        
        <div className="about-bio-details">
          <div className="glass-card bio-card">
            <p>
              I am a Computer Science Engineering student passionate about Software Development and Artificial Intelligence. 
              By comprehensive exposure to the underlying concepts and applying them vividly to various projects, my love for these domains came into being. 
              I am a motivated individual who thrives to build and apply algorithms to solve real-world industry problems.
            </p>
          </div>

          <div className="about-details-grid">
            <div className="detail-card">
              <span className="detail-label">Birthday</span>
              <span className="detail-value">10 May 2007</span>
            </div>
            <div className="detail-card">
              <span className="detail-label">Phone</span>
              <span className="detail-value">+91 9788086531</span>
            </div>
            <div className="detail-card">
              <span className="detail-label">City</span>
              <span className="detail-value">Namakkal, India</span>
            </div>
            <div className="detail-card">
              <span className="detail-label">Email</span>
              <span className="detail-value">kanishkaamaheshkumar@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="about-extra-sections">
        {/* Internships Section */}
        <div className="about-section-block">
          <h3 className="section-subtitle"><i className="fas fa-briefcase icon-left"></i> Experience & Internships</h3>
          <div className="internship-cards-grid">
            {internships.map((intern, idx) => (
              <div className="glass-card internship-card" key={idx}>
                <div className="internship-header">
                  <div>
                    <h4>{intern.role}</h4>
                    <p className="intern-company">{intern.company}</p>
                  </div>
                  <span className="intern-badge">{intern.period}</span>
                </div>
                <ul className="intern-details">
                  {intern.details.map((detail, dIdx) => (
                    <li key={dIdx}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Interests Section */}
        <div className="about-section-block">
          <h3 className="section-subtitle"><i className="fas fa-heart icon-left"></i> Areas of Interest</h3>
          <div className="interests-grid">
            {interests.map((interest, idx) => (
              <div className="interest-item-card" key={idx}>
                <div className="interest-icon-box">
                  <i className={`fas fa-${interest.icon}`}></i>
                </div>
                <span className="interest-name">{interest.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
