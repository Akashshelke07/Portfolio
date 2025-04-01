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
import { FiDownload } from "react-icons/fi"; // Import download icon

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
        width: '60px',  
        height: '20px', 
        marginRight: '10px', 
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
                <div className="navbar-header">
                    <div className="top-section">
                        <div className="profile-section">
                            <img
                                src={akImage}
                                alt="Akash Shelke"
                                className="profile-image"
                            />
                            <div className="profile-info">
                                <h3>Akash Shelke</h3> 
                                <p>FullStack Developer</p> 
                                <div className="profile-email">
                                    <h4>Email :- <a href="https://mail.google.com/mail/?view=cm&fs=1&to=skyler.in.ios@gmail.com">skyler.in.ios@gmail.com</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="navbar-content">
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

                <div className="navbar-footer">
                    <a
                        href="../../public/as.pdf"
                        download="Akash_Shelke_Resume.pdf"
                        className="resume-button"
                    >
                        <FiDownload style={{ marginRight: '10px', verticalAlign: 'middle' }} />
                        Download Resume
                    </a>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/skyler.in.io/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram size={24} /></a>
                        <a href="https://www.linkedin.com/in/akash-shelke-5b1520259/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin size={24} /></a>
                        <a href="https://x.com/akashshelke07" target="_blank" rel="noopener noreferrer" className="social-icon"><FaTwitter size={24} /></a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebook size={24} /></a>
                        <a href="https://github.com/Akashshelke07" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub size={24} /></a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
