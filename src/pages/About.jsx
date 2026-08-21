import React, { useEffect, useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function About(){
  const [recentCommits, setRecentCommits] = useState([])
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

  useEffect(() => {
    fetch('https://api.github.com/users/Kanishkaa-M/events/public?per_page=30')
      .then((response) => response.ok ? response.json() : [])
      .then((events) => {
        const commits = events
          .filter((event) => event.type === 'PushEvent' && event.payload?.commits?.length)
          .flatMap((event) => event.payload.commits.map((commit) => ({
            message: commit.message.split('\n')[0],
            repo: event.repo.name,
            date: event.created_at,
            url: `https://github.com/${event.repo.name}/commit/${commit.sha}`
          })))
          .slice(0, 6)
        setRecentCommits(commits)
      })
      .catch(() => setRecentCommits([]))
  }, [])

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
          <p className="github-desc">Days I Code - contribution grid & stats tracker</p>
          
          <div className="github-widgets-wrapper">
            {/* Live SVG GitHub contribution calendar graph */}
            <div className="glass-card github-calendar-card">
              <img 
                src="https://github-readme-activity-graph.vercel.app/graph?username=Kanishkaa-M&theme=tokyo-night&hide_border=true&area=true" 
                alt="Kanishkaa M's GitHub Contribution Grid" 
                className="github-calendar-img"
                loading="lazy"
              />
            </div>
            
            {/* Live Stats Cards */}
            <div className="github-stats-cards-row">
              <div className="glass-card github-stat-badge-card">
                <img 
                  src="https://github-readme-stats.vercel.app/api?username=Kanishkaa-M&show_icons=true&theme=tokyonight" 
                  alt="Kanishkaa M's GitHub Stats" 
                  className="github-stat-badge-img"
                  loading="lazy"
                />
              </div>
              <div className="glass-card github-stat-badge-card">
                <img 
                  src="https://streak-stats.demolab.com/?user=Kanishkaa-M&theme=tokyonight" 
                  alt="Kanishkaa M's Coding Streak" 
                  className="github-stat-badge-img"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="github-commit-history glass-card">
              <div className="commit-history-heading">
                <h4>Recent Commit History</h4>
                <a href="https://github.com/Kanishkaa-M" target="_blank" rel="noreferrer">View GitHub</a>
              </div>
              {recentCommits.length > 0 ? recentCommits.map((commit, index) => (
                <a className="commit-history-item" href={commit.url} target="_blank" rel="noreferrer" key={`${commit.url}-${index}`}>
                  <span className="commit-dot" />
                  <span className="commit-message">{commit.message}</span>
                  <span className="commit-repo">{commit.repo.split('/')[1]}</span>
                  <time dateTime={commit.date}>{new Date(commit.date).toLocaleDateString()}</time>
                </a>
              )) : (
                <p className="github-empty-state">Recent public commits will appear here.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
