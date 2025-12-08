import React, { useState, useEffect } from "react";
import portfolio from "../assets/image.png";
import todo from "../assets/todo.jpeg";
import ecommerce from "../assets/ecommerce.jpeg";
import ai from "../assets/ai.jpeg";

export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-animate");
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".project-row").forEach((el) => observer.observe(el));
  }, []);

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "This is my personal portfolio website built using React. It includes smooth animations, responsive layouts, reusable components and a clean modern UI. I built this to showcase my projects, skills, education, and contact details. The entire website is designed from scratch with full mobile responsiveness.",
      more: "The portfolio includes sections such as Home, About, Education, Projects and Contact. I used React Hooks, IntersectionObserver animations, and modern UI styling. Every component is separated and reusable. The project also includes smooth scroll animations and a dynamic typing effect.",
      tech: ["React", "CSS", "JavaScript"],
      image: portfolio,
    },
    {
      title: "To-Do List Application",
      description:
        "A simple and elegant To-Do list application that helps manage daily tasks. Users can add, delete, and mark tasks as completed. Clean UI with minimal design that is easy to use.",
      more: "The app uses React state management to handle task operations. Tasks are stored locally so they remain saved even after refresh. I plan to add Firebase backend sync in the future.",
      tech: ["React", "Local Storage"],
      image: todo,
    },
    {
      title: "E-Commerce Website",
      description:
        "A full-stack e-commerce platform with product listings, cart management, and checkout flow. Fully responsive and visually attractive interface.",
      more: "Built using the MERN stack. Includes admin dashboard, product filters, cart sync, and backend authentication. One of the biggest projects I worked on.",
      tech: ["React"],
      image: ecommerce,
    },
    {
      title: "AI Reminder Assistant",
      description:
        "An AI-powered reminder tool that helps schedule tasks using natural language input. Simple UI with advanced backend power.",
      more: "Uses NLP models for understanding reminders, supports voice command input and pushes scheduled notifications. Built using Python backend + React frontend.",
      tech: ["React", "Python", "AI API"],
      image: ai,
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-wrapper">
        {projects.map((p, index) => (
          <div
            className={`project-row ${index % 2 === 1 ? "reverse" : ""}`}
            key={index}
          >
            <div className="project-image-box">
              <img src={p.image} alt={p.title} />
            </div>

            <div className="project-content">
              <p className="featured">Featured Project</p>
              <h3 className="project-title">{p.title}</h3>

              <div className="project-description">
                {p.description}
                {expanded === index && (
                  <p className="more-text">{p.more}</p>
                )}
              </div>

              <button
                className="view-more-btn"
                onClick={() =>
                  setExpanded(expanded === index ? null : index)
                }
              >
                {expanded === index ? "View Less" : "View More"}
              </button>

              <ul className="tech-list">
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
