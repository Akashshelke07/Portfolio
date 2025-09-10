import React from 'react';
import Experience from '../Experience/Experience.jsx';
import '../Home/Home.css';
import Card from '../Card/Card.jsx';

const Home = () => {
  return (
    <div className="home-container">
      <div className="content-card">
        <section id="home" className="home-section">
          <h2 style={{ textAlign: 'center' }}>Home</h2>
          
          <div className="card about-me-card">
            <h3 className="about-me-title">About Me</h3>
            <div className="about-me-content">
              <p className="about-me-intro">
                I am a passionate <strong>Full Stack Developer</strong> and <strong>DevOps Engineer</strong> based in India, 
                specializing in building scalable web applications and implementing robust cloud infrastructure solutions. 
                With a strong commitment to continuous learning and innovation, I actively contribute to open source 
                projects and mentor aspiring developers in their technical journey.
              </p>
              
              <div className="professional-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">🔭</span>
                  <div className="highlight-content">
                    <strong>Current Focus:</strong> Advanced DevOps practices and cloud-native application development
                  </div>
                </div>
                
                <div className="highlight-item">
                  <span className="highlight-icon">🌱</span>
                  <div className="highlight-content">
                    <strong>Technical Growth:</strong> Expanding expertise in Kubernetes orchestration, AWS cloud services, and Infrastructure as Code (IaC)
                  </div>
                </div>
                
                <div className="highlight-item">
                  <span className="highlight-icon">👥</span>
                  <div className="highlight-content">
                    <strong>Leadership Role:</strong> Open Source Mentor at GirlScript Summer of Code (GSSoC) 2025
                  </div>
                </div>
                
                <div className="highlight-item">
                  <span className="highlight-icon">🤝</span>
                  <div className="highlight-content">
                    <strong>Collaboration:</strong> Open to partnerships in MERN stack development and DevOps automation projects
                  </div>
                </div>
                
                <div className="highlight-item">
                  <span className="highlight-icon">💡</span>
                  <div className="highlight-content">
                    <strong>Expertise Areas:</strong> Web Development, Cloud Infrastructure, DevOps Practices, and Open Source Technologies
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card professional-experience-card">
            <h3 className="section-title">Professional Experience</h3>
            <div className="experience-content">
              <Experience />
            </div>
          </div>
          
          <div className="card professional-skills-card">
            <h3 className="section-title">Technical Skills & Expertise</h3>
            <div className="skills-content">
              <div className="skills-category">
                <div className="category-header">
                  <span className="category-icon">🎨</span>
                  <h4 className="category-title">Frontend Development</h4>
                </div>
                <div className="skill-grid">
                  <div className="professional-skill-item">
                    <span className="skill-name">React.js</span>
                    <span className="skill-level">Advanced</span>
                  </div>
                  <div className="professional-skill-item">
                    <span className="skill-name">JavaScript</span>
                    <span className="skill-level">Expert</span>
                  </div>
                  <div className="professional-skill-item">
                    <span className="skill-name">HTML5</span>
                    <span className="skill-level">Expert</span>
                  </div>
                  <div className="professional-skill-item">
                    <span className="skill-name">CSS3</span>
                    <span className="skill-level">Advanced</span>
                  </div>
                  <div className="professional-skill-item">
                    <span className="skill-name">Tailwind CSS</span>
                    <span className="skill-level">Advanced</span>
                  </div>
                  <div className="professional-skill-item">
                    <span className="skill-name">Responsive Design</span>
                    <span className="skill-level">Expert</span>
                  </div>
                </div>
              </div>

              <div className="skills-category">
                <div className="category-header">
                  <span className="category-icon">⚙️</span>
                  <h4 className="category-title">Backend Development</h4>
                </div>
                <div className="skill-grid">
                  <div className="professional-skill-item">
                    <span className="skill-name">Node.js</span>
                    <span className="skill-level">Advanced</span>
                  </div>
                  <div className="professional-skill-item">
                    <span className="skill-name">Express.js</span>
                    <span className="skill-level">Advanced</span>
                  </div>
                  <div className="professional-skill-item">
                    <span className="skill-name">RESTful APIs</span>
                    <span className="skill-level">Expert</span>
                  </div>
                  <div className="professional-skill-item">
                    <span className="skill-name">MongoDB</span>
                    <span className="skill-level">Advanced</span>
                  </div>
                  <div className="professional-skill-item">
                    <span className="skill-name">Firebase</span>
                    <span className="skill-level">Intermediate</span>
                  </div>
                  <div className="professional-skill-item">
                    <span className="skill-name">Supabase</span>
                    <span className="skill-level">Intermediate</span>
                  </div>
                </div>
              </div>

              <div className="skills-category">
                <div className="category-header">
                  <span className="category-icon">💻</span>
                  <h4 className="category-title">Programming Languages</h4>
                </div>
                <div className="skill-grid">
                  <div className="professional-skill-item">
                    <span className="skill-name">Java</span>
                    <span className="skill-level">Advanced</span>
                  </div>
                  <div className="professional-skill-item">
                    <span className="skill-name">JavaScript</span>
                    <span className="skill-level">Expert</span>
                  </div>
                  <div className="professional-skill-item">
                    <span className="skill-name">Python</span>
                    <span className="skill-level">Intermediate</span>
                  </div>
                </div>
              </div>

              <div className="skills-category">
                <div className="category-header">
                  <span className="category-icon">☁️</span>
                  <h4 className="category-title">DevOps & Cloud Technologies</h4>
                </div>
                <div className="skill-grid">
                  <div className="professional-skill-item">
                    <span className="skill-name">Docker</span>
                    <span className="skill-level">Advanced</span>
                  </div>
                  <div className="professional-skill-item">
                    <span className="skill-name">Jenkins</span>
                    <span className="skill-level">Intermediate</span>
                  </div>
                  <div className="professional-skill-item">
                    <span className="skill-name">Kubernetes</span>
                    <span className="skill-level">Advanced</span>
                  </div>
                  <div className="professional-skill-item">
                    <span className="skill-name">AWS EC2</span>
                    <span className="skill-level">Advanced</span>
                  </div>
                  <div className="professional-skill-item">
                    <span className="skill-name">GitHub Actions</span>
                    <span className="skill-level">Advanced</span>
                  </div>
                  <div className="professional-skill-item">
                    <span className="skill-name">CI/CD</span>
                    <span className="skill-level">Advanced</span>
                  </div>
                  <div className="professional-skill-item">
                    <span className="skill-name">Vercel</span>
                    <span className="skill-level">Advanced</span>
                  </div>
                </div>
              </div>

              <div className="skills-category">
                <div className="category-header">
                  <span className="category-icon">🛠️</span>
                  <h4 className="category-title">Development Tools & Technologies</h4>
                </div>
                <div className="skill-grid">
                  <div className="professional-skill-item">
                    <span className="skill-name">Git</span>
                    <span className="skill-level">Expert</span>
                  </div>
                  <div className="professional-skill-item">
                    <span className="skill-name">GitHub</span>
                    <span className="skill-level">Expert</span>
                  </div>
                  <div className="professional-skill-item">
                    <span className="skill-name">VS Code</span>
                    <span className="skill-level">Expert</span>
                  </div>
                  <div className="professional-skill-item">
                    <span className="skill-name">Postman</span>
                    <span className="skill-level">Advanced</span>
                  </div>
                  <div className="professional-skill-item">
                    <span className="skill-name">Redux</span>
                    <span className="skill-level">Advanced</span>
                  </div>
                  <div className="professional-skill-item">
                    <span className="skill-name">Clerk Auth</span>
                    <span className="skill-level">Intermediate</span>
                  </div>
                  <div className="professional-skill-item">
                    <span className="skill-name">Cloudinary</span>
                    <span className="skill-level">Intermediate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card professional-certifications-card">
            <h3 className="section-title">Professional Certifications</h3>
            <div className="certifications-content">
              <div className="certification-item">
                <div className="certification-header">
                  <div className="certification-badge">
                    <span className="certification-icon">⚙️</span>
                  </div>
                  <div className="certification-info">
                    <h4 className="certification-title">
                      <a href="https://aws.amazon.com/certification/certified-devops-engineer-professional/" target="_blank" rel="noopener noreferrer" className="certification-link">
                        DevOps Engineering Certification
                      </a>
                    </h4>
                    <div className="certification-meta">
                      <span className="certification-issuer">AWS / Industry Standard</span>
                      <span className="certification-date">2024</span>
                    </div>
                    <div className="certification-status active">Active</div>
                  </div>
                </div>
                <div className="certification-description">
                  Expertise in CI/CD pipelines, infrastructure automation, containerization with Docker, Kubernetes orchestration, and DevOps best practices for scalable application deployment.
                </div>
              </div>

              <div className="certification-item">
                <div className="certification-header">
                  <div className="certification-badge">
                    <span className="certification-icon">🤖</span>
                  </div>
                  <div className="certification-info">
                    <h4 className="certification-title">
                      <a href="https://www.coursera.org/professional-certificates/generative-ai" target="_blank" rel="noopener noreferrer" className="certification-link">
                        Generative AI Certification
                      </a>
                    </h4>
                    <div className="certification-meta">
                      <span className="certification-issuer">Industry Recognized Platform</span>
                      <span className="certification-date">2024</span>
                    </div>
                    <div className="certification-status active">Active</div>
                  </div>
                </div>
                <div className="certification-description">
                  Comprehensive knowledge in Large Language Models (LLMs), prompt engineering, AI application development, and implementing generative AI solutions in production environments.
                </div>
              </div>

              <div className="certification-item">
                <div className="certification-header">
                  <div className="certification-badge">
                    <span className="certification-icon">🧠</span>
                  </div>
                  <div className="certification-info">
                    <h4 className="certification-title">
                      <a href="https://www.coursera.org/professional-certificates/machine-learning-engineering" target="_blank" rel="noopener noreferrer" className="certification-link">
                        Machine Learning Certification
                      </a>
                    </h4>
                    <div className="certification-meta">
                      <span className="certification-issuer">Industry Recognized Platform</span>
                      <span className="certification-date">2024</span>
                    </div>
                    <div className="certification-status active">Active</div>
                  </div>
                </div>
                <div className="certification-description">
                  Proficiency in supervised and unsupervised learning algorithms, model training and deployment, data preprocessing, and implementing ML pipelines for real-world applications.
                </div>
              </div>

              <div className="certification-item">
                <div className="certification-header">
                  <div className="certification-badge">
                    <span className="certification-icon">💻</span>
                  </div>
                  <div className="certification-info">
                    <h4 className="certification-title">
                      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" className="certification-link">
                        JavaScript Developer Certification
                      </a>
                    </h4>
                    <div className="certification-meta">
                      <span className="certification-issuer">Industry Standard</span>
                      <span className="certification-date">2023</span>
                    </div>
                    <div className="certification-status active">Active</div>
                  </div>
                </div>
                <div className="certification-description">
                  Advanced expertise in ES6+ features, asynchronous programming, DOM manipulation, modern JavaScript frameworks, and building responsive web applications.
                </div>
              </div>

              <div className="certification-item">
                <div className="certification-header">
                  <div className="certification-badge">
                    <span className="certification-icon">☕</span>
                  </div>
                  <div className="certification-info">
                    <h4 className="certification-title">
                      <a href="https://education.oracle.com/java-se-certification" target="_blank" rel="noopener noreferrer" className="certification-link">
                        Core Java Programming Certification
                      </a>
                    </h4>
                    <div className="certification-meta">
                      <span className="certification-issuer">Oracle / Industry Standard</span>
                      <span className="certification-date">2023</span>
                    </div>
                    <div className="certification-status active">Active</div>
                  </div>
                </div>
                <div className="certification-description">
                  Strong foundation in object-oriented programming, data structures, algorithms, exception handling, and building enterprise-grade Java applications.
                </div>
              </div>

              <div className="certification-item">
                <div className="certification-header">
                  <div className="certification-badge">
                    <span className="certification-icon">🌐</span>
                  </div>
                  <div className="certification-info">
                    <h4 className="certification-title">
                      <a href="https://www.geeksforgeeks.org/courses/mongodb-developers-toolkit-crud-mastery" target="_blank" rel="noopener noreferrer" className="certification-link">
                        MongoDB Developer Certification
                      </a>
                    </h4>
                    <div className="certification-meta">
                      <span className="certification-issuer">GeeksforGeeks (GFG)</span>
                      <span className="certification-date">2023</span>
                    </div>
                    <div className="certification-status active">Active</div>
                  </div>
                </div>
                <div className="certification-description">
                  Comprehensive understanding of NoSQL database design, CRUD operations, aggregation pipelines, indexing strategies, and MongoDB deployment in production environments.
                </div>
              </div>

              <div className="certification-item">
                <div className="certification-header">
                  <div className="certification-badge">
                    <span className="certification-icon">🐍</span>
                  </div>
                  <div className="certification-info">
                    <h4 className="certification-title">
                      <a href="https://www.python.org/about/success/" target="_blank" rel="noopener noreferrer" className="certification-link">
                        Python Programming Certification
                      </a>
                    </h4>
                    <div className="certification-meta">
                      <span className="certification-issuer">Industry Standard</span>
                      <span className="certification-date">2023</span>
                    </div>
                    <div className="certification-status active">Active</div>
                  </div>
                </div>
                <div className="certification-description">
                  Proficiency in Python programming, data manipulation with pandas, web development with Flask/Django, automation scripting, and integration with machine learning libraries.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;