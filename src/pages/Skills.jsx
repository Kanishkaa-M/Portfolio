import React, { useState } from "react";
import "./Skills.css";
import { FaJava } from "react-icons/fa6";
import { TbBrandVscode } from "react-icons/tb";
import {
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiSupabase,
  SiVercel,
  SiVite,
  SiNextdotjs,
  SiCss,
} from "react-icons/si";

const BRAND_ICONS = {
  java: <FaJava className="skill-svg-icon" style={{ color: "#f89820" }} />,
  javascript: <SiJavascript className="skill-svg-icon" style={{ color: "#f7df1e" }} />,
  sql: (
    <svg className="skill-sql-logo" viewBox="0 0 100 100" aria-label="SQL logo" role="img">
      <path d="M12 22C12 14 22 9 50 9C78 9 88 14 88 22V75C88 83 78 89 50 89C22 89 12 83 12 75V22Z" fill="#35d9f1" />
      <ellipse cx="50" cy="22" rx="38" ry="12" fill="#8af3ff" opacity="0.8" />
      <ellipse cx="50" cy="75" rx="38" ry="12" fill="#1cbac8" opacity="0.85" />
      <text x="50" y="63" textAnchor="middle" fontSize="28" fontWeight="800" fill="#f8ffff" fontFamily="Arial, sans-serif" letterSpacing="-2">SQL</text>
    </svg>
  ),
  html: <SiHtml5 className="skill-svg-icon" style={{ color: "#e34f26" }} />,
  css: <SiCss className="skill-svg-icon" style={{ color: "#1572b6" }} />,
  react: <SiReact className="skill-svg-icon" style={{ color: "#61dafb" }} />,
  nextjs: <SiNextdotjs className="skill-svg-icon" style={{ color: "#ffffff" }} />,
  vite: <SiVite className="skill-svg-icon" style={{ color: "#bd34fe" }} />,
  node: <SiNodedotjs className="skill-svg-icon" style={{ color: "#339933" }} />,
  express: (
    <svg className="skill-brand-logo skill-express-logo" viewBox="0 0 100 100" aria-label="Express logo" role="img">
      <rect x="14" y="14" width="72" height="72" rx="18" fill="#0f1014" />
      <text x="50" y="61" textAnchor="middle" fontSize="38" fontWeight="700" fill="#ffffff" fontFamily="Arial, sans-serif" letterSpacing="-3">ex</text>
    </svg>
  ),
  mongodb: <SiMongodb className="skill-svg-icon" style={{ color: "#47a248" }} />,
  postgresql: <SiPostgresql className="skill-svg-icon" style={{ color: "#4169e1" }} />,
  supabase: <SiSupabase className="skill-svg-icon" style={{ color: "#3ecf8e" }} />,
  git: <SiGit className="skill-svg-icon" style={{ color: "#f05032" }} />,
  github: <SiGithub className="skill-svg-icon" style={{ color: "#ffffff" }} />,
  postman: <SiPostman className="skill-svg-icon" style={{ color: "#ff6c37" }} />,
  vscode: <TbBrandVscode className="skill-svg-icon" style={{ color: "#007acc" }} />,
  restapi: (
    <svg className="skill-brand-logo skill-api-logo" viewBox="0 0 100 100" aria-label="API logo" role="img">
      <g stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M30 28 18 50l12 22" />
        <path d="M70 28 82 50l-12 22" />
        <path d="M58 22 42 78" />
      </g>
    </svg>
  ),
  vercel: <SiVercel className="skill-svg-icon" style={{ color: "#ffffff" }} />
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
    { title: "Java", category: "Languages", icon: BRAND_ICONS.java },
    { title: "JavaScript", category: "Languages", icon: BRAND_ICONS.javascript },
    { title: "SQL", category: "Languages", icon: BRAND_ICONS.sql },
    // Frontend
    { title: "HTML5", category: "Frontend", icon: BRAND_ICONS.html },
    { title: "CSS3", category: "Frontend", icon: BRAND_ICONS.css },
    { title: "React", category: "Frontend", icon: BRAND_ICONS.react },
    { title: "Next.js", category: "Frontend", icon: BRAND_ICONS.nextjs },
    { title: "Vite", category: "Frontend", icon: BRAND_ICONS.vite },
    // Backend
    { title: "Node.js", category: "Backend", icon: BRAND_ICONS.node },
    { title: "Express.js", category: "Backend", icon: BRAND_ICONS.express },
    { title: "REST APIs", category: "Backend", icon: BRAND_ICONS.restapi },
    // Databases
    { title: "MongoDB", category: "Databases", icon: BRAND_ICONS.mongodb },
    { title: "PostgreSQL", category: "Databases", icon: BRAND_ICONS.postgresql },
    { title: "Supabase", category: "Databases", icon: BRAND_ICONS.supabase },
    // Tools
    { title: "Git", category: "Tools", icon: BRAND_ICONS.git },
    { title: "GitHub", category: "Tools", icon: BRAND_ICONS.github },
    { title: "Postman", category: "Tools", icon: BRAND_ICONS.postman },
    { title: "VS Code", category: "Tools", icon: BRAND_ICONS.vscode },
    { title: "Vercel", category: "Tools", icon: BRAND_ICONS.vercel }
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
                <div className={`skill-icon-holder skill-icon-${skill.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                  {skill.icon}
                </div>
                <span className="skill-card-title-text">{skill.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
