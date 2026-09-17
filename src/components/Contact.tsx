import React from "react";
import "../assets/styles/Contact.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div id="contact" className="contact-section">
      <div className="contact_wrapper">
        <h1>Contact Details</h1>

        <div className="contact-details">

          {/* Phone */}
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <a href="tel:+19723839611">
              +1 972-383-9611
            </a>
          </div>

          {/* Email */}
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <a href="mailto:raghava.m1001@gmail.com">
              raghava.m1001@gmail.com
            </a>
          </div>

          {/* Location */}
          <div className="contact-item">
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            <a
              href="https://www.google.com/maps?q=Irving,Texas,USA"
              target="_blank"
              rel="noopener noreferrer"
            >
              Irving Texas, USA
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;