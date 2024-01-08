import React from 'react';
import myPhoto from '../../assets/zesty-zoro.jpg';
import './AboutMe.css'; 

const AboutMe = () => {
  return (
    <section className="about-me-section">
      <div className="text-content">
        <h2>About Me</h2>
        <p>
          Hi, I'm Donald Patey. With a background in business, I've spent most of my adult life working in financial and investment sectors. However, my curiosity and passion for problem-solving led me to the world of coding.
        </p>
        <p>
          Outside of coding, you can find me embracing the challenges of CrossFit to stay active and healthy. My life is enriched by the presence of two adorable dogs - a Pomeranian and a Toy AussieDoodle. I cherish spending time outdoors, whether it's hiking, camping, or simply enjoying nature.
        </p>
      </div>
      <img className="profile-photo" src={myPhoto} alt="cute photo of my dog Levi" />
    </section>
  );
};

export default AboutMe;

