import React, { useState } from 'react';

const VideoConverterTool = () => {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleUpload = async () => {
        if (!file) {
            alert("ໃສ່ວີດີໂອແມ້ນ້ອງ....");
            return;
        }

        setLoading(true);
        setMessage("ຖ້າແປບບບບ...");

        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await fetch(
                            "http://localhost:8000/video-to-frames-zip",
                            {
                            method: "POST",
                            body: formData,
                            }
  );

            if (!res.ok) throw new Error("Upload failed");

            const blob = await res.blob();

            // Auto download ZIP
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "frames.zip";
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);

            setMessage(" Download started!");
        } catch (err) {
            console.error(err);
            setMessage("❌ Error processing video");
        } finally {
            setLoading(false);
        }
    };

    const styles = {
        card: {
            background: 'var(--bg-secondary)',
            padding: '2rem',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            textAlign: 'center',
            maxWidth: '500px',
            margin: '0 auto',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
        input: {
            display: 'block',
            width: '100%',
            padding: '1rem',
            background: 'var(--bg-primary)',
            border: '2px dashed var(--text-secondary)',
            borderRadius: '8px',
            color: 'var(--text-primary)',
            margin: '1.5rem 0',
            cursor: 'pointer',
        },
        button: {
            background: 'var(--gradient-main)',
            color: 'white',
            padding: '0.8rem 2rem',
            borderRadius: '50px',
            fontSize: '1rem',
            fontWeight: '600',
            transition: 'transform 0.2s ease, opacity 0.2s ease',
            width: '100%',
        },
        message: {
            marginTop: '1rem',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
        }
    };

    return (
        <div style={styles.card}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>ວີດີໂອ → ເຟມ (ZIP)</h3>
            <p style={{ color: 'var(--text-secondary)' }}>ແປງວີດີໂອເປັນຮູບລະກາອັດເປັນ ZIP</p>

            <input
                type="file"
                accept="video/*"
                onChange={(e) => setFile(e.target.files[0])}
                style={styles.input}
            />

            <button
                onClick={handleUpload}
                disabled={loading}
                style={{ ...styles.button, opacity: loading ? 0.7 : 1 }}
            >
                {loading ? "ຖ້າແປບບບ..." : "ໃສ່ວີດີໂອລະກາໂຫລດ"}
            </button>

            {message && <p style={styles.message}>{message}</p>}
        </div>
    );
};

export default VideoConverterTool;
