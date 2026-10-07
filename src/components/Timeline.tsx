import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/Timeline.scss";

function Timeline() {
  const historyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.gtag?.("event", "view_history", {
            section_name: "Career History",
          });

          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (historyRef.current) {
      observer.observe(historyRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id="history" ref={historyRef}>
      <div className="items-container">
        <div className="experience-section">

          {/* SECTION HEADER */}
          <div className="experience-header">
            <span className="experience-bg-title">
              EXPERIENCE
            </span>

            <h2>My Experience</h2>

            <p>My professional journey</p>
          </div>


          {/* EXPERIENCE CARDS */}
          <div className="experience-grid">


            {/* =====================================
                CHRISTUS HEALTH
            ====================================== */}

            <div className="experience-card">
              <div className="experience-card-inner">

                {/* FRONT */}
                <div className="experience-card-front">

                  <div className="experience-icon">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </div>

                  <span className="experience-date">
                    Dec 2024 — Present
                  </span>

                  <h3>
                    Full Stack Developer
                  </h3>

                  <h4>
                    Christus Health
                  </h4>

                  <div className="flip-hint">
                    View Project Details →
                  </div>

                </div>


                {/* BACK */}
                <div className="experience-card-back">

                  <span className="back-label">
                    CURRENT PROJECT
                  </span>

                  <h3>
                    Christus Health
                  </h3>

                  <h4>
                    Healthcare Contract Intelligence Platform
                  </h4>

                  <p>
                    Built a healthcare contract intelligence platform using
                    Python, FastAPI, React, AI-powered document processing,
                    and cloud technologies to automate contract management
                    and compliance tracking.
                  </p>

                  <div className="tech-tags">
                    <span>Python</span>
                    <span>FastAPI</span>
                    <span>React</span>
                    <span>Azure</span>
                    <span>AI</span>
                  </div>

                </div>

              </div>
            </div>



            {/* =====================================
                PILGRIM BANK
            ====================================== */}

            <div className="experience-card">
              <div className="experience-card-inner">

                {/* FRONT */}
                <div className="experience-card-front">

                  <div className="experience-icon">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </div>

                  <span className="experience-date">
                    Jan 2023 — Dec 2024
                  </span>

                  <h3>
                    Full Stack Developer
                  </h3>

                  <h4>
                    Pilgrim Bank
                  </h4>

                  <div className="flip-hint">
                    View Project Details →
                  </div>

                </div>


                {/* BACK */}
                <div className="experience-card-back">

                  <span className="back-label">
                    PROJECT EXPERIENCE
                  </span>

                  <h3>
                    Pilgrim Bank
                  </h3>

                  <h4>
                    Credit Risk & Regulatory Analytics Platform
                  </h4>

                  <p>
                    Developed a credit risk and regulatory analytics platform
                    using Python, FastAPI, Django, React, AWS, and PostgreSQL
                    to support financial risk and regulatory workflows.
                  </p>

                  <div className="tech-tags">
                    <span>Python</span>
                    <span>FastAPI</span>
                    <span>Django</span>
                    <span>React</span>
                    <span>AWS</span>
                    <span>PostgreSQL</span>
                  </div>

                </div>

              </div>
            </div>



            {/* =====================================
                DOTLABS
            ====================================== */}

            <div className="experience-card">
              <div className="experience-card-inner">

                {/* FRONT */}
                <div className="experience-card-front">

                  <div className="experience-icon">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </div>

                  <span className="experience-date">
                    Jun 2019 — Nov 2021
                  </span>

                  <h3>
                  Software Developer
                  </h3>

                  <h4>
                    DOTLABS
                  </h4>

                  <div className="flip-hint">
                    View Project Details →
                  </div>

                </div>


                {/* BACK */}
                <div className="experience-card-back">

                  <span className="back-label">
                    PROJECT EXPERIENCE
                  </span>

                  <h3>
                    DOTLABS
                  </h3>

                  <h4>
                    Digital Product & Web Solutions
                  </h4>

                  <p>
                    Developed responsive full-stack web applications using
                    React, JavaScript, Python, Node.js, REST APIs, and SQL
                    while working across frontend, backend, testing,
                    and deployment.
                  </p>

                  <div className="tech-tags">
                    <span>React</span>
                    <span>JavaScript</span>
                    <span>Node.js</span>
                    <span>Python</span>
                    <span>SQL</span>
                  </div>

                </div>

              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;