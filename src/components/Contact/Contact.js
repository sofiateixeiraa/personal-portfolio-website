import React, { Component } from 'react';
import './Contact.css'; 

import linkedInLogo from '../../assets/linkedin.png'; 
import gitHubLogo from '../../assets/github.png'; 

class ContactForm extends Component {

  componentDidMount() {
    // Load the HubSpot form script
    const script = document.createElement("script");
    script.src = "//js-eu1.hsforms.net/forms/embed/v2.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.hbspt) {
        // Create the form
        window.hbspt.forms.create({
          region: "eu1",
          portalId: "143993649",
          formId: "250d49c0-9d00-4b1d-96bb-f7dd46088d87",
          target: '#hubspotForm', // Target for embedding the form
          onFormReady: ($form, iframe) => {
            const iframeDocument = iframe.contentWindow.document;
            const styleElement = document.createElement("style");
            styleElement.innerHTML = `
              .hs-form label {
                color: #FF5733; /* Your desired color for the labels */
              }
              /* Add more custom styles if needed */
            `;
            iframeDocument.head.appendChild(styleElement);
          }
        });
      }
    };
  }

  render() {
    return (
      <div className="contact-form-section">
        <h2 className="contact-form-header">Send me an email, let's get in touch!</h2>
        <div id="hubspotForm">
          {/* The HubSpot form will be embedded here */}
        </div>
        <p className="contact-form-footer">or reach me on these platforms</p>
        <div className="contact-form-social-links">
          <a href="https://linkedin.com/in/ana-sofia-teixeira" target="_blank" rel="noopener noreferrer">
            <img src={linkedInLogo} alt="LinkedIn" className="social-logo" />
          </a>
          <a href="https://github.com/sofiateixeiraa" target="_blank" rel="noopener noreferrer">
            <img src={gitHubLogo} alt="GitHub" className="social-logo" />
          </a>
        </div>
      </div>
    );
  }
}

export default ContactForm;
