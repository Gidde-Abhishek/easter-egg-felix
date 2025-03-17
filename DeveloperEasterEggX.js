// DeveloperEasterEgg.js - This file will be hosted on GitHub Gist or another service

import React, { useState, useEffect } from 'react';

// We need to include any dependencies that might not be available in the main app
// You can use CDN versions if necessary
const EasterEgg = ({ isVisible, onClose, triggerType }) => {
  const [quote, setQuote] = useState('');
  
  const quotes = [
    "The first principle is that you must not fool yourself — and you are the easiest person to fool.",
    "Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.",
    "I was born not knowing and have had only a little time to change that here and there.",
    "It doesn't matter how beautiful your theory is, it doesn't matter how smart you are. If it doesn't agree with experiment, it's wrong.",
    "We are trying to prove ourselves wrong as quickly as possible, because only in that way can we find progress.",
    "Believe in the unstoppable you.",
    "It's not about how hard you hit. It's about how hard you can get hit and keep moving forward.",
    "Just do it. Don't think, just do.",
    "Your talent determines what you can do. Your motivation determines how much you're willing to do. Your attitude determines how well you do it."
  ];
  
  useEffect(() => {
    if (isVisible) {
      // Choose a quote based on trigger type
      const randomIndex = Math.floor(Math.random() * 5);
      const quoteIndex = triggerType === 'feynman' ? 
        randomIndex : 
        5 + Math.floor(Math.random() * 4);
      
      setQuote(quotes[quoteIndex]);
      
      // Load confetti from CDN and trigger it
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js';
      script.async = true;
      script.onload = () => {
        window.confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      };
      document.body.appendChild(script);
      
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isVisible, triggerType]);
  
  if (!isVisible) return null;
  
  // Inline styles to avoid requiring imports
  const styles = {
    overlay: {
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 50
    },
    card: {
      background: 'linear-gradient(to bottom right, #2e1065, #1e40af, #4c1d95)',
      padding: '1.5rem',
      borderRadius: '0.75rem',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      maxWidth: '28rem',
      width: '100%',
      margin: '0 1rem',
      position: 'relative',
      animation: 'fadeIn 0.3s ease-out'
    },
    closeButton: {
      position: 'absolute',
      right: '0.5rem',
      top: '0.5rem',
      background: 'transparent',
      border: 'none',
      color: 'rgba(255, 255, 255, 0.7)',
      cursor: 'pointer',
      fontSize: '1.25rem',
      padding: '0.25rem'
    },
    avatar: {
      width: '6rem',
      height: '6rem',
      borderRadius: '9999px',
      background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
      marginBottom: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '1.875rem',
      fontWeight: 'bold'
    },
    name: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '0.25rem',
      textAlign: 'center'
    },
    role: {
      color: '#93c5fd',
      fontSize: '0.875rem',
      marginBottom: '1rem',
      textAlign: 'center'
    },
    quoteBox: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      padding: '1rem',
      borderRadius: '0.5rem',
      marginBottom: '1.5rem',
      width: '100%'
    },
    quote: {
      color: 'rgba(255, 255, 255, 0.9)',
      fontStyle: 'italic',
      fontSize: '0.875rem',
      textAlign: 'center'
    },
    linksGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '0.5rem',
      width: '100%',
      marginBottom: '1rem'
    },
    linkItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      padding: '0.75rem',
      borderRadius: '0.5rem',
      transition: 'background-color 0.2s',
      cursor: 'pointer',
      color: 'white',
      textDecoration: 'none'
    },
    linkIcon: {
      marginBottom: '0.25rem',
      width: '1.25rem',
      height: '1.25rem'
    },
    linkText: {
      color: 'rgba(255, 255, 255, 0.8)',
      fontSize: '0.75rem'
    },
    footer: {
      color: 'rgba(255, 255, 255, 0.5)',
      fontSize: '0.75rem',
      textAlign: 'center'
    },
    '@keyframes fadeIn': {
      from: { opacity: 0, transform: 'scale(0.8)' },
      to: { opacity: 1, transform: 'scale(1)' }
    }
  };

  // Simple SVG icons for use without importing
  const icons = {
    linkedin: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#93c5fd">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
    phone: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#86efac">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    ),
    email: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#fca5a5">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
    close: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      </svg>
    )
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.card}>
        <button style={styles.closeButton} onClick={onClose}>
          {icons.close}
        </button>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={styles.avatar}>AG</div>
          
          <h2 style={styles.name}>Abhishek Chandrakant Gidde</h2>
          <p style={styles.role}>Algorithm • Backend • Frontend • Product</p>
          
          <div style={styles.quoteBox}>
            <p style={styles.quote}>"{quote}"</p>
          </div>
          
          <div style={styles.linksGrid}>
            <a 
              href="https://www.linkedin.com/in/abhishekgidde" 
              target="_blank"
              rel="noopener noreferrer" 
              style={styles.linkItem}
            >
              {icons.linkedin}
              <span style={styles.linkText}>LinkedIn</span>
            </a>
            
            <a 
              href="tel:+919619067383" 
              style={styles.linkItem}
            >
              {icons.phone}
              <span style={styles.linkText}>Call</span>
            </a>
            
            <a 
              href="mailto:abhishek.gidde@example.com" 
              style={styles.linkItem}
            >
              {icons.email}
              <span style={styles.linkText}>Email</span>
            </a>
          </div>
          
          <p style={styles.footer}>
            You've discovered a hidden easter egg! 🎉
          </p>
        </div>
      </div>
    </div>
  );
};

export default EasterEgg;
