import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section">
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-container">
        <form className="contact-form">
          <h2>Contact Form</h2>

          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" placeholder="First Name" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Last Name" />
            </div>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Your Email" />
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input type="text" placeholder="Subject" />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Leave your message here..."></textarea>
          </div>

          <button type="submit" className="btn-submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
