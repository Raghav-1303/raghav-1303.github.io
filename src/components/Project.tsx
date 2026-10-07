
import React, { useEffect, useRef, useState } from "react";

import angularmovie from "../assets/images/angularmovie.png";
import doctor from "../assets/images/doctor.png";
import commerce from "../assets/images/commerce.png";
import housing from "../assets/images/housing.png";
import meetiq from "../assets/images/meetiq.png";

import "../assets/styles/Project.scss";

type ProjectItem = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  github: string;
  technologies: string[];
  featured?: boolean;
};

const projects: ProjectItem[] = [
  {
    title: "MeetIQ AI",
    subtitle: "Intelligent Meeting Insights Platform",
    description:
      "AI-powered meeting assistant that converts recorded or uploaded audio into transcripts, intelligent summaries, and structured action items using FastAPI, Whisper, BART, and JavaScript.",
    image: meetiq,
    github: "https://github.com/Raghav-1303/meetiq-ai",
    technologies: [
      "Python",
      "FastAPI",
      "Whisper",
      "BART",
      "JavaScript",
      "Docker",
    ],
    featured: true,
  },
  {
    title: "HouseGuard",
    subtitle: "Smart Housing Assistance Platform",
    description:
      "A comprehensive platform designed to help renters and homebuyers navigate housing challenges through affordability tools, tenant rights guidance, property search features, and community support.",
    image: housing,
    github: "https://github.com/Raghav-1303/HomeGuard.git",
    technologies: [
      "Web Development",
      "Housing Tools",
      "Responsive UI",
    ],
  },
  {
    title: "Movie App",
    subtitle: "Angular Movie Discovery Application",
    description:
      "A responsive Angular movie exploration platform featuring secure login and dynamic movie listings. Users can explore trending, popular, and top-rated movies and view details including genre, ratings, descriptions, and posters.",
    image: angularmovie,
    github: "https://github.com/Raghav-1303/Angular_movie-App.git",
    technologies: [
      "Angular",
      "TypeScript",
      "REST API",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Doctor Appointment Scheduler",
    subtitle: "Online Healthcare Booking Application",
    description:
      "A responsive doctor appointment scheduling application that allows users to browse doctors, view their profiles, and book appointments. Uses localStorage for client-side data persistence.",
    image: doctor,
    github: "https://github.com/Raghav-1303/doctor-appointment.git",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "localStorage",
    ],
  },
  {
    title: "E-Commerce Website",
    subtitle: "React Online Shopping Application",
    description:
      "An e-commerce application that allows users to browse products, manage a shopping cart, and complete payments through PayPal integration.",
    image: commerce,
    github: "https://github.com/Raghav-1303/E-Commerce-Website.git",
    technologies: [
      "React",
      "Redux",
      "JavaScript",
      "PayPal",
    ],
  },
];

function Project() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.gtag?.("event", "view_projects", {
            section_name: "Projects",
          });

          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const element = projectsRef.current;

    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const trackProjectClick = (projectName: string) => {
    window.gtag?.("event", "project_click", {
      project_name: projectName,
    });
  };

  const toggleFlip = (index: number) => {
    setFlippedCards((previous) =>
      previous.includes(index)
        ? previous.filter((item) => item !== index)
        : [...previous, index]
    );
  };

  return (
    <div
      className="projects-container"
      id="projects"
      ref={projectsRef}
    >
      <h1>Personal Projects</h1>

      <div className="projects-grid">
        {projects.map((project, index) => {
          const isFlipped = flippedCards.includes(index);

          return (
            <div
              className={`project project-flip-card ${
                isFlipped ? "is-flipped" : ""
              }`}
              key={project.title}
            >
              <div className="project-flip-inner">

                {/* FRONT */}
                <div className="project-flip-front">
                  <div className="project-image-area">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="project-flip-image"
                    />
                  </div>

                  <div className="project-front-content">
                    <span className="project-category">
                      {project.featured
                        ? "FEATURED • AI PROJECT"
                        : project.title === "HouseGuard"
                        ? "FULL STACK PROJECT"
                        : project.title === "Movie App"
                        ? "ANGULAR PROJECT"
                        : project.title === "Doctor Appointment Scheduler"
                        ? "WEB APPLICATION"
                        : "REACT PROJECT"}
                    </span>

                    <h2>{project.title}</h2>

                    <p>{project.subtitle}</p>

                    <button
                      type="button"
                      className="project-flip-button"
                      onClick={() => toggleFlip(index)}
                      aria-label={`View ${project.title} details`}
                    >
                      View Details ↗
                    </button>
                  </div>
                </div>

                {/* BACK */}
                <div className="project-flip-back">
                  <span className="project-category">
                    PROJECT DETAILS
                  </span>

                  <h2>{project.title}</h2>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-tech-tags">
                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="project-back-actions">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-github-link"
                      onClick={() =>
                        trackProjectClick(project.title)
                      }
                    >
                      View on GitHub ↗
                    </a>

                    <button
                      type="button"
                      className="project-back-button"
                      onClick={() => toggleFlip(index)}
                      aria-label={`Return to ${project.title} screenshot`}
                    >
                      ↶ Back
                    </button>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
