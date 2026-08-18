import React, { useState, useEffect, useRef } from "react";
import portfolioImg from "../assets/image.png";
import habitImg from "../assets/todo.jpeg";
import ecommerceImg from "../assets/ecommerce.jpeg";
import aiImg from "../assets/ai.jpeg";

export default function Projects() {
  const [expanded, setExpanded] = useState(null);
  const cardRefs = useRef([]);
  cardRefs.current = [];

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "AI Resume Analyzer",
      subtitle: "AI-Powered Career Tool",
      description:
        "Developed an AI-powered resume analyzer that extracts skills, identifies domains, and provides improvement suggestions with skill gap analysis against real job vacancies.",
      more: "Integrating the Google Gemini API, this tool extracts structure and intelligence from user resumes, parses key skills, and maps them to job requirements. Built with a responsive React frontend and a robust Node.js/Express.js backend, storing user data and logs in MongoDB.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini API"],
      image: aiImg,
      github: "https://github.com/Kanishkaa-M",
      demo: "#"
    },
    {
      title: "PalluPalace — E-Commerce",
      subtitle: "Full-Stack Saree Platform",
      description:
        "Developed a full-stack saree e-commerce platform with product listing, cart management, and multi-step checkout process across a responsive interface.",
      more: "Uses React.js for the dynamic storefront and user flow. Integrates Supabase for real-time inventory management, database storage, and quick authentication. Styled with custom components and responsive media queries for mobile-friendly shopping.",
      tech: ["React.js", "HTML5", "CSS3", "JavaScript", "Supabase"],
      image: ecommerceImg,
      github: "https://github.com/Kanishkaa-M",
      demo: "#"
    },
    {
      title: "Habit Tracker Web App",
      subtitle: "Analytics & Routine Manager",
      description:
        "Developed a full-stack habit tracker with daily check-ins, streak tracking, and analytics (heatmaps and bar charts) across a responsive multi-page interface.",
      more: "Built a tracker featuring local caching and Supabase integration to persist user routines. The analytics dashboard compiles user data to generate heatmap grids and progress charts, motivating streak retention.",
      tech: ["HTML5", "CSS3", "JavaScript", "Supabase", "LocalStorage API"],
      image: habitImg,
      github: "https://github.com/Kanishkaa-M",
      demo: "#"
    },
    {
      title: "Personal Portfolio Website",
      subtitle: "Redesigned Developer Showcase",
      description:
        "Designed and developed a responsive personal portfolio with smooth animations, glassmorphic layout, and interactive UI showcasing projects, skills, education, and credentials.",
      more: "The portfolio features modular, decoupled React components, dynamic typing systems, scroll-reveal triggers, a Three.js interactive globe on the contact page, and smooth cross-browser CSS animations.",
      tech: ["React.js", "HTML5", "CSS3", "JavaScript", "Three.js"],
      image: portfolioImg,
      github: "https://github.com/Kanishkaa-M/react-app",
      demo: "https://kanishkaa-m.github.io/react-app/"
    }
  ];

  return (
    <section id="projects" className="projects-page-container container">
      <h2 className="projects-page-title">Featured Projects</h2>

      <div className="projects-grid-list">
        {projects.map((p, index) => (
          <div
            className={`project-card-row ${index % 2 === 1 ? "reverse" : ""}`}
            key={index}
            ref={addToRefs}
          >
            <div className="project-image-wrapper">
              <div className="image-overlay-glow"></div>
              <img src={p.image} alt={p.title} className="project-image" />
            </div>

            <div className="project-details-content">
              <span className="project-meta-label">{p.subtitle}</span>
              <h3 className="project-card-title">{p.title}</h3>

              <div className="project-card-description glass-card">
                <p>{p.description}</p>
                {expanded === index && (
                  <p className="project-more-text">{p.more}</p>
                )}
                
                <button
                  className="project-expand-link"
                  onClick={() =>
                    setExpanded(expanded === index ? null : index)
                  }
                >
                  {expanded === index ? "Read Less" : "Read Full Case Study"}
                </button>
              </div>

              <div className="project-tech-badges">
                {p.tech.map((t) => (
                  <span className="tech-badge" key={t}>{t}</span>
                ))}
              </div>

              <div className="project-card-links">
                <a href={p.github} target="_blank" rel="noreferrer" className="project-link-btn" aria-label="GitHub Code">
                  <i className="fab fa-github icon-left"></i> Code
                </a>
                {p.demo && p.demo !== "#" && (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="project-link-btn primary" aria-label="Live Demo">
                    <i className="fas fa-external-link-alt icon-left"></i> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
