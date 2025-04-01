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
            setIsMobile(mobile);
            setIsSidebarOpen(!mobile);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isSidebarOpen && isMobile) {
            document.body.classList.add('background-blur');
        } else {
            document.body.classList.remove('background-blur');
        }
    }, [isSidebarOpen, isMobile]);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const handleLinkClick = () => isMobile && setIsSidebarOpen(false);

    return (
        <>
            {isMobile && (
                <button className="hamburger-button" onClick={toggleSidebar}>
                    <GiHamburgerMenu size={24} />
                </button>
            )}

            <nav className={`navbar ${isSidebarOpen ? 'mobile-open' : 'mobile-closed'}`}>
                <div className="navbar-header">
                    <div className="profile-section">
                        <img src={akImage} alt="Akash Shelke" className="profile-image" />
                        <h3>Akash Shelke</h3>
                        <p>FullStack Developer</p>
                        <h4>Email: <a href="mailto:skyler.in.ios@gmail.com">skyler.in.ios@gmail.com</a></h4>
                    </div>
                </div>

                <ul className="nav-links">
                    <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={handleLinkClick}><IoHomeOutline />Home</Link></li>
                    <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''} onClick={handleLinkClick}><GoProjectSymlink />Projects</Link></li>
                    <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={handleLinkClick}><LuContactRound />Contact</Link></li>
                </ul>

                <div className="navbar-footer">
                    <a href="https://drive.google.com/uc?export=download&id=1hFt2T0foel4twRbfWuGE_9ECXEvx7n_o" className="resume-button" target="_blank" rel="noopener noreferrer">
                        <FiDownload /> Resume
                    </a>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/skyler.in.io/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://www.linkedin.com/in/akash-shelke-5b1520259/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://x.com/akashshelke07" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://github.com/Akashshelke07" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
