import React, { useState } from 'react'
import portfolio from '../assets/image.png'

export default function Projects(){
    const [open, setOpen] = useState(false)

  const project = {
    title: 'Portfolio',
    subtitle: 'Personal Website',
    description: `A responsive and modern personal portfolio website designed to showcase my skills, education, and projects. It serves as my digital identity where I can share my journey, achievements, and technical growth. The website is built with a clean UI and smooth navigation for an engaging user experience.`,
    tech: ['HTML','CSS','Javscript','React'],
    image: portfolio
  }

  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>

      <div className="featured-project">
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
            <button className="view-btn" onClick={() => setOpen(true)}>VIEW DETAILS</button>
          </div>
        </div>
      </div>

      {open && (
        <div className="modal-backdrop" onClick={() => setOpen(false)}>
          <div className="modal" onClick={(e)=>e.stopPropagation()}>
            <h3>{project.title}</h3>
            <p className="modal-sub">{project.subtitle}</p>
            <img src={project.image} alt={project.title} style={{maxWidth: '100%', borderRadius: 8, marginTop: 12}} />
            <p style={{marginTop:12}}>{project.description}</p>
            <p className="project-tech">{project.tech.join(' | ')}</p>
            <div style={{textAlign:'right', marginTop:12}}>
              <button className="view-btn" onClick={()=>setOpen(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
