import React from "react";
import { motion } from "framer-motion";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/javascript.png";
import reactLogo from "../assets/reactjs.png";

// Reusable Card Component (inside same file)
function TechCard({ title, icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotateY: 10, rotateX: 10 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      style={cardStyle}
    >
      <div style={{ textAlign: "center", color: "white" }}>
        <img src={icon} alt={title} style={iconStyle} />
        <h3>{title}</h3>
      </div>
    </motion.div>
  );
}

// Main Component
export default function Skills() {
  return (
    <div style={containerStyle}>
      <TechCard title="HTML Developer" icon={htmlLogo} />
      <TechCard title="CSS Expert" icon={cssLogo} />
      <TechCard title="JavaScript Developer" icon={jsLogo} />
      <TechCard title="React Developer" icon={reactLogo} />
    </div>
  );
}

// Inline CSS Styles
const containerStyle = {
  display: "flex",
  gap: "40px",
  justifyContent: "center",
  flexWrap: "wrap",
  paddingTop: "60px",
};

const cardStyle = {
  width: "260px",
  height: "260px",
  background: "linear-gradient(145deg, #121212, #0c0c0c)",
  borderRadius: "20px",
  border: "2px solid rgba(0, 255, 255, 0.3)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  transition: "0.3s",
  boxShadow: "0 0 20px rgba(0, 255, 255, 0.2)",
};

const iconStyle = {
  width: "80px",
  marginBottom: "20px",
  filter: "drop-shadow(0 0 10px rgba(0, 255, 255, 0.5))",
};

