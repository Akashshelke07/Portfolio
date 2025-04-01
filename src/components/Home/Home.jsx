import React from 'react';
import Experience from '../Experience/Experience.jsx';
import '../Home/Home.css';
import Card from '../Card/Card.jsx';

const Home = () => {
  return (
    <div className="home-container">
      <div className="content-card">
        <section id="home" className="home-section">
          <h2>Home</h2>

          <div className="card about-me-card">
            <h3>About Me</h3>
            <p>
             Innovative Full-Stack Developer and DevOps Enthusiast with expertise in designing and deploying scalable, high-performance applications. Skilled in cloud computing, automation, and infrastructure as code (IaC) to enhance system efficiency. Proficient in front-end and back-end development, CI/CD pipelines, microservices, and containerization using Docker and Kubernetes. Experienced in AWS, Azure, and GCP for cloud solutions. Strong problem-solving abilities with a focus on performance optimization, security, and agile collaboration. Passionate about learning new technologies and driving innovation in software development and cloud engineering.
            </p>
          </div>

          <div className="card experience-card">
            <h3>Experience</h3>
            <Experience />
          </div>

          <Card title="Skills">
  <div className="skills-section">

    <h4>Programming Languages:</h4>
    <div className="skill-box-container">
      <div className="skill-box">Java</div>
      <div className="skill-box">JavaScript</div>
    </div>

    <h4>Web Technologies & Frameworks:</h4>
    <div className="skill-box-container">
      <div className="skill-box">HTML5</div>
      <div className="skill-box">CSS3</div>
      <div className="skill-box">React.js</div>
      <div className="skill-box">Node.js</div>
      <div className="skill-box">Express.js</div>
      <div className="skill-box">Tailwind CSS</div>
      <div className="skill-box">Bootstrap</div>
    </div>

    <h4>Databases:</h4>
    <div className="skill-box-container">
      <div className="skill-box">MongoDB</div>
      <div className="skill-box">MySQL</div>
    </div>

    <h4>Tools & DevOps:</h4>
    <div className="skill-box-container">
      <div className="skill-box">Git</div>
      <div className="skill-box">GitHub</div>
      <div className="skill-box">Postman</div>
      <div className="skill-box">Docker</div>
      <div className="skill-box">Kubernetes</div>
      <div className="skill-box">Ansible</div>
      <div className="skill-box">CI/CD Pipelines</div>
      <div className="skill-box">Jenkins</div>
      <div className="skill-box">AWS</div>
      <div className="skill-box">Azure</div>
      <div className="skill-box">Google Cloud Platform (GCP)</div>
    </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Home;