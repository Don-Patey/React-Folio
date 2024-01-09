// Portfolio.js
import React from 'react';
import './Portfolio.css';
import project1 from '../../assets/weathermusic.png';
import project2 from '../../assets/jscodequiz.png';
import project3 from '../../assets/portfolio.png';
import project5 from '../../assets/passwordgen.png';


const projects = [
  {
    title: 'Weathermusic: Spotify Playlist Generator',
    image: project1,
    deployedLink: 'https://magicianjoshua.github.io/weatherMusic/',
    githubRepo: 'https://github.com/MagicianJoshua/weatherMusic',
  },
  {
    title: 'JavaScript Code Quiz',
    image: project2, 
    deployedLink: 'https://github.com/Don-Patey/js-code-quiz',
    githubRepo: 'https://don-patey.github.io/js-code-quiz/',
  },

  {
    title: 'First Portfolio',
    image: project3, 
    deployedLink: 'https://don-patey.github.io/Don-Patey-Portfolio/',
    githubRepo: 'https://github.com/Don-Patey/Don-Patey-Portfolio',
  },
  
  {
    title: 'Password Generator',
    image: project5, 
    deployedLink: 'https://don-patey.github.io/password-generator/',
    githubRepo: 'https://github.com/Don-Patey/password-generator'
  }
];

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <h2>Portfolio</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <img src={project.image} alt={`Screenshot of ${project.title}`} />
            <h3>{project.title}</h3>
            <div className="project-links">
              <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                Deployed App
              </a>
              <a href={project.githubRepo} target="_blank" rel="noopener noreferrer">
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
