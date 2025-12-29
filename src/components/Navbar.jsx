import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menus on route change
    useEffect(() => {
        closeMobileMenu();
    }, [location]);

    // ESC key close
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') closeMobileMenu();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    // Body scroll lock (safe)
    useEffect(() => {
        document.body.classList.toggle('menu-open', isMobileMenuOpen);
    }, [isMobileMenuOpen]);

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setDropdownOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-inner">
                <Link to="/" className="logo">
                    WebTools.io
                </Link>

                {/* Desktop Nav */}
                <ul className="nav-links desktop-nav">
                    <li>
                        <Link to="/" className="nav-link">ຫນ້າຫຼັກ</Link>
                    </li>

                    <li
                        className="dropdown"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                        <span className="nav-link">ເຄື່ອງມື ▾</span>
                        <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                            <Link to="/tools/video" className="dropdown-item">ໂຕແປງວີດີໂອເປັນພາບ</Link>
                            <Link to="/tools/image" className="dropdown-item">ແປງຮູບພາບ</Link>
                            <Link to="/tools/qr" className="dropdown-item">ເຈນ QR Code</Link>
                        </div>
                    </li>

                    <li>
                        <Link to="/about" className="nav-link">ກ່ຽວກັບຂ້ອຍຍຍ</Link>
                    </li>
                </ul>

                {/* Hamburger */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(true)}
                    aria-label="Open menu"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Overlay + Menu */}
            {isMobileMenuOpen && (
                <div className="mobile-overlay" onClick={closeMobileMenu}>
                    <div
                        className="mobile-menu"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="mobile-close-btn"
                            onClick={closeMobileMenu}
                            aria-label="Close menu"
                        >
                            ✕
                        </button>

                        <Link to="/" onClick={closeMobileMenu}>ຫນ້າຫຼັກ</Link>

                        <button
                            className="mobile-dropdown-btn"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            ເຄື່ອງມື ▾
                        </button>

                        {dropdownOpen && (
                            <div className="mobile-submenu">
                                <Link to="/tools/video" onClick={closeMobileMenu}>ໂຕແປງວີດີໂອເປັນພາບ</Link>
                                <Link to="/tools/image" onClick={closeMobileMenu}>ແປງຮູບພາບ</Link>
                                <Link to="/tools/qr" onClick={closeMobileMenu}>ເຈນ QR Code</Link>
                            </div>
                        )}

                        <Link to="/about" onClick={closeMobileMenu}>ກ່ຽວກັບຂ້ອຍຍຍ</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
