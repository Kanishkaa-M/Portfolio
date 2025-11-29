import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./contacts.css";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_0o97inc",   // your service ID
        "template_0teto63",  // your template ID
        formData,
        "NVXakgmVWsEgiJ4dy"  // your public key
      )
      .then(
        () => {
          alert("Message Sent Successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          alert("Failed to send message. Try again.");
        }
      );
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
    </section>
  );
}
