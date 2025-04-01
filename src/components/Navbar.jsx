import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { GoProjectSymlink } from "react-icons/go";
import { LuContactRound } from "react-icons/lu";
import akImage from './ak.jpg'; 
import { GiHamburgerMenu } from "react-icons/gi";
import { FiDownload } from "react-icons/fi";

const Navbar = () => {
    const location = useLocation();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 768;
            if (mobile !== isMobile) {
                setIsMobile(mobile);
                setIsSidebarOpen(!mobile);
            } else if (!mobile && !isSidebarOpen) {
                setIsSidebarOpen(true);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [isMobile, isSidebarOpen]);

    useEffect(() => {
        // Add or remove the blur class when sidebar is opened or closed
        if (isSidebarOpen && isMobile) {
            document.body.classList.add('background-blur');
        } else {
            document.body.classList.remove('background-blur');
        }
    }, [isSidebarOpen, isMobile]);

    const toggleSidebar = () => {
        if (isMobile) {
            setIsSidebarOpen(!isSidebarOpen);
        }
    };

    const handleLinkClick = () => {
        if (isMobile) {
            setIsSidebarOpen(false);
        }
    };

    const iconStyle = {
        width: '20px',
        height: '20px',
        marginRight: '12px',
        verticalAlign: 'middle',
        flexShrink: 0
    };

    return (
        <>
            {isMobile && (
                <button className="hamburger-button" onClick={toggleSidebar} aria-label="Toggle navigation">
                    <GiHamburgerMenu size={24} />
                </button>
            )}

            <nav className={`navbar ${isMobile ? (isSidebarOpen ? 'mobile-open' : 'mobile-closed') : 'desktop-visible'}`}>
                <div className="navbar-header">
                    <div className="profile-section">
                        <img src={akImage} alt="Akash Shelke" className="profile-image" />
                        <div className="profile-info">
                            <h3>Akash Shelke</h3>
                            <p>FullStack Developer</p>
                            <div className="profile-email">
                                <h4> Email :- <a href="mailto:skyler.in.ios@gmail.com">skyler.in.ios@gmail.com</a></h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="navbar-content">
                    <ul className="nav-links">
                        <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={handleLinkClick}><IoHomeOutline style={iconStyle} />Home</Link></li>
                        <li><Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`} onClick={handleLinkClick}><GoProjectSymlink style={iconStyle} />Projects</Link></li>
                        <li><Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={handleLinkClick}><LuContactRound style={iconStyle} />Contact</Link></li>
                    </ul>
                </div>

                <div className="navbar-footer">
                    <a href="https://drive.google.com/uc?export=download&id=1hFt2T0foel4twRbfWuGE_9ECXEvx7n_o" download="Akash_Shelke_Resume.pdf" className="resume-button" target="_blank" rel="noopener noreferrer">
                         <FiDownload style={{ marginRight: '8px', verticalAlign: 'middle' }} /> Resume
                    </a>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/skyler.in.io/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
                        <a href="https://www.linkedin.com/in/akash-shelke-5b1520259/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="https://x.com/akashshelke07" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter"><FaTwitter /></a>
                        <a href="https://www.facebook.com/your_profile" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook"><FaFacebook /></a>
                        <a href="https://github.com/Akashshelke07" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Github"><FaGithub /></a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
