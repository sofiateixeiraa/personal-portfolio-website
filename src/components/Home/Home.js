import React, { useEffect } from 'react';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import linkedInLogo from '../../assets/linkedin.png'; 
import gitHubLogo from '../../assets/github.png'; 

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true }); 
  }, []);

  return (
    <section id="home" className="home-section">
      <div className="home-content" data-aos="fade-up">
        <h1>Hey, I'm Sofia Teixeira 👋</h1>
        <p>Cloud enthusiast | Electrical and Computer Engineer | PhD Engineering Student</p>
        <div className="home-buttons">
          <a href="/about" className="btn-primary" data-aos="fade-up" data-aos-delay="300">Discover My Work</a>
          <a href="/contact" className="btn-primary" data-aos="fade-up" data-aos-delay="300">Contact Me</a>
        </div>
        <div className="social-media-links">
          <a href="https://linkedin.com/in/ana-sofia-teixeira" target="_blank" rel="noopener noreferrer">
            <img src={linkedInLogo} alt="LinkedIn" className="social-logo" />
          </a>
          <a href="https://github.com/sofiateixeiraa" target="_blank" rel="noopener noreferrer">
            <img src={gitHubLogo} alt="GitHub" className="social-logo" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
