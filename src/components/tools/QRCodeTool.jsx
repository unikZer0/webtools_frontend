import React, { useState } from 'react';
import QRCode from 'qrcode';

const QRCodeTool = () => {
    const [text, setText] = useState('');
    const [qrUrl, setQrUrl] = useState('');

    const generateQR = async () => {
        if (!text) return;
        try {
            const url = await QRCode.toDataURL(text, {
                width: 400,
                margin: 2,
                color: {
                    dark: '#000000',
                    light: '#ffffff'
                }
            });
            setQrUrl(url);
        } catch (err) {
            console.error(err);
        }
    };

    const downloadQR = () => {
        if (!qrUrl) return;
        const a = document.createElement('a');
        a.href = qrUrl;
        a.download = 'qrcode.png';
        document.body.appendChild(a);
        a.click();
        a.remove();
    };

    const styles = {
        card: {
            background: 'var(--bg-secondary)',
            padding: '2rem',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            textAlign: 'center',
            maxWidth: '500px',
            margin: '2rem auto',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        },
        input: {
            width: '100%',
            padding: '1rem',
            background: 'var(--bg-primary)',
            border: '1px solid var(--text-secondary)',
            borderRadius: '8px',
            color: 'var(--text-primary)',
            margin: '1.5rem 0',
            fontSize: '1rem',
        },
        button: {
            background: 'var(--gradient-main)',
            color: 'white',
            padding: '0.8rem 2rem',
            borderRadius: '50px',
            fontSize: '1rem',
            fontWeight: '600',
            width: '100%',
            marginBottom: '1rem',
        },
        imgContainer: {
            marginTop: '1.5rem',
            padding: '1rem',
            background: 'white',
            borderRadius: '8px',
            display: qrUrl ? 'inline-block' : 'none',
        },
        downloadBtn: {
            background: 'transparent',
            border: '1px solid var(--accent-primary)',
            color: 'var(--accent-primary)',
            padding: '0.5rem 1.5rem',
            borderRadius: '50px',
            marginTop: '1rem',
            transition: 'all 0.2s',
        }
    };

    return (
        <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h2 className="section-title">ໂຕແປງ QR Code</h2>
                <p style={{ color: 'var(--text-secondary)' }}>ແປງລິ້ງ ຫຼືຂໍ້ຄວາມເປັນ QR Code </p>
            </div>

            <div style={styles.card}>
                <input
                    type="text"
                    placeholder="ໃສ່ລິ້ງ ຫຼື ຂໍ້ຄວາມ..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    style={styles.input}
                />

                <button onClick={generateQR} style={styles.button}>
                    ເຈນ QR Code
                </button>

                {qrUrl && (
                    <div>
                        <div style={styles.imgContainer}>
                            <img src={qrUrl} alt="QR Code" style={{ maxWidth: '100%' }} />
                        </div>
                        <br />
                        <button
                            onClick={downloadQR}
                            style={styles.downloadBtn}
                            onMouseOver={(e) => {
                                e.target.style.background = 'var(--accent-primary)';
                                e.target.style.color = 'white';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.background = 'transparent';
                                e.target.style.color = 'var(--accent-primary)';
                            }}
                        >
                            ໂຫຼດຮູບ
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QRCodeTool;
