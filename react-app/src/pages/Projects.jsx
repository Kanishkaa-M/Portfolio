import React, { useState } from 'react'
import portfolio from '../assets/image.png'
import todo from '../assets/todo.jpeg'
import ecommerce from '../assets/ecommerce.jpeg'
import ai from '../assets/ai.jpeg'

export default function Projects() {
  const [open, setOpen] = useState(null)

  const projects = [
    {
      id: 'portfolio',
      title: 'Portfolio',
      subtitle: 'Personal Website',
      description: `A responsive and modern personal portfolio website designed to showcase my skills, education, and projects. It serves as my digital identity where I can share my journey, achievements, and technical growth. The website is built with a clean UI and smooth navigation for an engaging user experience.`,
      tech: ['HTML', 'CSS', 'JavaScript', 'React'],
      image: portfolio
    },
    {
      id: 'todo',
      title: 'To-Do List',
      subtitle: 'Task Management App',
      description: `A simple and intuitive To-Do List application built with React and Firebase. It allows users to create, manage, and organize tasks efficiently. The app features real-time synchronization, task prioritization, and due date reminders.`,
      tech: ['React', 'Firebase'],
      image: todo
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Website',
      subtitle: 'Online Store Platform',
      description: `A full-stack e-commerce platform developed using React for the frontend, Node.js for the backend, and MongoDB for the database. It includes features like product listings, shopping cart, user authentication, and secure payment integration.`,
      tech: ['React', 'Node.js', 'MongoDB'],
      image: ecommerce
    },
    {
      id: 'ai-reminder',
      title: 'AI Reminder Assistant',
      subtitle: 'Smart Task Reminder',
      description: `An AI-powered reminder assistant that uses natural language processing to understand user commands and set reminders. Built with React for the frontend, Python for the backend, and integrated with an AI API for voice recognition and task scheduling.`,
      tech: ['React', 'Python', 'AI API'],
      image: ai
    }
  ]

  const selectedProject = projects.find(p => p.id === open)

  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div className="featured-project" key={project.id}>
            <div className="project-media">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <p className="project-sub">{project.subtitle}</p>
              <h3 className="project-title">{project.title}</h3>
              <div className="project-card">
                <p className="project-excerpt">{project.description}</p>
              </div>
              <p className="project-tech">{project.tech.join(' | ')}</p>
              <div className="project-actions">
                <button className="view-btn" onClick={() => setOpen(project.id)}>VIEW DETAILS</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2>Skills----</h2>
      <div className="sbox">
        <p style={{fontSize: '30px'}}>Languages:</p>
        <img src="/img/c.png" height="100" width="100" style={{marginRight:20}} alt="c" />
        <img src="/img/python.jpeg" height="100" width="200" style={{marginRight:20}} alt="python" />
        <img src="/img/java.jpeg" height="100" width="200" style={{marginRight:10}} alt="java" />
        <img src="/img/html.png" height="100" width="200" alt="html" />
        <img src="/img/css.png" height="100" width="200" style={{marginRight:10}} alt="css" />
      </div>
      <div className="sbox">
        <p style={{fontSize: '30px'}}>Tools:</p>
        <img src="/img/git1.png" height="100" width="200" style={{paddingLeft:70}} alt="git" />
        <img src="/img/google cloud.png" height="100" width="200" style={{paddingLeft:70}} alt="gcloud" />
        <img src="/img/download.jpeg" height="100" width="200" style={{paddingLeft:70}} alt="other" />
      </div>

      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setOpen(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedProject.title}</h3>
            <p className="modal-sub">{selectedProject.subtitle}</p>
            <img src={selectedProject.image} alt={selectedProject.title} style={{ maxWidth: '100%', borderRadius: 8, marginTop: 12 }} />
            <p style={{ marginTop: 12 }}>{selectedProject.description}</p>
            <p className="project-tech">{selectedProject.tech.join(' | ')}</p>
            <div style={{ textAlign: 'right', marginTop: 12 }}>
              <button className="view-btn" onClick={() => setOpen(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
      
  )
}