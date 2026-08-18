import React, { useEffect, useState } from 'react'

const navItems = [
  { label: 'Home', section: 'home', href: '#home' },
  { label: 'About', section: 'about', href: '#about' },
  { label: 'Education', section: 'education', href: '#education' },
  { label: 'Projects', section: 'projects', href: '#projects' },
  { label: 'Skills', section: 'skills', href: '#skills' },
  { label: 'Contact', section: 'contacts', href: '#contacts' }
]

export default function Nav(){
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = navItems
      .map(item => document.getElementById(item.section))
      .filter(Boolean)

    if (!sections.length) return

    const observer = new IntersectionObserver((entries) => {
      const visibleEntry = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

      if (visibleEntry) {
        setActiveSection(visibleEntry.target.id)
      }
    }, {
      threshold: [0.2, 0.4, 0.7],
      rootMargin: '-20% 0px -35% 0px'
    })

    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const handleLinkClick = (section) => {
    setIsOpen(false)
    setActiveSection(section)
  }

  return (
    <header className="topbar">
      <div className="brand">KANISHKAA</div>
      <button 
        className={`nav-toggle ${isOpen ? 'open' : ''}`} 
        onClick={() => setIsOpen(!isOpen)} 
        aria-label="Toggle Navigation"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
      <nav className={isOpen ? 'nav-menu open' : 'nav-menu'}>
        {navItems.map((item) => (
          <a
            key={item.section}
            href={item.href}
            className={activeSection === item.section ? 'nav-link active' : 'nav-link'}
            onClick={() => handleLinkClick(item.section)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
