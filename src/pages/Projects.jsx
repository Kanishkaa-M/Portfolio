import React from "react";
import "./projects.css";

export default function Projects() {
  const projects = [
    {
      index: "01",
      status: "• In Progress · React Native & Node.js",
      title: "FocusSync Classroom Control",
      tagline: "Enabling smart classrooms to manage, monitor, and block student device usage.",
      description: "A mobile usage control system designed for classrooms, helping teachers restrict student device access through a centralized coordination dashboard.",
      highlight: "Implemented role-based permissions and real-time WebSocket communication between React Native mobile clients and Express.js backend endpoints.",
      tech: ["React Native", "Node.js", "Express.js", "MongoDB", "WebSockets"],
      github: "https://github.com/Kanishkaa-M",
      demo: "#"
    },
    {
      index: "02",
      status: "• Live · Full-Stack React & Express",
      title: "BloodLink Platform",
      tagline: "Connecting blood donors and recipients through a streamlined search interface.",
      description: "An intuitive blood donation platform designed to coordinate donor availability and urgent requests for matching blood groups in real time.",
      highlight: "Features donor registration, real-time blood-group-based search, and comprehensive request management with secure backend REST API integration.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "CSS3"],
      github: "https://github.com/Kanishkaa-M",
      demo: "#"
    },
    {
      index: "03",
      status: "• Production · Gemini API & React",
      title: "AI Resume Analyzer",
      tagline: "Extracting resume insights and executing career skill gap analysis.",
      description: "An AI-powered system designed to analyze uploaded resumes, extract candidate skills, classify competencies, and provide actionable improvement reports.",
      highlight: "Integrates Google Gemini API to parse resume structures, identify primary technical domains, and recommend personalized improvements against active job requirements.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini API", "Responsive Design"],
      github: "https://github.com/Kanishkaa-M",
      demo: "#"
    },
    {
      index: "04",
      status: "• Side Project · React & LocalStorage",
      title: "Habit Tracker Web App",
      tagline: "Gamified progress tracking dashboard to build and maintain daily habits.",
      description: "A responsive routines and streak tracking dashboard that compiles check-ins into visual analytics charts, helping users retain daily habit streaks.",
      highlight: "Built a tracking system featuring local caching to persist user routines. The analytics dashboard compiles statistics to generate streak graphs and progress charts.",
      tech: ["React", "HTML5", "CSS3", "JavaScript", "LocalStorage API", "Charts"],
      github: "https://github.com/Kanishkaa-M",
      demo: "#"
    },
    {
      index: "05",
      status: "• E-Commerce · React & Supabase",
      title: "Pallu Palace Saree E-Commerce",
      tagline: "Modern online storefront for traditional sarees with an interactive catalog.",
      description: "A full-stack saree e-commerce storefront utilizing React for the interactive client views and Supabase for real-time inventory and database storage.",
      highlight: "Designed a responsive product catalog, cart manager, and multi-step checkout process with real-time inventory tracking and secure user authentication.",
      tech: ["React.js", "HTML5", "CSS3", "JavaScript", "Supabase", "Responsive Design"],
      github: "https://github.com/Kanishkaa-M",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="projects-page-container container">
      {/* Small tag identifier */}
      <span className="projects-small-tag">PORTFOLIO</span>
      <h2 className="projects-page-title">Featured Projects</h2>

      {/* Grid List */}
      <div className="projects-grid-list">
        {projects.map((p) => (
          <div className="project-column-card glass-card" key={p.index}>
            
            {/* Header Row */}
            <div className="card-top-row">
              <span className="card-index">{p.index}</span>
              <span className="card-status-badge">{p.status}</span>
            </div>

            {/* Browser Mockup Image Placeholder */}
            <div className="card-mockup-browser">
              <div className="browser-header">
                <div className="browser-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="browser-address">localhost:5173</div>
              </div>
              <div className="browser-content-canvas">
                <div className={`mock-ui-graphic p-theme-${p.index}`}>
                  <div className="mock-ui-element title-bar"></div>
                  <div className="mock-ui-grid">
                    <div className="mock-ui-element block"></div>
                    <div className="mock-ui-element block"></div>
                    <div className="mock-ui-element block"></div>
                  </div>
                  <div className="mock-ui-element footer-bar"></div>
                </div>
              </div>
            </div>

            {/* Title & Action Links */}
            <div className="project-title-row">
              <h3 className="project-card-title">{p.title}</h3>
              <div className="project-card-links">
                <a href={p.github} target="_blank" rel="noreferrer" className="proj-link" aria-label="GitHub Repository">
                  <i className="fab fa-github"></i>
                </a>
                {p.demo && p.demo !== "#" && (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="proj-link" aria-label="Live Demo">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                )}
              </div>
            </div>

            {/* Green Tagline */}
            <h4 className="project-tagline-text">{p.tagline}</h4>

            {/* Description */}
            <p className="project-desc-paragraph">{p.description}</p>

            {/* Left green-bordered highlight */}
            <div className="project-highlight-box">
              <p>{p.highlight}</p>
            </div>

            {/* Tech Badges */}
            <div className="project-tech-badges">
              {p.tech.map((t) => (
                <span className="tech-badge" key={t}>{t}</span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
