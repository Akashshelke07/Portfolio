// src/components/Experience.jsx
import React from 'react';
import './Experience.css';
import scaleFullLogo from './scalefull__logo.png';
import gssocLogo from './gssoc_logo.png';
import nutanLogo from './nutan_logo.png';

const Experience = () => {
    return (
        <div className="experience-container">
            <h2 className="section-title">Experience</h2>
            
            {/* Current Experience - GSSOC 2025 */}
            <div className="experience-details">
                <div className="experience-header">
                    <img 
                        src={gssocLogo} 
                        alt="GSSOC Logo" 
                        className="company-logo" 
                    />
                    <div className="experience-title">
                        <h4>Girlscript Summer of Code 2025 | Mentor</h4>
                        <p className="experience-dates">Jul 2025 - Present | Remote</p>
                    </div>
                </div>
                <ul>
                    <li>Guided and mentored open-source contributors on projects Vehigo and Pouranik, ensuring adherence to industry-standard coding practices and high-quality pull requests.</li>
                    <li>Reviewed and improved code, documentation, and design consistency, streamlining contribution workflows and maintaining scalable project structures using Agile development methodologies.</li>
                    <li>Facilitated technical discussions, knowledge sharing sessions and constructive feedback, enabling contributors to enhance problem-solving, collaboration and independent software development skills.</li>
                    <li>Managed GitHub issues, PR workflows, and project milestones, ensuring timely progress tracking, smooth onboarding, and effective task allocation across distributed teams.</li>
                    <li>Strengthened leadership, remote communication, and open source governance by fostering an inclusive, growth-oriented environment for diverse contributors worldwide.</li>
                </ul>
            </div>

            {/* ScaleFull Technologies Experience */}
            <div className="experience-details">
                <div className="experience-header">
                    <img 
                        src={scaleFullLogo} 
                        alt="ScaleFull Logo" 
                        className="company-logo" 
                    />
                    <div className="experience-title">
                        <h4>ScaleFull Technologies LLP | Intern Software Engineer</h4>
                        <p className="experience-dates">Dec 2024 - Feb 2025 | Pune</p>
                    </div>
                </div>
                <ul>
                    <li>Collaborated with a cross-functional team to develop a responsive full-stack travel booking platform using the MERN stack, enhancing user experience and scalability through modern software development practices.</li>
                    <li>Integrated Cloudinary for image optimization, reducing load times by 40% and improving application performance across devices.</li>
                    <li>Designed and tested secure RESTful APIs for authentication, booking, and payments, ensuring reliability and data integrity through comprehensive Postman testing.</li>
                    <li>Implemented Redux-based state management, optimizing component rendering and improving application responsiveness.</li>
                    <li>Containerized the platform using Docker, ensuring consistency between development and production environments.</li>
                    <li>Automated deployments with a CI/CD pipeline on Vercel, enabling faster release cycles and reduced manual intervention.</li>
                </ul>
            </div>

            {/* Nutan Incubation Centre Experience */}
            <div className="experience-details">
                <div className="experience-header">
                    <img 
                        src={nutanLogo} 
                        alt="Nutan Incubation Centre Logo" 
                        className="company-logo" 
                    />
                    <div className="experience-title">
                        <h4>Nutan Incubation Centre | Frontend Lead – Team Qubits</h4>
                        <p className="experience-dates">Jun 2024 - Aug 2024 | Pune</p>
                    </div>
                </div>
                <ul>
                    <li>Led Team Qubits in developing BookSnap, a collaborative full-stack platform for book purchases and note sharing using modern web technologies.</li>
                    <li>Directed frontend development with React.js and Tailwind CSS, delivering a responsive and mobile-first UI following industry best practices.</li>
                    <li>Integrated Clerk Auth for secure authentication and contributed backend APIs using Node.js, Express, and MongoDB.</li>
                    <li>Coordinated GitHub workflows and deployment on Vercel, ensuring smooth team collaboration and timely delivery.</li>
                </ul>
            </div>
        </div>
    );
};

export default Experience;