import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './About.css';
import portoLogo from '../../assets/uporto.png';
import padovaLogo from '../../assets/upadua.png'; 

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsVisible(true);
    const hash = location.hash;
    if (hash && hash === "#skills") {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        skillsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className={`about-container ${isVisible ? 'about-container-active' : ''}`}>
      <p className="about-intro">
        Hi there! I'm Sofia, a caffeine-fueled, pasta-appreciating Electrical Engineer. I'm currently unraveling the mysteries of cloud world while diving into a PhD.
      </p>
      
      <div className="about-content">
        <div className="education-column">
          <h3>Education</h3>
          <div className="timeline-entry">
            <div className="date">Sep 2023 - Present</div>
            <div className="description">PhD in Informatics Engineering, University of Porto</div>
            <img src={portoLogo} alt="University of Porto" className="institution-logo" />
          </div>
          <div className="timeline-entry">
            <div className="date">Sep 2022 - Mar 2023</div>
            <div className="description">Exchange Semester, Università degli Studi di Padova</div>
            <img src={padovaLogo} alt="Università degli Studi di Padova" className="institution-logo" />
          </div>
          <div className="timeline-entry">
            <div className="date">Sep 2021 - Jul 2023</div>
            <div className="description">Master in Electrical and Computers Engineering, University of Porto</div>
            <img src={portoLogo} alt="University of Porto" className="institution-logo" />
          </div>
        </div>

        <div className="experience-column">
          <h3>Professional Experience</h3>
          <div className="timeline-entry">
            <div className="date">Jul 2023 - Present</div>
            <div className="description">Cloud Support Analyst @ SER Group </div>
          </div>
          <div className="timeline-entry">
            <div className="date">Oct 2023 - Present</div>
            <div className="description">Invited Teaching Assistant @ Porto Accounting & Business School</div>
          </div>
          <div className="timeline-entry">
            <div className="date">Nov 2022 - Mar 2023</div>
            <div className="description">Junior DevOps @ Daltrey</div>
          </div>
          <div className="timeline-entry">
            <div className="date">May 2022 - Nov 2022</div>
            <div className="description">Cloud Support Engineer @ Ada Health</div>
          </div>
        </div>
      </div>
      <section className="skills-section">
  <h2 className="section-title">Skills</h2>
  <div className="skills-content" id="skills">
    <div className="skill-category">
      <h3>Languages</h3>
      <ul>
        <li>Portuguese: Native Speaker</li>
        <li>English: C1 (CAE)</li>
        <li>French: B1 (DELF)</li>
        <li>German: A1</li>
      </ul>
    </div>
    <div className="skill-category">
      <h3>Programming Languages</h3>
      <ul>
        <li>Python, C++, C</li>
        <li>JavaScript, SQL, JAVA</li>
      </ul>
    </div>
    <div className="skill-category">
      <h3>Technology</h3>
      <ul>
        <li>Git, HTML, CSS, ReactJS</li>
        <li>AWS, GCP, Kubernetes, Terraform</li>
        <li>Docker, ArgoCD, MongoDB, MySQL</li>
      </ul>
    </div>
  </div>
</section>

    </div>
    
  );
}

export default About;
