import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss';

function Footer() {

  const trackClick = (eventName: string) => {
    window.gtag?.("event", eventName, {
      section_name: "Footer",
    });
  };

  return (
    <footer>
      <div>

        {/* GitHub */}
        <a
          href="https://github.com/Raghav-1303"
          target="_blank"
          rel="noreferrer"
          onClick={() => trackClick("github_click")}
        >
          <GitHubIcon />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/raghava-m1001/"
          target="_blank"
          rel="noreferrer"
          onClick={() => trackClick("linkedin_click")}
        >
          <LinkedInIcon />
        </a>

      </div>

      <p>
        A portfolio designed & built by  Raghava M with 💜
        <a
          href="https://github.com/Raghav-1303/react-portfolio-template/"
          target="_blank"
          rel="noreferrer"
          onClick={() => trackClick("portfolio_github_click")}
        >
        </a>
      </p>

    </footer>
  );
}

export default Footer;