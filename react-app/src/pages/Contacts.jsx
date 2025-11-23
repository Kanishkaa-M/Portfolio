import React, { useEffect } from 'react'

export default function Contacts(){
  useEffect(()=>{
    const helpButton = document.getElementById('helpButton')
    const helpPanel = document.getElementById('helpPanel')
    if(!helpButton || !helpPanel) return
    function onClick(){
      helpPanel.style.display = helpPanel.style.display === 'flex' ? 'none' : 'flex'
    }
    helpButton.addEventListener('click', onClick)
    function onWindowClick(e){
      if(!helpPanel.contains(e.target) && e.target !== helpButton) helpPanel.style.display = 'none'
    }
    window.addEventListener('click', onWindowClick)
    return ()=>{
      helpButton.removeEventListener('click', onClick)
      window.removeEventListener('click', onWindowClick)
    }
  },[])

  return (
    <div className="about">
      <h2>Contact-------</h2>
      <div className="cbox">
        <h4>Address 🏠:</h4>
        <p>Namakkal, Tamilnadu</p>
      </div>
      <div className="cbox">
        <h4>Social Profiles 🌐:</h4>
        <a className="icons" href="https://www.linkedin.com/in/kanishkaa-maheshkumar-874927327"><i className="fab fa-linkedin-in"></i></a>
        <a className="icons" href="https://github.com/Kanishkaa-M"><i className="fab fa-github"></i></a>
      </div>
      <div className="cbox">
        <h4>Email 📩:</h4>
        <p>kanishkaamaheshkumar@gmail.com</p>
      </div>
      <div className="cbox">
        <h4>Contact ☎:</h4>
        <p>+919788086531</p>
      </div>

      <div className="help-section">
        <div className="help-button" id="helpButton">💬 Need Help?</div>
        <div className="help-panel" id="helpPanel">
          <h3>How can I help you?</h3>
          <a href="mailto:kanishkaamaheshkumar@gmail.com" className="help-link">Email Me</a>
          <a href="https://wa.me/919788086531?text=Hi%20Kanishkaa!%20I%20visited%20your%20portfolio%20and%20want%20to%20connect." target="_blank" rel="noreferrer" className="help-link">WhatsApp</a>
          <a href="https://www.linkedin.com/in/kanishkaa-maheshkumar-874927327" target="_blank" rel="noreferrer" className="help-link">LinkedIn</a>
        </div>
      </div>
    </div>
  )
}
