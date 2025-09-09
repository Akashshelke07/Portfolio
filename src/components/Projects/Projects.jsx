// src/components/Projects.jsx
import React, { useState } from 'react';
import './Projects.css';
import Card from '../Card/Card.jsx';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const projectsData = [
    {
      id: 1,
      title: "ResearchMind",
      github: "https://github.com/Akashshelke07/ResearchMind",
      liveDemo: null,
      category: "ai-ml",
      featured: true,
      technologies: ["Google Gemini AI", "PDF/DOCX Analysis", "Plagiarism Detection", "NLP", "Analytics"],
      description: [
        "ResearchMind is a comprehensive academic research assistant that leverages advanced AI to help researchers, students, and academics write better papers.",
        "Supports document analysis (PDF/DOCX), built-in plagiarism detection with citation suggestions, and grammar/style recommendations.",
        "Includes real-time AI chat assistant, voice input for natural interaction, and analytics to track writing progress.",
        "Free tier available with 50 AI requests per month."
      ]
    },
    {
      id: 2,
      title: "Personal AI Research Assistant (Local)",
      github: "https://github.com/Akashshelke07/personal-ai-research-assistant",
      liveDemo: null,
      category: "ai-ml",
      featured: true,
      technologies: ["Python", "FastAPI", "LangChain", "ChromaDB", "PyTorch", "Hugging Face"],
      description: [
        "A 100% local, privacy-focused AI research assistant that can answer questions about your own documents using a Retrieval-Augmented Generation (RAG) pipeline.",
        "Features document ingestion for PDF/Markdown/Text files, local AI inference with no cloud dependencies, and simple web interface with text-to-speech capabilities.",
        "Completely private processing where data never leaves your computer, ensuring maximum security and privacy."
      ]
    },
    {
      id: 3,
      title: "MCP Demo Server",
      github: "https://github.com/Akashshelke07/mcp-demo-server",
      liveDemo: null,
      category: "backend",
      featured: true,
      technologies: ["Model Context Protocol", "Node.js", "Modular Architecture", "API Integration"],
      description: [
        "A complete Model Context Protocol (MCP) demo server that is modular, extensible, and ready to be used as a local development reference.",
        "Features mock implementations and examples for tools and resources, designed with scalable architecture for real-world integration.",
        "Foundation for production builds with comprehensive documentation and development best practices."
      ]
    },
    {
      id: 4,
      title: "YouTubeSentimentAI",
      github: "https://github.com/Akashshelke07/YouTubeSentimentAI",
      liveDemo: null,
      category: "ai-ml",
      featured: false,
      technologies: ["Node.js", "Express.js", "YouTube Data API", "Hugging Face", "Python", "NLP"],
      description: [
        "Implemented real-time sentiment analysis of YouTube comments using Hugging Face's Transformer model, categorizing them into positive, negative, or neutral sentiments.",
        "Engineered a scalable Node.js backend with Express.js, seamlessly integrating the YouTube Data API for efficient comment retrieval and processing.",
        "Developed a minimal yet functional frontend to display sentiment analysis results, ensuring a user-friendly experience."
      ]
    },
    {
      id: 5,
      title: "Travel Booking Web Application",
      github: "https://github.com/Akashshelke07/Travel-Booking",
      liveDemo: null,
      category: "fullstack",
      featured: false,
      technologies: ["MERN Stack", "Tailwind CSS", "Cloudinary", "RESTful APIs", "Redux"],
      description: [
        "Developed a full-stack travel booking web application using the MERN stack, ensuring a responsive and intuitive user experience.",
        "Integrated Cloudinary for efficient image storage and retrieval, enhancing media handling and application performance.",
        "Designed and implemented RESTful APIs for user authentication, booking management, and payment processing, thoroughly tested using Postman."
      ]
    },
    {
      id: 6,
      title: "BookSnap",
      github: "https://github.com/Akashshelke07/Booksnap_web",
      liveDemo: null,
      category: "fullstack",
      featured: false,
      technologies: ["MERN Stack", "Clerk Auth", "Tailwind CSS", "Vercel"],
      description: [
        "BookSnap is a web application designed to facilitate collaborative learning among engineering students.",
        "Provides a platform for students to efficiently organize, share, and access lecture notes, textbook summaries, and key concepts.",
        "Built with modern web technologies ensuring scalable and maintainable codebase for team collaboration."
      ]
    },
    {
      id: 7,
      title: "YouTube Clone",
      github: "https://github.com/Akashshelke07/customize-youtube-clone",
      liveDemo: null,
      category: "frontend",
      featured: false,
      technologies: ["React", "YouTube API", "Material UI", "React Router"],
      description: [
        "Developed a YouTube clone application utilizing the YouTube API to fetch and display video content.",
        "Implemented Material UI components for a visually appealing and user-friendly interface.",
        "Utilized React Router for seamless navigation between different sections of the application."
      ]
    },
    {
      id: 8,
      title: "SiteGuide",
      github: "https://github.com/Akashshelke07/SiteGuide",
      liveDemo: null,
      category: "ai-ml",
      featured: false,
      technologies: ["Flask", "AI Agents", "Gemini", "Groq", "Whisper", "LLMs"],
      description: [
        "SiteGuide is a browser navigation tool aimed at simplifying web navigation for users who may be technologically challenged.",
        "Utilizes an intuitive chatbot interface, allowing users to describe the actions they need to perform on a website.",
        "AI Agent guides users around the browser while performing tasks on their behalf, enhancing accessibility and user experience."
      ]
    },
    {
      id: 9,
      title: "C IDE",
      github: "https://github.com/Akashshelke07/codement24",
      liveDemo: null,
      category: "tools",
      featured: false,
      technologies: ["Node.js", "Express", "Gemini API", "Code Mirror", "AI Guidance", "DSA"],
      description: [
        "Provides animations, data structures and algorithms guide, and AI guidance to help solve DSA problems.",
        "Utilizes Node.js and Express for backend functionality with Gemini API integration for intelligent assistance.",
        "Features Code Mirror Labs for advanced code editing capabilities with syntax highlighting and intelligent suggestions."
      ]
    },
        {
      id: 10,
      title: "Docker TestApp",
      github: "https://github.com/Akashshelke07/docker-testapp",
      liveDemo: null,
      category: "devops",
      featured: false,
      technologies: ["Docker", "Containerization", "Node.js"],
      description: [
        "Built and containerized a sample Node.js application using Docker.",
        "Implemented Dockerfile and Docker Compose setup for local development and testing.",
        "Gained experience in container orchestration and environment consistency."
      ]
    },
    {
      id: 11,
      title: "Node.js To-Do CI/CD Pipeline",
      github: "https://github.com/Akashshelke07/node-todo-cicd",
      liveDemo: null,
      category: "devops",
      featured: false,
      technologies: ["Node.js", "Jenkins/GitHub Actions", "CI/CD", "Docker" ,"AWS S3"],
      description: [
        "Developed a Node.js To-Do application integrated with a CI/CD pipeline.",
        "Automated build, test, and deployment processes using modern DevOps practices.",
        "Demonstrated continuous integration and delivery workflows with containerization."
      ]
    },
    {
      id: 12,
      title: "Django Notes App (Dockerized)",
      github: "https://github.com/Akashshelke07/django-notes-app",
      liveDemo: null,
      category: "devops",
      featured: false,
      technologies: ["Django", "Docker", "Jenkins", "PostgreSQL","WebSockets", "AWS S3"],
      description: [
        "Created a notes application using Django framework with PostgreSQL backend.",
        "Dockerized the application for consistent environment setup and easy deployment.",
        "Showcased end-to-end workflow of development to containerized deployment."
      ]
    },
    {
      id: 13,
      title: "CentOS VM Setup",
      github: "https://github.com/SetuHQ/docs",
      liveDemo: null,
      category: "devops",
      featured: false,
      technologies: ["CentOS", "Linux Administration", "Shell Scripting"],
      description: [
        "Set up and configured a CentOS virtual machine for development and testing environments.",
        "Practiced Linux administration, package management, and system hardening.",
        "Enabled environment isolation for running enterprise-grade applications."
      ]
    },
    {
      id: 14,
      title: "Vagrant Environment Automation",
      github: "https://developer.hashicorp.com/vagrant/docs",
      liveDemo: null,
      category: "devops",
      featured: false,
      technologies: ["Vagrant", "VirtualBox", "Infrastructure as Code"],
      description: [
        "Automated provisioning of development environments using Vagrant.",
        "Configured multi-VM setups with reproducible infrastructure as code.",
        "Improved team productivity by ensuring consistent developer environments."
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projectsData.length },
    { id: 'ai-ml', label: 'AI & ML', count: projectsData.filter(p => p.category === 'ai-ml').length },
    { id: 'devops', label: 'DevOps & Infrastructure', count: projectsData.filter(p => p.category === 'devops').length },
    { id: 'fullstack', label: 'Full Stack', count: projectsData.filter(p => p.category === 'fullstack').length },
    { id: 'frontend', label: 'Frontend', count: projectsData.filter(p => p.category === 'frontend').length },
    { id: 'backend', label: 'Backend', count: projectsData.filter(p => p.category === 'backend').length },
    { id: 'tools', label: 'Tools', count: projectsData.filter(p => p.category === 'tools').length }
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const loadMore = () => {
    setVisibleProjects(prev => prev + 3);
  };

  const ProjectCard = ({ project }) => (
    <Card title="">
      <div className={`project-item ${project.featured ? 'featured' : ''}`}>
        <div className="project-header">
          <div className="project-title-row">
            <h4 className="project-title">
              {project.title}
              {project.featured && <span className="featured-badge">Featured</span>}
            </h4>
            <div className="project-links">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link github-link"
                aria-label={`View ${project.title} on GitHub`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Code
              </a>
              {project.liveDemo && (
                <a 
                  href={project.liveDemo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link demo-link"
                  aria-label={`View ${project.title} live demo`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15,3 21,3 21,9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  Demo
                </a>
              )}
            </div>
          </div>
          
          <div className="project-tech">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
        
        <ul className="project-details">
          {project.description.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </Card>
  );

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
         A curated collection of projects demonstrating my expertise in Web Development, DevOps, and Generative AI
        </p>
        <div className="github-profile-section">
          <a 
            href="https://github.com/Akashshelke07" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-profile-link"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>View All Projects on GitHub</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17l9.2-9.2M17 17V7H7"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Category Filter */}
      <div className="filter-container">
        {categories.map(category => (
          <button
            key={category.id}
            className={`filter-btn ${filter === category.id ? 'active' : ''}`}
            onClick={() => {
              setFilter(category.id);
              setVisibleProjects(6);
            }}
          >
            {category.label}
            <span className="count">({category.count})</span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {displayedProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Load More Button */}
      {visibleProjects < filteredProjects.length && (
        <div className="load-more-container">
          <button className="load-more-btn" onClick={loadMore}>
            Show More Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
          </button>
        </div>
      )}

      {/* Stats */}
      <div className="projects-stats">
        <div className="stat-item">
          <span className="stat-number">{projectsData.length}</span>
          <span className="stat-label">Total Projects</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{projectsData.filter(p => p.featured).length}</span>
          <span className="stat-label">Featured Projects</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{categories.length - 1}</span>
          <span className="stat-label">Categories</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">15+</span>
          <span className="stat-label">Technologies</span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
