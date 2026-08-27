import React, { useState } from "react";
import "./contacts.css";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields before sending.");
      return;
    }

    setShowSuccess(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section id="contacts" className="contact-page-container container">
      <h2 className="contact-page-title">Get In Touch</h2>
      
      <div className="contact-split-grid">
        {/* Left Side: Contact Form */}
        <div className="glass-card contact-form-card">
          <span className="contact-meta-label contact-title">Contact</span>
          <h3 className="contact-block-heading">Drop me a line</h3>
          <div className="contact-form-intro">
            <p>Have an idea, opportunity, or project in mind?</p>
            <span>Let&apos;s create something useful together.</span>
          </div>
          
          <form className="contact-form-element" onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="form-name">Your Name</label>
              <input
                id="form-name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="form-email">Your Email</label>
              <input
                id="form-email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="form-message">Your Message</label>
              <textarea
                id="form-message"
                name="message"
                rows="5"
                placeholder="What would you like to say?"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-submit-btn">
              Send Message <i className="fas fa-paper-plane icon-right"></i>
            </button>
          </form>
        </div>

        {/* Right Side: Contact Info Board */}
        <div className="glass-card contact-info-card">
          <span className="contact-meta-label">Connect Channels</span>
          <h3 className="contact-block-heading">Contact Information</h3>
          <p className="contact-info-desc">
            Feel free to reach out for internship inquiries, project collaborations, or just to say hello. I'll get back to you as soon as possible!
          </p>

          <div className="contact-details-list">
            <a href="mailto:kanishkaamaheshkumar@gmail.com" className="info-item-link">
              <div className="info-icon-box">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="info-item-content">
                <span className="info-label">Email Me</span>
                <span className="info-value">kanishkaamaheshkumar@gmail.com</span>
              </div>
            </a>

            <a href="tel:+919788086531" className="info-item-link">
              <div className="info-icon-box">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="info-item-content">
                <span className="info-label">Call / WhatsApp</span>
                <span className="info-value">+91 97880 86531</span>
              </div>
            </a>

            <div className="info-item-link static">
              <div className="info-icon-box">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="info-item-content">
                <span className="info-label">Location</span>
                <span className="info-value">Namakkal, Tamil Nadu, India</span>
              </div>
            </div>

            <div className="info-item-link static">
              <div className="info-icon-box">
                <i className="fas fa-briefcase"></i>
              </div>
              <div className="info-item-content">
                <span className="info-label">Availability</span>
                <span className="info-value">Open for AI-ML & Software Roles</span>
              </div>
            </div>
          </div>

          <div className="contact-social-connect">
            <h4>Or find me on</h4>
            <div className="social-connect-links">
              <a href="https://www.linkedin.com/in/kanishkaa-maheshkumar-874927327" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-circle-btn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/Kanishkaa-M" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-circle-btn">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://wa.me/919788086531" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="social-circle-btn">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://instagram.com/kanishkaamaheshkumar" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-circle-btn">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className="contact-toast-success">
          <i className="fas fa-check-circle"></i> Message Sent Successfully!
        </div>
      )}
    </section>
  );
}
