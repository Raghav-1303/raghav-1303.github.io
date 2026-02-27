import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "React",
    "Angular",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    ".NET Core",
    "ASP.NET Web API",
    "Node.js"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "Jenkins",
    
];

const labelsThird = [
    "SQL Server",
    "Oracle",
    "MongoDB",
    "Redis"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I build scalable, high-performance web applications using .NET Core, ASP.NET Web API, and Node.js for backend services, combined with Angular and React to deliver responsive, modern user experiences.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>I implement CI/CD pipelines, containerized deployments, and cloud infrastructure using Docker, Kubernetes, Azure DevOps, Jenkins, and AWS to ensure scalable, reliable, and automated application delivery.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Database Management & Data Engineering</h3>
                    <p>Experienced in designing, managing, and optimizing relational and NoSQL databases including SQL Server, Oracle, MySQL, MongoDB, and Redis to ensure data integrity, performance, and scalability.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;