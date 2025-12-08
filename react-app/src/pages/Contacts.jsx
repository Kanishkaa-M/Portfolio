import React, { useState } from "react";
import "./contacts.css";
import Globe from "../components/Globe";

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
    <section className="contact-section">

      <svg aria-hidden="true" width="0" height="0">
        <filter id="glow-2">
          <feGaussianBlur stdDeviation="12" result="blur1" />
          <feGaussianBlur stdDeviation="24" result="blur2" />
          <feBlend in="blur1" in2="blur2" mode="lighten" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </svg>

      <div className="glow-wrapper">
        <div className="glow-border"></div>

        <div className="contact-box">
          <h3 className="contact-subtitle">GET IN TOUCH</h3>
          <h1 className="contact-title">
            Contact
          </h1>

          <form className="contact-form" onSubmit={sendEmail}>
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="What's your name?"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="What's your email?"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Your Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="What do you want to say?"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="send-btn">Send</button>
          </form>
        </div>
      </div>

      <div className="globe-wrapper">
        <Globe />
      </div>

      {showSuccess && (
        <div className="contact-success">Message Sent Successfully!</div>
      )}
    </section>
  );
}
