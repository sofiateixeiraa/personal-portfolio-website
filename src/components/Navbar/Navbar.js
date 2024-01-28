import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Hook to get the current location

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    // Check if the current page is the home page
    const isHomePage = location.pathname === '/';

    return (
        <nav className={`navbar ${isHomePage ? 'fixed' : ''}`}>
            <div className="nav-logo">
              <Link to="/">
                    <img src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="hamburger-menu" onClick={handleToggle}>
                ☰
            </div>
            <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
                <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                <li><Link to="/skills" onClick={closeMenu}>Skills</Link></li>
                <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
