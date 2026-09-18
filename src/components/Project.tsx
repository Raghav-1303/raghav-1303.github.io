import React, { useEffect, useRef } from "react";
import angularmovie from '../assets/images/angularmovie.png';
import doctor from '../assets/images/doctor.png';
import commerce from '../assets/images/commerce.png';
import housing from '../assets/images/housing.png';
import '../assets/styles/Project.scss';

function Project() {
      const projectsRef = useRef<HTMLDivElement>(null);

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
            {
                threshold: 0.5,
            }
        );

        if (projectsRef.current) {
            observer.observe(projectsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const trackProjectClick = (projectName: string) => {
        window.gtag?.("event", "project_click", {
            project_name: projectName,
        });
    };

    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Raghav-1303/HomeGuard.git" target="_blank" rel="noreferrer"
                onClick={() => trackProjectClick("HouseGuard")}><img src={housing} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Raghav-1303/HomeGuard.git" target="_blank" rel="noreferrer"
                onClick={() => trackProjectClick("HouseGuard")}><h2>HouseGuard</h2></a>
                <p>A comprehensive platform designed to help renters and homebuyers navigate housing challenges through affordability tools, 
                    tenant rights guidance, property search features, and community support.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Raghav-1303/Angular_movie-App.git" target="_blank" rel="noreferrer"
                onClick={() => trackProjectClick("Movie-App")}><img src={angularmovie} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Raghav-1303/Angular_movie-App.git" target="_blank" rel="noreferrer"
                onClick={() => trackProjectClick("Movie-App")}><h2>Movie-App</h2></a>
                <p>A responsive Angular-based movie exploration platform with secure login and a dynamic home page showcasing trending, popular, and top-rated movies. 
                   Users can browse movie details such as title, genre, rating, description, and posters in a clean, user-friendly interface, built using Angular, TypeScript, and REST API integration.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Raghav-1303/doctor-appointment.git" target="_blank" rel="noreferrer"
                onClick={() => trackProjectClick("Doctor Appointment Scheduler")}><img src={doctor} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Raghav-1303/doctor-appointment.git" target="_blank" rel="noreferrer"
                onClick={() => trackProjectClick("Doctor Appointment Scheduler")}><h2>Doctor Appointment Scheduler</h2></a>
                <p>A modern, responsive Doctor Appointment Scheduling web application where users can browse doctors, view profiles, and book appointments easily.
                   Built with HTML, CSS, and JavaScript, using localStorage for data persistence.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Raghav-1303/E-Commerce-Website.git" target="_blank" rel="noreferrer"
                onClick={() => trackProjectClick("E-Commerce-Website")}><img src={commerce} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Raghav-1303/E-Commerce-Website.git" target="_blank" rel="noreferrer"
                onClick={() => trackProjectClick("E-Commerce-Website")} ><h2>E-Commerce-Website</h2></a>
                <p>Built with React and Redux, this application allows users to browse products, manage a shopping cart, and complete payments using PayPal integration.</p>
            </div>
             
        </div>
    </div>
    );
}

export default Project;