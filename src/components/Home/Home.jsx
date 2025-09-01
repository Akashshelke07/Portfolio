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
        </section>
      </div>
    </div>
  );
};

export default Home;