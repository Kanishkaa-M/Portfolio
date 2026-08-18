import React, { useState } from "react";
import "./Skills.css";

// Customized sharp inline SVG paths for high-quality developer logos
const SKILL_ICONS = {
  java: (
    <svg viewBox="0 0 24 24" className="skill-svg-icon" fill="currentColor">
      <path d="M19.46 17.52c-.37-.17-1.12-.47-2.31-.47-2.73 0-4.09 1.5-4.09 3.01 0 1.94 1.83 2.94 4.13 2.94.39 0 .76-.02 1.1-.06.77-.1 1.48-.36 1.8-.7a1.69 1.69 0 0 0 .57-1.28c.01-1.39-1.2-3.44-1.2-3.44zm-2.02 4.41c-.24.03-.49.05-.75.05-1.42 0-2.45-.58-2.45-1.63 0-.82.78-1.57 2.4-1.57.71 0 1.2.14 1.44.25.1.33.24.81.24 1.34-.01.99-.44 1.48-.88 1.56zM9.82 12.87c.36 0 .7-.02 1.02-.06 1.1-.14 1.85-.45 2.19-.88.35-.44.47-1.04.34-1.74a7.9 7.9 0 0 1 1.76-2.58c.24-.26.54-.42.75-.42.14 0 .23.07.28.18s.07.28.07.56c0 1.47-.94 3.49-.94 3.49s1.46.22 2.68.22c2.72 0 4.14-1.09 4.14-2.88 0-1.21-.69-2.04-1.92-2.52C18.06 6.8 17.5 7 17 7c-.37 0-.74-.03-1.1-.1a3.86 3.86 0 0 1-1.56-.63c-.48-.37-.73-.85-.73-1.45 0-1.89 2.59-4.82 2.59-4.82S13.88 1 11.23 1C8.24 1 6.55 2.59 6.55 4.88c0 1.51.78 2.64 2.18 3.32a9.12 9.12 0 0 1-.92 2.21c-.48.91-.79 1.7-.8 2.3-.01.07 0 .12.01.16zm2.46-8.79c.67.24 1.04.66 1.04 1.25 0 1.08-1.51 2.92-1.51 2.92s-.65-.45-.98-.99c-.31-.52-.45-1.12-.45-1.63 0-.96.65-1.66 1.9-1.55zM.05 16.92c.6 1.24 2.27 2.14 4.54 2.45.69.1 1.4.15 2.11.15 1.54 0 2.96-.23 3.93-.65.25-.11.4-.29.41-.53.02-.27-.14-.54-.44-.65a12.8 12.8 0 0 1-3.69-.56c-1.39-.42-2.19-1.02-2.19-1.65 0-.95 1.76-2.01 4.57-2.01.5 0 .99.03 1.48.09.28.04.57.06.84.06.31 0 .6-.04.88-.11.29-.07.47-.28.45-.55a.55.55 0 0 0-.46-.5c-.86-.18-1.82-.28-2.82-.28-3.41 0-5.83 1.25-5.83 3.1 0 1.34 1.36 2.46 3.65 3.03l.03.01c-.57.17-1.19.29-1.85.34a17.2 17.2 0 0 1-2.45-.02c-1.92-.21-3.21-.86-3.64-1.68-.08-.16-.25-.26-.44-.26s-.36.1-.44.27a.52.52 0 0 0-.01.44z" />
    </svg>
  ),
  javascript: (
    <svg viewBox="0 0 24 24" className="skill-svg-icon" fill="currentColor">
      <path d="M0 0h24v24H0V0zm22.034 18.268c-.153-.822-.81-1.36-2.126-1.867l-.518-.2c-1.02-.383-1.36-.664-1.36-1.152 0-.44.383-.79 1.05-.79.748 0 1.15.344 1.29.969l1.423-.348c-.29-1.462-1.24-2.157-2.73-2.157-1.7 0-2.857.962-2.857 2.35 0 1.53 1.088 2.2 2.618 2.78l.587.222c1.1.4 1.41.724 1.41 1.3 0 .632-.544 1.002-1.394 1.002-.997 0-1.493-.49-1.685-1.136l-1.468.294c.316 1.348 1.37 2.033 3.1 2.033 2.025 0 3.026-.952 3.026-2.457zm-11.562-.624c0-1.206-.46-1.968-1.422-2.426l-.46-.22c-.663-.31-.85-.5-.85-.887 0-.348.3-.608.8-.608.5 0 .8.22.955.626l1.375-.348c-.287-1.127-1.146-1.693-2.33-1.693-1.5 0-2.478.784-2.478 2.046 0 1.25.776 1.833 2.043 2.433l.462.218c.7.33.91.56.91.95 0 .428-.372.716-.957.716-.69 0-1.103-.317-1.297-.887l-1.42.3c.338 1.238 1.267 1.8 2.68 1.8 1.82 0 2.685-.826 2.685-2.222z" />
    </svg>
  ),
  sql: (
    <svg viewBox="0 0 24 24" className="skill-svg-icon" fill="currentColor">
      <path d="M12 2C6.48 2 2 4.02 2 6.5s4.48 4.5 10 4.5 10-2.02 10-4.5S17.52 2 12 2zm0 18c-4.93 0-9-1.62-9-3.5V20c0 1.88 4.07 3.5 9 3.5s9-1.62 9-3.5v-3.5c0 1.88-4.07 3.5-9 3.5zm0-6c-4.93 0-9-1.62-9-3.5V14c0 1.88 4.07 3.5 9 3.5s9-1.62 9-3.5v-3.5c0 1.88-4.07 3.5-9 3.5z" />
    </svg>
  ),
  html: (
    <svg viewBox="0 0 24 24" className="skill-svg-icon" fill="currentColor">
      <path d="M1.5 0h21l-1.91 21.563L12 24l-8.59-2.438L1.5 0zm17 5H5.5l.34 3.75h10.48l-.37 4.13L12 14.07l-3.95-1.16-.27-3h-3.7l.6 6.83L12 19.38l7.32-2.63L20 5h-1.5z" />
    </svg>
  ),
  css: (
    <svg viewBox="0 0 24 24" className="skill-svg-icon" fill="currentColor">
      <path d="M1.5 0h21l-1.91 21.563L12 24l-8.59-2.438L1.5 0zm17 5H5.5l.72 8h9.56l-.37 4.13L12 18.25l-3.41-1.12-.22-2.5H4.67l.45 5.13L12 21.88l6.88-2.13L19.5 5z" />
    </svg>
  ),
  react: (
    <svg viewBox="0 0 24 24" className="skill-svg-icon" fill="currentColor">
      <path d="M24 10.66c0-.39-.14-.76-.41-1.07-.63-.73-1.93-1.15-3.52-1.15-2.07 0-4.48.72-6.57 1.93C11.4 9.17 9 8.45 6.93 8.45 5.34 8.45 4.04 8.87 3.4 9.6c-.55.6-.66 1.34-.33 2.07.64 1.42 2.37 2.94 4.88 4.29-2.52 1.35-4.24 2.87-4.88 4.3-.33.73-.22 1.46.33 2.07.64.73 1.94 1.15 3.53 1.15 2.07 0 4.47-.72 6.57-1.93 2.09 1.21 4.5 1.93 6.57 1.93 1.59 0 2.89-.42 3.53-1.15.55-.6.66-1.34.33-2.07-.64-1.42-2.37-2.94-4.88-4.29 2.52-1.35 4.24-2.87 4.88-4.3.33-.73.22-1.46-.33-2.07zm-12 3.52c-.99 0-1.8-.81-1.8-1.8s.81-1.8 1.8-1.8 1.8.81 1.8 1.8-.81 1.8-1.8 1.8z" />
    </svg>
  ),
  nextjs: (
    <svg viewBox="0 0 24 24" className="skill-svg-icon" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.859 18.243l-5.26-6.843v6.843H11.14V7.558h1.458l5.26 6.843V7.558h1.458v10.685h-1.457z" />
    </svg>
  ),
  vite: (
    <svg viewBox="0 0 24 24" className="skill-svg-icon" fill="currentColor">
      <path d="M19.983 3L12 17.583 4.017 3H2l10 18 10-18zM12 0L2.732 4.196 12 20.784 21.268 4.196z" />
    </svg>
  ),
  node: (
    <svg viewBox="0 0 24 24" className="skill-svg-icon" fill="currentColor">
      <path d="M12 2L2.5 7.5v11L12 24l9.5-5.5v-11L12 2zm7.5 15.3l-7.5 4.3-7.5-4.3v-8.6l7.5-4.3 7.5 4.3v8.6zM12 7.1L6.5 10.3v6.4l5.5 3.2 5.5-3.2v-6.4L12 7.1z" />
    </svg>
  ),
  express: (
    <svg viewBox="0 0 24 24" className="skill-svg-icon" fill="currentColor">
      <text x="5" y="17" fontFamily="Outfit, sans-serif" fontSize="16" fontWeight="bold" fill="currentColor">ex</text>
      <circle cx="18" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  restapi: (
    <svg viewBox="0 0 24 24" className="skill-svg-icon" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  ),
  mongodb: (
    <svg viewBox="0 0 24 24" className="skill-svg-icon" fill="currentColor">
      <path d="M12 .003c-.024 0-.047.002-.07.002C10.162.085 4.887 4.143 4.887 11.238c0 5.485 4.364 8.783 7.043 11.23.1.092.24.14.382.13.14.01.282-.038.382-.13 2.68-2.447 7.043-5.745 7.043-11.23 0-7.095-5.275-11.153-7.043-11.233-.023-.001-.046-.002-.07-.002zm0 3.256c.725 1.7 1.83 4.9 1.83 7.98 0 3.8-1.07 6.13-1.83 7.55V3.26zm0 15.53c-.76-1.42-1.83-3.75-1.83-7.55 0-3.08 1.105-6.28 1.83-7.98v15.53z" />
    </svg>
  ),
  postgresql: (
    <svg viewBox="0 0 24 24" className="skill-svg-icon" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
    </svg>
  ),
  supabase: (
    <svg viewBox="0 0 24 24" className="skill-svg-icon" fill="currentColor">
      <path d="M21.36 10.9L12.5 1.57a.75.75 0 0 0-1.25.79l2.84 7.03H3.64a.75.75 0 0 0-.6 1.25l8.86 9.33a.75.75 0 0 0 1.25-.79l-2.84-7.03h10.65a.75.75 0 0 0 .6-1.25z" />
    </svg>
  ),
  git: (
    <svg viewBox="0 0 24 24" className="skill-svg-icon" fill="currentColor">
      <path d="M23.38 10.74L13.26.62a2.22 2.22 0 0 0-3.14 0L6.96 2.78l3.14 3.14a2.21 2.21 0 0 1 2.14 2.14l2.9 2.9a2.21 2.21 0 0 1 2.14 2.14 2.22 2.22 0 0 1-4.44 0l-2.9-2.9a2.21 2.21 0 0 1-2.14-2.14l-3.14-3.14-3.5 3.5a2.22 2.22 0 0 0 0 3.14l10.12 10.12a2.22 2.22 0 0 0 3.14 0l10.12-10.12a2.22 2.22 0 0 0 0-3.14z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" className="skill-svg-icon" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
    </svg>
  ),
  postman: (
    <svg viewBox="0 0 24 24" className="skill-svg-icon" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </svg>
  ),
  vscode: (
    <svg viewBox="0 0 24 24" className="skill-svg-icon" fill="currentColor">
      <path d="M23.98 17.57l-2.45-2.07c.3-.87.47-1.78.47-2.73s-.17-1.86-.47-2.73l2.45-2.07c.02-.02.02-.05 0-.07l-2.72-4.71c-.02-.03-.05-.03-.07-.02l-3.13 1.26c-.75-.58-1.59-1.05-2.5-1.4l-.47-3.33c0-.03-.03-.05-.07-.05H9.6c-.03 0-.06.02-.07.05L9.06 6.3c-.91.35-1.75.82-2.5 1.4L3.43 6.44c-.02-.01-.05-.01-.07.02L.64 11.17c-.02.02-.02.05 0 .07l2.45 2.07c-.3.87-.47 1.78-.47 2.76s.17 1.86.47 2.73l-2.45 2.07c-.02.02-.02.05 0 .07l2.72 4.71c.02.03.05.03.07.02l3.13-1.26c.75.58 1.59 1.05 2.5 1.4l.47 3.33c0 .03.03.05.07.05h5.45c.03 0 .06-.02.07-.05l.47-3.33c.91-.35 1.75-.82 2.5-1.4l3.13 1.26c.02.01.05.01.07-.02l2.72-4.71c.02-.02.02-.05 0-.07zM12 15.6c-1.99 0-3.6-1.61-3.6-3.6s1.61-3.6 3.6-3.6 3.6 1.61 3.6 3.6-1.61 3.6-3.6 3.6z" />
    </svg>
  ),
  vercel: (
    <svg viewBox="0 0 24 24" className="skill-svg-icon" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 1L24 22H0L12 1z" />
    </svg>
  )
};

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filterTabs = [
    { label: "All", value: "All" },
    { label: "Languages", value: "Languages" },
    { label: "Frontend", value: "Frontend" },
    { label: "Backend", value: "Backend" },
    { label: "Databases", value: "Databases" },
    { label: "Tools", value: "Tools" }
  ];

  const allSkills = [
    // Languages
    { title: "Java", category: "Languages", icon: SKILL_ICONS.java },
    { title: "JavaScript", category: "Languages", icon: SKILL_ICONS.javascript },
    { title: "SQL", category: "Languages", icon: SKILL_ICONS.sql },
    // Frontend
    { title: "HTML5", category: "Frontend", icon: SKILL_ICONS.html },
    { title: "CSS3", category: "Frontend", icon: SKILL_ICONS.css },
    { title: "React", category: "Frontend", icon: SKILL_ICONS.react },
    { title: "Next.js", category: "Frontend", icon: SKILL_ICONS.nextjs },
    { title: "Vite", category: "Frontend", icon: SKILL_ICONS.vite },
    // Backend
    { title: "Node.js", category: "Backend", icon: SKILL_ICONS.node },
    { title: "Express.js", category: "Backend", icon: SKILL_ICONS.express },
    { title: "REST APIs", category: "Backend", icon: SKILL_ICONS.restapi },
    // Databases
    { title: "MongoDB", category: "Databases", icon: SKILL_ICONS.mongodb },
    { title: "PostgreSQL", category: "Databases", icon: SKILL_ICONS.postgresql },
    { title: "Supabase", category: "Databases", icon: SKILL_ICONS.supabase },
    // Tools
    { title: "Git", category: "Tools", icon: SKILL_ICONS.git },
    { title: "GitHub", category: "Tools", icon: SKILL_ICONS.github },
    { title: "Postman", category: "Tools", icon: SKILL_ICONS.postman },
    { title: "VS Code", category: "Tools", icon: SKILL_ICONS.vscode },
    { title: "Vercel", category: "Tools", icon: SKILL_ICONS.vercel }
  ];

  const filteredSkills = activeFilter === "All"
    ? allSkills
    : allSkills.filter(skill => skill.category === activeFilter);

  return (
    <section id="skills" className="skills-page-container container">
      {/* Title with styling */}
      <div className="skills-title-wrapper">
        <h2 className="skills-core-title">
          Technical Skills - <span className="subtitle-glow">CORE EXPERTISE!</span>
        </h2>
      </div>

      {/* Filter Tabs */}
      <div className="skills-tabs-container">
        {filterTabs.map((tab) => (
          <button
            key={tab.value}
            className={`skill-tab-btn ${activeFilter === tab.value ? "active" : ""}`}
            onClick={() => setActiveFilter(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid-wrapper">
        {filteredSkills.map((skill, idx) => (
          <div className="skills-card-glow-box" key={idx}>
            <div className="glass-card skill-icon-card">
              <div className="skill-card-content">
                <div className="skill-icon-holder">{skill.icon}</div>
                <span className="skill-card-title-text">{skill.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
