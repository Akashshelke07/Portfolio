import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook, FaGithub, FaReact } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { GoProjectSymlink } from "react-icons/go";
import { LuContactRound } from "react-icons/lu";
import akImage from './ak.jpg'; 
import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FiDownload } from "react-icons/fi"; 
import Card from './Card/Card.jsx'; // Import the Card component

const Navbar = () => {
    const location = useLocation();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
            if (mobile !== isMobile) {
               setIsSidebarOpen(!mobile);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [isMobile]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const iconStyle = {
        width: '20px',  
        height: '20px', 
        marginRight: '12px', 
        verticalAlign: 'middle',
    };

    return (
        <>
            {isMobile && (
                <button className="hamburger-button" onClick={toggleSidebar}>
                    <GiHamburgerMenu size={24} />
                </button>
            )}
            <nav className={`navbar ${isMobile ? (isSidebarOpen ? 'mobile-open' : 'mobile-closed') : ''}`}>
                <div className="navbar-content">
                    <Card title="Profile & Navigation" className="main-card">
                        {/* Profile Section */}
                        <div className="profile-section">
                            <div className="profile-image-container">
                                <img
                                    src={akImage}
                                    alt="Akash Shelke"
                                    className="profile-image"
                                />
                            </div>
                            <div className="profile-info">
                                <h3 className="profile-name">Akash Shelke</h3> 
                                <Card title="">
                                    <div className="profile-title">
                                        <FaReact className="react-icon" />
                                        Full-Stack Developer | DevOps Engineer
                                    </div>
                                </Card>
                                <div className="profile-email">
                                    <span>Email: </span>
                                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=skyler.in.ios@gmail.com">
                                        skyler.in.ios@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div className="nav-section">
                            <ul className="nav-links">
                                <li>
                                    <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                                        <IoHomeOutline style={iconStyle} />
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}>
                                        <GoProjectSymlink style={iconStyle} />
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
                                        <LuContactRound style={iconStyle} />
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Resume and Social Section */}
                        <div className="footer-section">
                            <a
                                href="https://drive.google.com/file/d/1hFt2T0foel4twRbfWuGE_9ECXEvx7n_o/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="resume-button"
                            >
                                <FiDownload style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                                Resume
                            </a>
                            <div className="social-icons">
                                <a href="https://www.instagram.com/skyler.in.io/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <FaInstagram size={16} />
                                </a>
                                <a href="https://www.linkedin.com/in/akash-shelke-5b1520259/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <FaLinkedin size={16} />
                                </a>
                                <a href="https://x.com/akashshelke07" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <FaTwitter size={16} />
                                </a>
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <FaFacebook size={16} />
                                </a>
                                <a href="https://github.com/Akashshelke07" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <FaGithub size={16} />
                                </a>
                            </div>
                        </div>
                    </Card>
                </div>
            </nav>
            {isMobile && isSidebarOpen && <div className="backdrop" onClick={toggleSidebar}></div>}
        </>
    );
};

export default Navbar;