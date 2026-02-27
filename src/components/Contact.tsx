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
            <a href="tel:+18173829942">
              +1 817-382-9942
            </a>
          </div>

          {/* Email */}
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <a href="mailto:raghava.dev10@email.com">
              raghava.dev10@email.com
            </a>
          </div>

          {/* Location */}
          <div className="contact-item">
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            <a
              href="https://www.google.com/maps?q=Richardson,Texas,USA"
              target="_blank"
              rel="noopener noreferrer"
            >
              Richardson, Texas, USA
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;