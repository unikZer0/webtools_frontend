import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Category from './components/Category';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import VideoConverterTool from './components/tools/VideoConverterTool';
import QRCodeTool from './components/tools/QRCodeTool';

const HomePage = () => {
  const styles = {
    hero: {
      padding: '8rem 0 4rem 0',
      textAlign: 'center',
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: '800',
      marginBottom: '1rem',
      lineHeight: '1.2',
    },
    heroSubtitle: {
      fontSize: '1.2rem',
      color: 'var(--text-secondary)',
      maxWidth: '600px',
      margin: '0 auto',
    }
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section id="home" style={styles.hero}>
        <div className="container">
          <h1 style={styles.heroTitle}>
            ເວັບເຄື່ອງມືຊິວໆ ສຳລັບຄົນຊິວໆ <br />
            <span style={{
              background: 'var(--gradient-main)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              ໃຜກາໃຊ້ໄດ້ນະນ້ອງ
            </span>
          </h1>
          <p style={styles.heroSubtitle}>
            ໃຊ້ໆໄປເທາະ ຢ່າໄປຕື່ນ
          </p>
        </div>
      </section>

      <Category />
    </div>
  );
};

const ToolWrapper = ({ children }) => (
  <div style={{ paddingTop: '8rem', minHeight: '80vh' }} className="animate-fade-in">
    {children}
  </div>
);

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={
          <ToolWrapper>
            <AboutMe />
          </ToolWrapper>
        } />
        <Route path="/tools/video" element={
          <ToolWrapper>
            <div className="container" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 className="section-title">ໂຕແປງວີດີໂອເປັນພາບ</h2>
            </div>
            <VideoConverterTool />
          </ToolWrapper>
        } />
        <Route path="/tools/qr" element={
          <ToolWrapper>
            <QRCodeTool />
          </ToolWrapper>
        } />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
