import React from 'react';

const Footer = () => {
    const styles = {
        footer: {
            background: 'var(--bg-secondary)',
            padding: '3rem 0',
            marginTop: '5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        },
        text: {
            color: 'var(--text-secondary)',
            textAlign: 'center',
            fontSize: '0.9rem',
        }
    };

    return (
        <footer style={styles.footer}>
            <div className="container">
                <p style={styles.text}>&copy; {new Date().getFullYear()} WebTools.io. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
