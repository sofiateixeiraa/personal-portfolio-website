import React from 'react';
import './About.css';
import portoLogo from '../../assets/uporto.png';
import padovaLogo from '../../assets/upadua.png';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-section education">
        <h2>Education</h2>
        <div className="about-entry">
          <h3>PhD in Informatics Engineering</h3>
          <div className="entry-details">
            <img src={portoLogo} alt="University of Porto" className="institution-logo" />
            <p>University of Porto</p>
          </div>
          <div className="entry-date">Sep 2023 - Present</div>
        </div>
        <div className="about-entry">
          <h3>Exchange Semester</h3>
          <div className="entry-details">
            <img src={padovaLogo} alt="Università degli Studi di Padova" className="institution-logo" />
            <p>Università degli Studi di Padova</p>
          </div>
          <div className="entry-date">Sep 2022 - Mar 2023</div>
        </div>
        <div className="about-entry">
          <h3>Master in Electrical and Computers Engineering</h3>
          <div className="entry-details">
            <img src={portoLogo} alt="University of Porto" className="institution-logo" />
            <p>University of Porto</p>
          </div>
          <div className="entry-date">Sep 2021 - Jul 2023</div>
        </div>
      </div>

      <div className="about-section experience">
        <h2>Professional Experience</h2>
        <div className="about-entry">
          <h3>Cloud Support Analyst @ SER Group</h3>
          <div className="entry-date">Jul 2023 - Present</div>
        </div>
        <div className="about-entry">
          <h3>Invited Teaching Assistant @ Porto Accounting & Business School</h3>
          <div className="entry-date">Oct 2023 - Present</div>
        </div>
        <div className="about-entry">
          <h3>Junior DevOps @ Daltrey</h3>
          <div className="entry-date">Nov 2022 - Mar 2023</div>
        </div>
        <div className="about-entry">
          <h3>Cloud Support Engineer @ Ada Health</h3>
          <div className="entry-date">May 2022 - Nov 2022</div>
        </div>
      </div>

      <div className="about-section skills">
        <h2>Skills</h2>
        <div className="skills-content">
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
      </div>
    </div>
  );
};

export default About;
