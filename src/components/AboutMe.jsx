import React from 'react';

const AboutMe = () => {
    const styles = {
        section: {
            padding: '5rem 0',
        },
        content: {
            background: 'var(--bg-secondary)',
            padding: '3rem',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
        },
        title: {
            fontSize: '2rem',
            marginBottom: '1.5rem',
            color: 'var(--text-primary)',
        },
        text: {
            color: 'var(--text-secondary)',
            fontSize: '1.1rem',
            lineHeight: '1.8',
        }
    };

    return (
        <section id="about" style={styles.section}>
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div style={styles.content}>
                    <h3 style={styles.title}>ໃຫ້ເດົາວ່າແມ່ນໃຜ</h3>
                    <p style={styles.text}>
                        ໃໍຊ້ໆໄປເທາະະະ ຢ່າຢາກຮູ້ເລີຍຍ
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
