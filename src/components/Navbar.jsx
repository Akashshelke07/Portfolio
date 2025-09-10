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
                <button className="hamburger-button" onClick={toggleSidebar}>
                    <GiHamburgerMenu size={24} />
                </button>
            )}
            <nav className={`navbar ${isMobile ? (isSidebarOpen ? 'mobile-open' : 'mobile-closed') : ''}`}>
                <div className="navbar-content">
                    <Card 
                        className="main-card" 
                        showNameAndTitle={false} // Set to false since we're rendering it manually below the image
                    >
                        {/* Profile Image Section */}
                        <div className="profile-section">
                            <div className="profile-image-container">
                                <img
                                    src={akImage}
                                    alt="Akash Shelke"
                                    className="profile-image"
                                />
                            </div>
                            <div className="profile-info">
                                {/* Name and Job Title displayed just below the image */}
                                <div className="profile-name">Akash Shelke</div>
                                <div className="profile-job-title">Full-Stack Developer | DevOps Engineer</div>
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
                                    <Link 
                                        to="/" 
                                        className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                                        onClick={closeSidebar}
                                    >
                                        <IoHomeOutline style={iconStyle} />
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/projects" 
                                        className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
                                        onClick={closeSidebar}
                                    >
                                        <GoProjectSymlink style={iconStyle} />
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/contact" 
                                        className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                                        onClick={closeSidebar}
                                    >
                                        <LuContactRound style={iconStyle} />
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                            {/* Resume Button and Social Icons */}
                            <div className="resume-social-section">
                                <a
                                    href="https://drive.google.com/file/d/1kgCwpK6L8XDtPxCLYzqqGGi2iI7yl4Tt/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="resume-button"
                                >
                                    <FiDownload style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                                    Resume
                                </a>
                                <div className="social-icons">
                                    <a href="https://www.instagram.com/skyler.in.io/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                        <FaInstagram size={20} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/akash-shelke-5b1520259/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                        <FaLinkedin size={20} />
                                    </a>
                                    <a href="https://x.com/akashshelke07" target="_blank" rel="noopener noreferrer" className="social-icon">
                                        <FaTwitter size={20} />
                                    </a>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                        <FaFacebook size={20} />
                                    </a>
                                    <a href="https://github.com/Akashshelke07" target="_blank" rel="noopener noreferrer" className="social-icon">
                                        <FaGithub size={20} />
                                    </a>
                                </div>
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