import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function About(){
  const internships = [
    {
      role: "Java Full Stack Virtual Intern",
      company: "AICTE – EduSkills Academy",
      period: "Jul 2026 – Aug 2026",
      details: [
        "Developed a Rule-Based Recommendation System in a full-stack development environment.",
        "Gained hands-on experience with Java, Spring Boot, Hibernate, MySQL, JavaScript, Git, and GitHub."
      ]
    },
    {
      role: "Full Stack Developer Intern",
      company: "Touchmark Descience Pvt. Ltd.",
      period: "Jun – Jul 2026",
      details: [
        "Contributed to full-stack web application development, focusing on frontend interfaces and database integrations.",
        "Implemented backend endpoints and database schemas to support key application modules."
      ]
    },
    {
      role: "Web Development Intern",
      company: "ITKRISH Technologies, Tamil Nadu",
      period: "Dec 2025 – Jan 2026",
      details: [
        "Worked on a full-stack web development project covering HTML, CSS, JavaScript, and backend integration.",
        "Gained practical experience in real-world web application design and implementation workflows."
      ]
    },
    {
      role: "AI-ML Virtual Intern",
      company: "AICTE – EduSkills (Google for Developers)",
      period: "Oct – Dec 2025",
      details: [
        "Gained foundational knowledge of AI/ML concepts, machine learning pipelines, and workflows.",
        "Applied data-driven approaches and models to solve simple software development challenges."
      ]
    }
  ]

  return (
    <div id="about" className="about-page container">
      {/* Small Category Identifier */}
      <span className="about-small-tag">ABOUT</span>
      
      {/* Title */}
      <h2 className="about-page-title">About Me</h2>
      
      {/* Bio Paragraph Card */}
      <div className="about-bio-container">
        <div className="glass-card bio-full-card">
          <p className="bio-lead-text">
            I am a Computer Science Engineering student focused on building intelligent algorithms and robust, full-stack systems. 
            Through hands-on virtual internships, projects, and academic exposure, I have cultivated a strong foundation in Java, React, Python, and AI/ML concepts. 
            I am highly motivated to design and apply machine learning workflows to solve real-world problems and create meaningful tech.
          </p>
        </div>
      </div>

      <div className="about-extra-sections">
        {/* Internships Section */}
        <div className="about-section-block">
          <h3 className="section-subtitle">
            <i className="fas fa-briefcase icon-left text-highlight-green"></i> Experience & Internships
          </h3>
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

        {/* GitHub Days I Code Section */}
        <div className="about-section-block github-activity-block">
          <h3 className="section-subtitle">
            <i className="fab fa-github icon-left text-highlight-green"></i> GitHub Activity
          </h3>
          <div className="github-widgets-wrapper">
            <div className="glass-card github-calendar-card">
              <img
                src="https://github.com/users/Kanishkaa-M/contributions"
                alt="Kanishkaa M's GitHub contribution grid"
                className="github-calendar-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
