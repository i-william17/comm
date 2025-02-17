import React from 'react';
import backgroundImage from '../assets/3.jpg';
import './Hero.css';
import TypingEffect from 'react-typing-effect';
import { useInView } from 'react-intersection-observer';
import Particles from 'react-tsparticles';
import { particlesConfig } from '../particle-config';
import { Link } from 'react-scroll';

const Hero = () => {
  const { ref: headingRef, inView: isHeadingVisible } = useInView({ triggerOnce: true });
  const { ref: paragraphRef, inView: isParagraphVisible } = useInView({ triggerOnce: true });

  const heroStyle = {
    minHeight: '100vh',
    background: `linear-gradient(rgba(0, 0, 2, 0.7), rgba(0, 0, 2, 0.7)), url(${backgroundImage}) no-repeat center center/cover`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    padding: '0 20px',
    boxSizing: 'border-box',
    overflow: 'hidden',
    position: 'relative',
  };

  const headingStyle = {
    fontSize: 'clamp(3.5rem, 5vw, 5rem)',
    fontWeight: '800',
    margin: '0',
    textShadow: '4px 4px 8px rgba(0, 0, 0, 0.9)',
    lineHeight: '1.1',
    letterSpacing: '2px',
    maxWidth: '80%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    borderRight: '3px solid rgba(255,255,255,0.75)',
    display: 'block',
    opacity: isHeadingVisible ? 1 : 0,
    transition: 'opacity 1s ease-in-out',
  };

  const paragraphStyle = {
    fontSize: 'clamp(1.3rem, 2vw, 1.8rem)',
    margin: '20px 0 50px',
    textShadow: '2px 2px 6px rgba(0, 0, 0, 0.9)',
    maxWidth: '75%',
    opacity: isParagraphVisible ? 1 : 0,
    transition: 'opacity 1s ease-in-out',
    animation: 'fadeInUp 1.5s ease-in-out forwards',
  };

  const buttonStyle = {
    padding: '14px 32px',
    fontSize: '1.3rem',
    border: 'none',
    borderRadius: '50px',
    background: 'linear-gradient(90deg, #007BFF, #0056b3)',
    color: 'white',
    cursor: 'pointer',
    marginTop: '30px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.4)',
  };

  const buttonHoverStyle = {
    background: 'linear-gradient(90deg, #0056b3, #004494)',
    transform: 'translateY(-5px) scale(1.07)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.5)',
  };

  const scrollButtonStyle = {
    position: 'absolute',
    bottom: '20px',
    background: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '2rem',
    cursor: 'pointer',
    animation: 'bounce 2s infinite',
  };

  return (
    <div style={heroStyle}>
      <Particles params={particlesConfig} />
      <video autoPlay loop muted className="background-video">
        <source src="../assets/background-video.mp4" type="video/mp4" />
      </video>
      <h3 ref={headingRef} style={headingStyle}>
        <TypingEffect
          text={['Welcome to Our Website', 'Explore Our Services', 'Discover Opportunities']}
          speed={100}
          eraseSpeed={50}
          typingDelay={500}
          eraseDelay={2000}
        />
      </h3>
      <p ref={paragraphRef} style={paragraphStyle}>
        A cutting-edge health center combines state-of-the-art<br />
        technology and innovative treatments<br />
        for superior patient care.
      </p>
      <button
        style={buttonStyle}
        onMouseOver={(e) => {
          e.currentTarget.style.background = buttonHoverStyle.background;
          e.currentTarget.style.transform = buttonHoverStyle.transform;
          e.currentTarget.style.boxShadow = buttonHoverStyle.boxShadow;
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background = buttonStyle.background;
          e.currentTarget.style.transform = 'none';
          e.currentTarget.style.boxShadow = buttonStyle.boxShadow;
        }}
      >
        Get Started
      </button>

      {/* Scroll Button */}
      <Link to="next-section" smooth={true} duration={500} style={scrollButtonStyle}>
        ↓
      </Link>
    </div>
  );
};

export default Hero;
