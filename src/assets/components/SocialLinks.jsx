// Social Links component
import React from "react";
import linkedIn from "../linkedin.svg";
import github from "../github.svg";

function SocialLinks() { 
    return (
    <div className="social-links">
        <a
        href="https://www.linkedin.com/in/courtney-graham918/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkIn Profile"
        >
            <img src={linkedIn} alt="LinkedIn" />
        </a>
        <a
        href="https://github.com/grahacr/atlas-react-and-jsx"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github Profile"
        >
            <img src={github} />
        </a>
        </div>
        );
    }
export default SocialLinks;