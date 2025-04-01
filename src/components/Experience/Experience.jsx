// src/components/Experience.jsx
import React from 'react';
import './Experience.css'; // Import the CSS file
import scaleFullLogo from './scalefull__logo.png'; // Import the logo

const Experience = () => {
  return (
    <div className="experience-details">
      <div className="experience-header">
        <img src={scaleFullLogo} alt="ScaleFull Logo" className="company-logo" />
        <div className="experience-title">
          <h4>ScaleFull Technologies LLP | Intern Software Engineer </h4>
          <p className="experience-dates">Dec 2024 - Feb 2025 | 
Wakad, Pune</p>
        </div>
      </div>
      <ul>
        <li>Developed a full-stack travel booking web application using the MERN stack, ensuring a responsive and intuitive user experience.</li>
        <li>Integrated Cloudinary for efficient image storage and retrieval, enhancing media handling and application performance.</li>
        <li>Designed and implemented RESTful APIs for user authentication, booking management, and payment processing, thoroughly tested using Postman.</li>
        <li>Utilized Redux for state management, optimizing data flow and improving application efficiency.</li>
        <li>Managed version control on GitHub and followed CI/CD best practices to maintain code quality and streamline deployment.</li>
      </ul>
    </div>
  );
};

export default Experience;