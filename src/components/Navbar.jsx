import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { GoProjectSymlink } from "react-icons/go";
import { LuContactRound } from "react-icons/lu";
import akImage from './ak.jpg'; 
import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FiDownload } from "react-icons/fi"; 
import Card from './Card/Card.jsx';

const Navbar = () => {
    const location = useLocation();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
            setIsSidebarOpen(!mobile);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Effect to handle body scrolling when sidebar is open on mobile
    useEffect(() => {
        if (isMobile && isSidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMobile, isSidebarOpen]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        if (isMobile) {
            setIsSidebarOpen(false);
        }
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
                <button 
                    className="hamburger-button" 
                    onClick={toggleSidebar}
                    aria-label="Toggle navigation menu"
                >
                    <GiHamburgerMenu size={20} />
                </button>
            )}
            
            <nav className={`navbar ${isMobile ? (isSidebarOpen ? 'mobile-open' : 'mobile-closed') : ''}`}>
                <div className="navbar-content">
                    <Card className="main-card">
                        {/* Profile Section */}
                        <div className="profile-section">
                            <div className="profile-image-container">
                                <img
                                    src={akImage}
                                    alt="Akash Shelke Profile"
                                    className="profile-image"
                                />
                            </div>
                            <div className="profile-info">
                                <h1 className="profile-name">Akash Shelke</h1>
                                <p className="profile-job-title">DevOps Enthusiast</p>
                                <div className="profile-email">
                                    <span>Email: </span>
                                    <a 
                                        href="mailto:skyler.in.ios@gmail.com"
                                        aria-label="Send email to Akash Shelke"
                                    >
                                        skyler.in.ios@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <nav className="nav-section" role="navigation" aria-label="Main navigation">
                            <ul className="nav-links">
                                <li>
                                    <Link 
                                        to="/" 
                                        className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                                        onClick={closeSidebar}
                                        aria-current={location.pathname === '/' ? 'page' : undefined}
                                    >
                                        <IoHomeOutline style={iconStyle} aria-hidden="true" />
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/projects" 
                                        className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
                                        onClick={closeSidebar}
                                        aria-current={location.pathname === '/projects' ? 'page' : undefined}
                                    >
                                        <GoProjectSymlink style={iconStyle} aria-hidden="true" />
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/contact" 
                                        className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                                        onClick={closeSidebar}
                                        aria-current={location.pathname === '/contact' ? 'page' : undefined}
                                    >
                                        <LuContactRound style={iconStyle} aria-hidden="true" />
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        {/* Resume Button and Social Icons */}
                        <div className="resume-social-section">
                            <a
                                href="https://drive.google.com/file/d/1kgCwpK6L8XDtPxCLYzqqGGi2iI7yl4Tt/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="resume-button"
                                aria-label="Download resume (opens in new tab)"
                            >
                                <FiDownload style={{ marginRight: '8px', verticalAlign: 'middle' }} aria-hidden="true" />
                                Resume
                            </a>
                            
                            <div className="social-icons" role="navigation" aria-label="Social media links">
                                <a 
                                    href="https://www.instagram.com/skyler.in.io/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="social-icon"
                                    aria-label="Follow on Instagram"
                                >
                                    <FaInstagram size={18} aria-hidden="true" />
                                </a>
                                <a 
                                    href="https://www.linkedin.com/in/akash-shelke-5b1520259/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="social-icon"
                                    aria-label="Connect on LinkedIn"
                                >
                                    <FaLinkedin size={18} aria-hidden="true" />
                                </a>
                                <a 
                                    href="https://x.com/akashshelke07" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="social-icon"
                                    aria-label="Follow on Twitter"
                                >
                                    <FaTwitter size={18} aria-hidden="true" />
                                </a>
                                <a 
                                    href="https://www.facebook.com/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="social-icon"
                                    aria-label="Follow on Facebook"
                                >
                                    <FaFacebook size={18} aria-hidden="true" />
                                </a>
                                <a 
                                    href="https://github.com/Akashshelke07" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="social-icon"
                                    aria-label="View GitHub profile"
                                >
                                    <FaGithub size={18} aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Card>
                </div>
            </nav>
            
            {isMobile && isSidebarOpen && (
                <div 
                    className="backdrop" 
                    onClick={toggleSidebar}
                    aria-hidden="true"
                />
            )}
        </>
    );
};

export default Navbar;