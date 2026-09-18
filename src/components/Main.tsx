import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import '../assets/styles/Main.scss';
import profileImg from "../assets/images/myprofile.jpg";

function Main() {
const trackClick = (eventName: string) => {
    window.gtag?.("event", eventName, {
      section_name: "Main",
    });
  };
  
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profileImg} alt="Raghava M" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Raghav-1303" target="_blank" rel="noreferrer"
             onClick={() => trackClick("github_click")}><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/raghava-m1001/" target="_blank" rel="noreferrer"
             onClick={() => trackClick("linkedin_click")}><LinkedInIcon/></a>
          </div>
          <h1>Raghava M</h1>
          <p>Full Stack Developer</p>

          <div className="resume-buttons">
      

            <Button
               variant="contained"
               startIcon={<DownloadIcon />}
               className="download-btn"
               href={process.env.PUBLIC_URL + "/RAGHAVA_FULL_STACK_DEVELOPER.pdf"}
               download="RAGHAVA_FULL_STACK_DEVELOPER.pdf"
                onClick={() => trackClick("github_click")}
               onMouseMove={(e) => {
               const rect = e.currentTarget.getBoundingClientRect();
               const x = e.clientX - rect.left;
               const y = e.clientY - rect.top;
              e.currentTarget.style.setProperty("--x", `${x}px`);
              e.currentTarget.style.setProperty("--y", `${y}px`);
    }}
              >
               
               Download Resume
             </Button>
          </div>

          <div className="mobile_social_icons">
            <a href="https://github.com/Raghav-1303" target="_blank" rel="noreferrer"
             onClick={() => trackClick("github_click")}><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/raghava-m1001/" target="_blank" rel="noreferrer"
             onClick={() => trackClick("linkedin_click")}><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;