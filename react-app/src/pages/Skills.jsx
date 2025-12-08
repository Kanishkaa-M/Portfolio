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
    <div className="tech-card">
      <div className="tech-card-content">
        <img src={icon} alt={title} className="tech-icon" />
        <h3 className="tech-title">{title}</h3>
      </div>
    </div>
  );
}


export default function Skills() {
  return (
    <section className="skills-section">
      <div>
      <h1 className="skills-heading">Languages</h1>
      <div className="skills-container">
        <TechCard icon={htmlLogo} title="HTML" />
        <TechCard icon={cssLogo} title="CSS" />
        <TechCard icon={jsLogo} title="JavaScript" />
        <TechCard icon={reactLogo} title="ReactJS" />
        <TechCard icon={cLogo} title="C" />
        <TechCard icon={pythonLogo} title="Python" />
        <TechCard icon={javaLogo} title="Java" />
      </div>
      </div>
      <div>
        <h1 className="skills-heading">Tools</h1>
      <div className="skills-container">
        <TechCard icon={githubLogo} title="GitHub" />
        <TechCard icon={canvaLogo} title="Canva" />
        <TechCard icon={cloudLogo} title="Google Cloud" />
      </div>
      </div>
    </section>
  );
}


