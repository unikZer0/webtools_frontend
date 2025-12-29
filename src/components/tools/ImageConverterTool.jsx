import React, { useState } from 'react';

const ImageConverterTool = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [converting, setConverting] = useState(false);
    const [downloadUrl, setDownloadUrl] = useState(null);
    const [error, setError] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFiles(e.target.files);
        setDownloadUrl(null);
        setError(null);
    };

    const handleConvert = async () => {
        if (selectedFiles.length === 0) {
            setError("ກະລຸນາເລືອກໄຟລ໌ກ່ອນ"); // Please select a file first
            return;
        }

        setConverting(true);
        setError(null);

        const formData = new FormData();
        for (let i = 0; i < selectedFiles.length; i++) {
            formData.append('files', selectedFiles[i]);
        }

        try {
            const response = await fetch('http://webtools.uniqueahh.site/convert-image', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Conversion failed');
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            setDownloadUrl(url);
        } catch (err) {
            console.error("Conversion error:", err);
            setError("ເກີດຂໍ້ຜິດພາດໃນການແປງໄຟລ໌ " + err.message); // Error during conversion
        } finally {
            setConverting(false);
        }
    };

    const styles = {
        toolContainer: {
            background: 'var(--card-bg)',
            borderRadius: '16px',
            padding: '2rem',
            maxWidth: '600px',
            margin: '0 auto',
            border: '1px solid var(--border-color)',
        },
        dropZone: {
            border: '2px dashed var(--border-color)',
            borderRadius: '12px',
            padding: '3rem 1.5rem',
            textAlign: 'center',
            cursor: 'pointer',
            marginBottom: '1.5rem',
            transition: 'border-color 0.3s ease',
            background: 'rgba(255,255,255,0.02)',
        },
        button: {
            width: '100%',
            padding: '1rem',
            background: 'var(--gradient-main)',
            border: 'none',
            borderRadius: '8px',
            color: 'white',
            fontWeight: '600',
            fontSize: '1rem',
            cursor: converting ? 'not-allowed' : 'pointer',
            opacity: converting ? 0.7 : 1,
            transition: 'transform 0.2s',
        },
        resultArea: {
            marginTop: '1.5rem',
            padding: '1rem',
            background: 'var(--bg-secondary)',
            borderRadius: '8px',
            textAlign: 'center',
            animation: 'fadeIn 0.5s ease',
        },
        downloadLink: {
            display: 'inline-block',
            marginTop: '0.5rem',
            color: 'var(--primary-color)',
            textDecoration: 'none',
            fontWeight: '500',
            paddingBottom: '2px',
            borderBottom: '1px solid var(--primary-color)'
        }
    };

    return (
        <div style={styles.toolContainer}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>ແປງຮູບພາບເປັນ PNG</h2>
                <p style={{ color: 'var(--text-secondary)' }}>
                    ຮອງຮັບ JPG, HEIC, HEIF, WEBP ແລະອື່ນໆ
                </p>
            </div>

            <div style={{ ...styles.dropZone, textAlign: 'left', display: 'flex', alignItems: 'center' }}>
                <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    accept=".jpg,.jpeg,.png,.bmp,.webp,.tiff,.gif,.heic,.heif"
                    style={{ fontSize: '1rem' }}
                />
            </div>

            {error && (
                <div style={{
                    padding: '1rem',
                    background: 'rgba(255,0,0,0.1)',
                    color: '#ff4444',
                    borderRadius: '8px',
                    marginBottom: '1rem',
                    textAlign: 'center'
                }}>
                    {error}
                </div>
            )}

            <button
                onClick={handleConvert}
                style={styles.button}
                disabled={converting || selectedFiles.length === 0}
            >
                {converting ? 'ກຳລັງແປງ...' : 'ເລີ່ມແປງໄຟລ໌'}
            </button>

            {downloadUrl && (
                <div style={styles.resultArea}>
                    <p> ແປງໄຟລ໌ສຳເລັດແລ້ວ!</p>
                    <a
                        href={downloadUrl}
                        download="converted_images.zip"
                        style={styles.downloadLink}
                    >
                        ດາວໂຫລດໄຟລ໌ (ZIP)
                    </a>
                </div>
            )}
        </div>
    );
};

export default ImageConverterTool;
