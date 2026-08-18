import React from "react";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/javascript.png";
import reactLogo from "../assets/reactjs.png";
import cLogo from "../assets/c.png";
import pythonLogo from "../assets/Python.jpg";
import javaLogo from "../assets/java.png";
import githubLogo from "../assets/github.png";
import canvaLogo from "../assets/canva.jpeg";
import cloudLogo from "../assets/Google cloud.png";
import "./Skills.css"; 

function TechCard({ title, icon }) {
  return (
    <div className="tech-card-wrapper">
      <div className="glass-card tech-card">
        <div className="tech-card-inner">
          <img src={icon} alt={title} className="tech-card-icon" />
          <h3 className="tech-card-title">{title}</h3>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const skillCategories = [
    {
      name: "Frontend & Design",
      items: [
        { title: "HTML", icon: htmlLogo },
        { title: "CSS", icon: cssLogo },
        { title: "JavaScript", icon: jsLogo },
        { title: "ReactJS", icon: reactLogo },
        { title: "Canva", icon: canvaLogo }
      ]
    },
    {
      name: "Backend & Cloud",
      items: [
        { title: "Google Cloud", icon: cloudLogo }
      ]
    },
    {
      name: "Programming Languages & Tools",
      items: [
        { title: "C", icon: cLogo },
        { title: "Python", icon: pythonLogo },
        { title: "Java", icon: javaLogo },
        { title: "GitHub", icon: githubLogo }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-page-container container">
      <h2 className="skills-page-title">Technical Skills</h2>
      
      <div className="skills-categories-wrapper">
        {skillCategories.map((category, catIdx) => (
          <div className="skills-category-block" key={catIdx}>
            <h3 className="skills-category-heading">
              <span className="heading-dot"></span> {category.name}
            </h3>
            <div className="skills-cards-grid">
              {category.items.map((skill, itemIdx) => (
                <TechCard key={itemIdx} title={skill.title} icon={skill.icon} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
