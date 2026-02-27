import React from "react";
import angularmovie from '../assets/images/angularmovie.png';
import react from '../assets/images/react.png';
import doctor from '../assets/images/doctor.png';
import commerce from '../assets/images/commerce.png';
import real from '../assets/images/real.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Raghav-1303/real-estate-management-app.git" target="_blank" rel="noreferrer"><img src={real} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Raghav-1303/real-estate-management-app.git" target="_blank" rel="noreferrer"><h2>Real estate Management</h2></a>
                <p>A web and mobile property management solution built with Ionic, Angular, and Node.js (Fastify). 
                    The platform enables users to explore residential, commercial, and land properties through an interactive map and send inquiries directly to property owners.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Raghav-1303/E-Commerce-Website.git" target="_blank" rel="noreferrer"><img src={commerce} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Raghav-1303/E-Commerce-Website.git" target="_blank" rel="noreferrer"><h2>E-Commerce-Website</h2></a>
                <p>Built with React and Redux, this application allows users to browse products, manage a shopping cart, and complete payments using PayPal integration.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Raghav-1303/doctor-appointment.git" target="_blank" rel="noreferrer"><img src={doctor} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Raghav-1303/doctor-appointment.git" target="_blank" rel="noreferrer"><h2>Doctor Appointment Scheduler</h2></a>
                <p>A modern, responsive Doctor Appointment Scheduling web application where users can browse doctors, view profiles, and book appointments easily.
                   Built with HTML, CSS, and JavaScript, using localStorage for data persistence.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Raghav-1303/react-flow.git" target="_blank" rel="noreferrer"><img src={react} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Raghav-1303/react-flow.git" target="_blank" rel="noreferrer"><h2>React Flow</h2></a>
                <p>A foundational React application built using Create React App, demonstrating functional components, JSX, modular styling, and basic UI rendering.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Raghav-1303/Angular_movie-App.git" target="_blank" rel="noreferrer"><img src={angularmovie} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Raghav-1303/Angular_movie-App.git" target="_blank" rel="noreferrer"><h2>Movie App</h2></a>
                <p>A responsive Angular-based movie exploration platform with secure login and a dynamic home page showcasing trending, popular, and top-rated movies. 
                   Users can browse movie details such as title, genre, rating, description, and posters in a clean, user-friendly interface, built using Angular, TypeScript, and REST API integration.</p>
            </div>
             
        </div>
    </div>
    );
}

export default Project;