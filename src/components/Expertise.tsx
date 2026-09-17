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
    "Python",
    "FastAPI",
    "Django",
    "Rest API",
    "Microservices"
];

const labelsSecond = [
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Jenkins",
    "Git lab CI/CD",
    "Lambda",
    "Azure Key Vault"
    
];

const labelsThird = [
    "postgreSQL",
    "MySQL",
    "MongoDB",
    "DynamoDB",
    "Cosmos DB",
    "Apache Airflow",
    "Pandas",
    "pySpark",
    "OPenAi API",
    "Azure OpenAI API",
    "LLM",
    "PyTest"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Python Development</h3>
                    <p>I build scalable full-stack applications using Python, FastAPI, Django, React.js, Angular, and TypeScript,
                            developing responsive user interfaces and secure,
                            high-performance backend services.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Cloud, DevOps & Automation</h3>
                    <p> I design cloud-native applications and automate
                            deployments using AWS, Azure, Docker, Kubernetes,
                            Terraform, Jenkins, and CI/CD pipelines to deliver
                            reliable and scalable production systems.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Data Engineering & AI Integration</h3>
                    <p> I develop data-driven applications using SQL and
                            NoSQL databases, ETL pipelines, and AI-powered
                            services including OpenAI and Azure OpenAI for
                            intelligent document processing and automation.</p>
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