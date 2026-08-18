import React, { useEffect, useRef } from 'react'
import './education.css'

export default function Education(){
  const timelineItems = [
    {
      type: 'education',
      title: 'Undergraduate — B.E. Computer Science',
      institute: 'K.S.R College of Engineering, Tiruchengode',
      period: '2024 - 2028',
      details: ['CGPA: 8.7', 'Focused on core CS fundamentals, algorithms, database systems, and AI modules.'],
      icon: 'graduation-cap'
    },
    {
      type: 'education',
      title: 'Higher Secondary Certificate (HSC)',
      institute: 'Kongunadu Matric Higher Secondary School, Velagoundampatti',
      period: '2023 - 2024',
      details: ['Percentage: 82.3%'],
      icon: 'school'
    },
    {
      type: 'education',
      title: 'Secondary School Leaving Certificate (SSLC)',
      institute: 'Kongunadu Matric Higher Secondary School, Velagoundampatti',
      period: '2021 - 2022',
      details: ['Percentage: 89.4%'],
      icon: 'school'
    },
    {
      type: 'achievement',
      title: 'Key Achievements & Activities',
      institute: 'Co-curricular Accomplishments',
      period: '2024 - Present',
      details: [
        "Presented research/project paper at TechAura'25 (IEEE).",
        "Won and participated in multiple college Hackathons and Debugging events.",
        "Active participant in a national-level web development workshop (Oct 2025)."
      ],
      icon: 'trophy'
    },
    {
      type: 'certification',
      title: 'Professional Certifications',
      institute: 'Verified Credentials',
      period: 'Ongoing',
      details: [
        "NPTEL — Introduction to Internet of Things (IoT) — Consolidated Score: 90 (Gold/Elite)",
        "NPTEL — Cloud Computing — Consolidated Score: 60",
        "GDG Campus Solution Challenge — Certificate of Achievement (2025)",
        "How To CSS — Codekaro"
      ],
      icon: 'certificate'
    }
  ]

  const itemRefs = useRef([])
  itemRefs.current = []
  
  const addToRefs = (el) => {
    if (el && !itemRefs.current.includes(el)) {
      itemRefs.current.push(el)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

    itemRefs.current.forEach(el => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="education" className="education-page-container container">
      <h2 className="education-page-title">Education & Credentials</h2>
      
      <div className="education-timeline">
        {timelineItems.map((item, idx) => {
          const sideClass = idx % 2 === 0 ? 'left' : 'right'
          return (
            <div 
              key={idx} 
              className={`timeline-node ${sideClass}`}
              ref={addToRefs}
            >
              <div className="timeline-marker">
                <i className={`fas fa-${item.icon}`}></i>
              </div>
              
              <div className="glass-card timeline-card">
                <span className="card-period">{item.period}</span>
                <h3 className="card-title">{item.title}</h3>
                <h4 className="card-institute">{item.institute}</h4>
                <ul className="card-details">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}