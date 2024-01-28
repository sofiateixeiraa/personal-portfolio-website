// Footer.js

import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <p>&copy; {new Date().getFullYear()} Sofia Teixeira. All Rights Reserved.</p>
        </div>
        <div className="footer-section social-media">
          <a href="https://github.com/sofiateixeiraa" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/ana-sofia-teixeira" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div className="footer-section contact-info">
          <p>Email: st.sofiateixeira@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

