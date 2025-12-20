import React from 'react';
import { Link } from 'react-router-dom';

const ToolCard = ({ title, description, to, icon }) => {
    const styles = {
        card: {
            background: 'var(--bg-secondary)',
            padding: '2rem',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            textDecoration: 'none',
            display: 'block',
            cursor: 'pointer',
        },
        title: {
            fontSize: '1.5rem',
            marginBottom: '0.5rem',
            color: 'var(--text-primary)',
            fontWeight: '600',
        },
        desc: {
            color: 'var(--text-secondary)',
            fontSize: '1rem',
            lineHeight: '1.5',
        },
        icon: {
            fontSize: '2.5rem',
            marginBottom: '1rem',
            display: 'block',
        }
    };

    return (
        <Link
            to={to}
            style={styles.card}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 20px -5px rgba(0, 0, 0, 0.2)';
                e.currentTarget.style.borderColor = 'var(--accent-primary)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
            }}
        >
            <span style={styles.icon}>{icon}</span>
            <h3 style={styles.title}>{title}</h3>
            <p style={styles.desc}>{description}</p>
        </Link>
    );
};

const Category = () => {
    const styles = {
        section: {
            padding: '5rem 0',
            background: 'var(--bg-primary)',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginTop: '2rem',
        }
    };

    return (
        <section id="categories" style={styles.section}>
            <div className="container">
                <h2 className="section-title">ເຄື່ອງມືໆໆ</h2>
                <div style={styles.grid}>
                    <ToolCard
                        to="/tools/video"
                        title="ແປງວີດີໂອເປັນພາບ"
                        description="ໃຊ້ງ່າຍໆຍັດວີດີໂອໃສ່ ແປງຕໍ່ວິຕໍ່ຮູບ 1."
                    />
                    <ToolCard
                        to="/tools/qr"
                        title="ເຈນ QR Code"
                        description="ສ້າງຄິວອາຈາກລິ້ງ ຫຼື ຂໍ້ຄວາມເປັນ QR."
                    />
                    <ToolCard
                        to="/tools/image"
                        title="ແປງຮູບພາບ"
                        description="ແປງຮູບ HEIC, JPG ເປັນ PNG."
                    />
                </div>
            </div>
        </section>
    );
};

export default Category;
