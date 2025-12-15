import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    useEffect(() => {
        setDropdownOpen(false);
    }, [location]);

    const styles = {
        nav: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            transition: 'all 0.3s ease',
            background: scrolled ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
            padding: scrolled ? '1rem 0' : '1.5rem 0',
        },
        container: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        logo: {
            fontSize: '1.5rem',
            fontWeight: '800',
            background: 'var(--gradient-main)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textDecoration: 'none',
        },
        links: {
            display: 'flex',
            gap: '2rem',
            listStyle: 'none',
            alignItems: 'center',
        },
        link: {
            color: 'var(--text-primary)',
            fontWeight: '500',
            fontSize: '1rem',
            cursor: 'pointer',
            position: 'relative',
        },
        dropdownWrapper: {
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            paddingTop: '15px', // Transparent bridge for hover
            minWidth: '200px',
            display: dropdownOpen ? 'block' : 'none',
            zIndex: 1100,
        },
        dropdownContent: {
            background: 'var(--bg-secondary)',
            borderRadius: '8px',
            padding: '0.5rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
        },
        dropdownItem: {
            display: 'block',
            padding: '0.75rem 1rem',
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            borderRadius: '4px',
            transition: 'all 0.2s',
        }
    };

    return (
        <nav style={styles.nav}>
            <div className="container" style={styles.container}>
                <Link to="/" style={styles.logo}>WebTools.io</Link>
                <ul style={styles.links}>
                    <li><Link to="/" style={styles.link}>ຫນ້າຫຼັກ</Link></li>

                    <li
                        style={{ position: 'relative' }}
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                        <span style={styles.link}>
                            ເຄື່ອງມື ▾
                        </span>
                        <div style={styles.dropdownWrapper}>
                            <div style={styles.dropdownContent}>
                                <Link
                                    to="/tools/video"
                                    style={styles.dropdownItem}
                                    onMouseOver={e => { e.target.style.background = 'rgba(255,255,255,0.05)'; e.target.style.color = 'var(--text-primary)'; }}
                                    onMouseOut={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--text-secondary)'; }}
                                >
                                    ໂຕແປງວີດີໂອເປັນພາບ
                                </Link>
                                <Link
                                    to="/tools/qr"
                                    style={styles.dropdownItem}
                                    onMouseOver={e => { e.target.style.background = 'rgba(255,255,255,0.05)'; e.target.style.color = 'var(--text-primary)'; }}
                                    onMouseOut={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--text-secondary)'; }}
                                >
                                    ເຈນ QR Code
                                </Link>
                            </div>
                        </div>
                    </li>

                    <li><Link to="/about" style={styles.link}>ກ່ຽວກັບຂ້ອຍຍຍ</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
