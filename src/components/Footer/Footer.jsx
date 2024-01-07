
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
     <p>Connect with me:</p>
      <div className="social-links">
        <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://www.example.com/your-other-platform" target="_blank" rel="noopener noreferrer">
          Other Platform
        </a>
      </div>
    </footer>
  );
};

export default Footer;
