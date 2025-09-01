// src/components/Projects.jsx
import React from 'react';
import './Projects.css';
import Card from '../Card/Card.jsx';

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="section-title">Projects</h2>

      <div className="project-row">
        <Card title="">
          <div className="project-item">
            <div className="project-header">
              <h4>Personal AI Research Assistant (Local) | <a href="https://github.com/Akashshelke07/personal-ai-research-assistant" target="_blank" rel="noopener noreferrer">GitHub</a></h4>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">FastAPI</span>
                <span className="tech-tag">LangChain</span>
                <span className="tech-tag">ChromaDB</span>
                <span className="tech-tag">PyTorch</span>
                <span className="tech-tag">Hugging Face</span>
              </div>
            </div>
            <ul className="project-details">
              <li>A 100% local, privacy-focused AI research assistant that can answer questions about your own documents using a Retrieval-Augmented Generation (RAG) pipeline.</li>
              <li>Features document ingestion for PDF/Markdown/Text files, local AI inference with no cloud dependencies, and simple web interface with text-to-speech capabilities.</li>
              <li>Completely private processing where data never leaves your computer, ensuring maximum security and privacy.</li>
            </ul>
          </div>
        </Card>

        <Card title="">
          <div className="project-item">
            <div className="project-header">
              <h4>MCP Demo Server | <a href="https://github.com/Akashshelke07" target="_blank" rel="noopener noreferrer">GitHub</a></h4>
              <div className="project-tech">
                <span className="tech-tag">Model Context Protocol</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Modular Architecture</span>
                <span className="tech-tag">API Integration</span>
              </div>
            </div>
            <ul className="project-details">
              <li>A complete Model Context Protocol (MCP) demo server that is modular, extensible, and ready to be used as a local development reference.</li>
              <li>Features mock implementations and examples for tools and resources, designed with scalable architecture for real-world integration.</li>
              <li>Foundation for production builds with comprehensive documentation and development best practices.</li>
            </ul>
          </div>
        </Card>
      </div>

      <div className="project-row">
        <Card title="">
          <div className="project-item">
            <div className="project-header">
              <h4>YouTubeSentimentAI | <a href="https://github.com/Akashshelke07" target="_blank" rel="noopener noreferrer">GitHub</a></h4>
              <div className="project-tech">
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Express.js</span>
                <span className="tech-tag">YouTube Data API</span>
                <span className="tech-tag">Hugging Face</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">NLP</span>
              </div>
            </div>
            <ul className="project-details">
              <li>Implemented real-time sentiment analysis of YouTube comments using Hugging Face's Transformer model, categorizing them into positive, negative, or neutral sentiments.</li>
              <li>Engineered a scalable Node.js backend with Express.js, seamlessly integrating the YouTube Data API for efficient comment retrieval and processing.</li>
              <li>Developed a minimal yet functional frontend to display sentiment analysis results, ensuring a user-friendly experience.</li>
            </ul>
          </div>
        </Card>

        <Card title="">
          <div className="project-item">
            <div className="project-header">
              <h4>Travel Booking Web Application | <a href="https://github.com/Akashshelke07/Travel-Booking" target="_blank" rel="noopener noreferrer">GitHub</a></h4>
              <div className="project-tech">
                <span className="tech-tag">MERN Stack</span>
                <span className="tech-tag">Tailwind CSS</span>
                <span className="tech-tag">Cloudinary</span>
                <span className="tech-tag">RESTful APIs</span>
                <span className="tech-tag">Redux</span>
              </div>
            </div>
            <ul className="project-details">
              <li>Developed a full-stack travel booking web application using the MERN stack, ensuring a responsive and intuitive user experience.</li>
              <li>Integrated Cloudinary for efficient image storage and retrieval, enhancing media handling and application performance.</li>
              <li>Designed and implemented RESTful APIs for user authentication, booking management, and payment processing, thoroughly tested using Postman.</li>
            </ul>
          </div>
        </Card>
      </div>

      <div className="project-row">
        <Card title="">
          <div className="project-item">
            <div className="project-header">
              <h4>BookSnap | <a href="https://github.com/Akashshelke07/Booksnap_web" target="_blank" rel="noopener noreferrer">GitHub</a></h4>
              <div className="project-tech">
                <span className="tech-tag">MERN Stack</span>
                <span className="tech-tag">Clerk Auth</span>
                <span className="tech-tag">Tailwind CSS</span>
                <span className="tech-tag">Vercel</span>
              </div>
            </div>
            <ul className="project-details">
              <li>BookSnap is a web application designed to facilitate collaborative learning among engineering students.</li>
              <li>Provides a platform for students to efficiently organize, share, and access lecture notes, textbook summaries, and key concepts.</li>
              <li>Built with modern web technologies ensuring scalable and maintainable codebase for team collaboration.</li>
            </ul>
          </div>
        </Card>

        <Card title="">
          <div className="project-item">
            <div className="project-header">
              <h4>YouTube Clone | <a href="https://github.com/Akashshelke07/customize-youtube-clone" target="_blank" rel="noopener noreferrer">GitHub</a></h4>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">YouTube API</span>
                <span className="tech-tag">Material UI</span>
                <span className="tech-tag">React Router</span>
              </div>
            </div>
            <ul className="project-details">
              <li>Developed a YouTube clone application utilizing the YouTube API to fetch and display video content.</li>
              <li>Implemented Material UI components for a visually appealing and user-friendly interface.</li>
              <li>Utilized React Router for seamless navigation between different sections of the application.</li>
            </ul>
          </div>
        </Card>
      </div>

      <div className="project-row">
        <Card title="">
          <div className="project-item">
            <div className="project-header">
              <h4>SiteGuide | <a href="https://github.com/Akashshelke07/SiteGuide" target="_blank" rel="noopener noreferrer">GitHub</a></h4>
              <div className="project-tech">
                <span className="tech-tag">Flask</span>
                <span className="tech-tag">AI Agents</span>
                <span className="tech-tag">Gemini</span>
                <span className="tech-tag">Groq</span>
                <span className="tech-tag">Whisper</span>
                <span className="tech-tag">LLMs</span>
              </div>
            </div>
            <ul className="project-details">
              <li>SiteGuide is a browser navigation tool aimed at simplifying web navigation for users who may be technologically challenged.</li>
              <li>Utilizes an intuitive chatbot interface, allowing users to describe the actions they need to perform on a website.</li>
              <li>AI Agent guides users around the browser while performing tasks on their behalf, enhancing accessibility and user experience.</li>
            </ul>
          </div>
        </Card>

        <Card title="">
          <div className="project-item">
            <div className="project-header">
              <h4>C IDE | <a href="https://github.com/Akashshelke07/codement24" target="_blank" rel="noopener noreferrer">GitHub</a></h4>
              <div className="project-tech">
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Express</span>
                <span className="tech-tag">Gemini API</span>
                <span className="tech-tag">Code Mirror</span>
                <span className="tech-tag">AI Guidance</span>
                <span className="tech-tag">DSA</span>
              </div>
            </div>
            <ul className="project-details">
              <li>Provides animations, data structures and algorithms guide, and AI guidance to help solve DSA problems.</li>
              <li>Utilizes Node.js and Express for backend functionality with Gemini API integration for intelligent assistance.</li>
              <li>Features Code Mirror Labs for advanced code editing capabilities with syntax highlighting and intelligent suggestions.</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Projects;