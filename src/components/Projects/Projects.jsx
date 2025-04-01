// src/components/Projects.jsx
import React from 'react';
import './Projects.css'; // Import the CSS file

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>

      <div className="project-row">
        <div className="project">
          <h3>YouTubeSentimentAI | <a href="https://github.com/Akashshelke07" target="_blank" rel="noopener noreferrer">GitHub</a></h3>
          <p className="tech-stack"><strong>Tech Stack:</strong> Node.js, Express.js, YouTube Data API, Hugging Face Transformers, Python</p>
          <p className="description">Implemented real-time sentiment analysis of YouTube comments using Hugging Face's Transformer model, categorizing them into positive, negative, or neutral sentiments. Engineered a scalable Node.js backend with Express.js, seamlessly integrating the YouTube Data API for efficient comment retrieval and processing. Developed a minimal yet functional frontend to display sentiment analysis results, ensuring a user-friendly experience.</p>
        </div>

        <div className="project">
          <h3>Travel Booking Web Application | <a href="https://github.com/Akashshelke07/Travel-Booking" target='_blank' rel='noopener noreferrer'>GitHub</a></h3>
          <p className="tech-stack"><strong>Tech Stack:</strong> MERN Stack, Tailwind, Cloudinary, RESTful APIs</p>
          <p className="description">Developed a full-stack travel booking web application using the MERN stack, ensuring a responsive and intuitive user experience. Integrated Cloudinary for efficient image storage and retrieval, enhancing media handling and application performance. Designed and implemented RESTful APIs for user authentication, booking management, and payment processing, thoroughly tested using Postman. Utilized Redux for state management, optimizing data flow and improving application efficiency. Managed version control on GitHub and followed CI/CD best practices to maintain code quality and streamline deployment.</p>
        </div>
      </div>

      <div className="project-row">
        <div className="project">
          <h3>BookSnap | <a href="https://github.com/Akashshelke07/Booksnap_web" target="_blank" rel="noopener noreferrer">GitHub</a></h3>
          <p className="tech-stack"><strong>Tech Stack:</strong> MERN Stack, Clerk Authentication, Tailwind CSS, Vercel</p>
          <p className="description">BookSnap is a web application designed to facilitate collaborative learning among engineering students. It provides a platform for students to efficiently organize, share, and access lecture notes, textbook summaries, key concepts, and other essential study materials.</p>
        </div>

        <div className="project">
          <h3>YouTube Clone | <a href="https://github.com/Akashshelke07/customize-youtube-clone" target="_blank" rel="noopener noreferrer">GitHub</a></h3>
          <p className="tech-stack"><strong>Tech Stack:</strong> React, YouTube API, Material UI, React Router</p>
          <p className="description">Developed a YouTube clone application utilizing the YouTube API to fetch and display video content. Implemented Material UI components for a visually appealing and user-friendly interface. Utilized React Router for seamless navigation between different sections of the application.</p>
        </div>
      </div>

      <div className="project-row">
        <div className="project">
          <h3>SiteGuide | <a href="https://github.com/Akashshelke07/SiteGuide" target="_blank" rel="noopener noreferrer">GitHub</a></h3>
          <p className="tech-stack"><strong>Tech Stack:</strong> HTML, CSS, JavaScript, Flask, LLMs, AI Agents, Gemini, Groq, Whisper, Browser Use, Pydantic</p>
          <p className="description">SiteGuide is a browser navigation tool aimed at simplifying web navigation for users who may be technologically challenged. By utilizing an intuitive chatbot interface, SiteGuide allows users to describe the actions they need to perform on a website, and an AI Agent will guide them around the browser while performing the task on their behalf.</p>
        </div>

        <div className="project">
          <h3>C IDE | <a href="https://github.com/Akashshelke07/codement24" target="_blank" rel="noopener noreferrer">GitHub</a></h3>
          <p className="tech-stack"><strong>Tech Stack:</strong> Animations, Data Structures and Algorithms Guide, AI guidance to solve DSA, Node and Express, Gemini API Key, Code Mirror Labs for code editor</p>
          <p className="description">This project provides animations, a data structures and algorithms guide, and AI guidance to help solve DSA problems. It utilizes Node and Express, the Gemini API key, and Code Mirror Labs for the code editor.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;