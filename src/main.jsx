import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Intro from "./components/Intro.jsx";
import "./index.css";
import "./components/nav.css";
import "./pages/home.css";
import "./pages/about.css";
import "./pages/education.css";
import "./pages/projects.css";
import "./pages/skills.css";
import "./pages/contacts.css";
import "./components/Background.css";

function Root() {
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowApp(true);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return showApp ? <App /> : <Intro />;
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
