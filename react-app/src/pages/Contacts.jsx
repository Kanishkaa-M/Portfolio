import React, { useState } from "react";
import "./contacts.css";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    // Simple client-side success popup (Email sending is skipped here).
    // Validate fields (basic)
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill all fields before sending.')
      return
    }

    // Simulate successful send and show popup
    setShowSuccess(true)
    setFormData({ name: "", email: "", message: "" })
    // hide after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000)
  };

  return (
    <section className="contact-section">
      <div className="contact-box">
        <h3 className="contact-subtitle">GET IN TOUCH</h3>
        <h1 className="contact-title">
          Contact<span>.</span>
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
      {showSuccess && (
        <div className="contact-success">Message Sent Successfully!</div>
      )}
    </section>
  );
}
