import React from "react";
import { FaPhoneAlt, FaEnvelope, FaTelegramPlane } from "react-icons/fa";
// import "./Contacts.css";
import "./Contacts.modules.css";


function Contacts() {
  return (
    <div className="contact">
      <div className="heading-container">
        <h2 className="heading">ANY QUESTIONS?</h2>
        <h1 className="para">
          Please Feel Free to
          <br />
          Contact Us
        </h1>
      </div>

      {/* Cards Section */}
      <div className="cards-container  ">
        <div className="contact-card">
          <div className="icon">
            <FaTelegramPlane />
          </div>
          <h3>1254 Balaganj, Lucknow, Uttar Pradesh</h3>
        </div>

        <div className="contact-card">
          <div className="icon">
            <FaPhoneAlt />
          </div>
          <h3>+91 97345 67890</h3>
        </div>

        <div className="contact-card">
          <div className="laptop-card">
            <div className="icon">
              <FaEnvelope />
            </div>
            <h3>medixhospital@gmail.com</h3>
          </div>
        </div>
      </div>

      <div className="map-section">
        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3558.960393994174!2d80.8756601!3d26.8729994!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bffec1bf73e65%3A0x89b2a062442b63b2!2sMedix%20Hospital!5e0!3m2!1sen!2sin!4v1767178806314!5m2!1sen!2sin"
            width="1500"
            height="750"
            style={{ border: 0 }}
            // allowFullscreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Contact Form Overlay */}
          <div className="contact-form">
            <form>
              <div className="form-row">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
              </div>

              <input type="text" placeholder="Subject" />

              <textarea placeholder="Message"></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
