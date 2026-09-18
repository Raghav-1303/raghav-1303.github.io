
import React, { useEffect, useRef } from "react";
import "../assets/styles/Contact.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.gtag?.("event", "view_contact", {
            section_name: "Contact",
          });

          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const trackClick = (eventName: string) => {
    window.gtag?.("event", eventName, {
      section_name: "Contact",
    });
  };

  return (
    <div
      ref={contactRef}
      id="contact"
      className="contact-section"
    >
      <div className="contact_wrapper">

        <h1>Contact Details</h1>

        <div className="contact-details">

          {/* Phone */}
          <div className="contact-item">
            <FontAwesomeIcon
              icon={faPhone}
              className="icon"
            />

            <a
              href="tel:+19723839611"
              onClick={() => trackClick("phone_click")}
            >
              +1 972-383-9611
            </a>
          </div>

          {/* Email */}
          <div className="contact-item">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="icon"
            />

            <a
              href="mailto:raghava.m1001@gmail.com"
              onClick={() => trackClick("email_click")}
            >
              raghava.m1001@gmail.com
            </a>
          </div>

          {/* Location */}
          <div className="contact-item">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="icon"
            />

            <a
              href="https://www.google.com/maps?q=Irving,Texas,USA"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClick("location_click")}
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