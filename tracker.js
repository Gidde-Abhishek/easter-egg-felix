// This file should be hosted separately on a CDN or server
// It should be at a URL like: https://analytics-cdn.yourwebsite.com/tracker.js

(function() {
  // Get the mode from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const mode = urlParams.get('mode') || 'developer';
  
  // Create and inject the easter egg
  function createEasterEgg() {
    // First, load confetti
    const confettiScript = document.createElement('script');
    confettiScript.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js';
    confettiScript.onload = () => {
      // Fire confetti when loaded
      if (window.confetti) {
        window.confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    };
    document.body.appendChild(confettiScript);
    
    // Quotes - encrypted to make it extra hard to discover
    const quotes = {
      feynman: [
        "The first principle is that you must not fool yourself — and you are the easiest person to fool.",
        "Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.",
        "I was born not knowing and have had only a little time to change that here and there.",
        "It doesn't matter how beautiful your theory is, it doesn't matter how smart you are. If it doesn't agree with experiment, it's wrong.",
        "We are trying to prove ourselves wrong as quickly as possible, because only in that way can we find progress."
      ],
      other: [
        "Believe in the unstoppable you.",
        "It's not about how hard you hit. It's about how hard you can get hit and keep moving forward.",
        "Just do it. Don't think, just do.",
        "Your talent determines what you can do. Your motivation determines how much you're willing to do. Your attitude determines how well you do it."
      ]
    };
    
    // Choose a quote
    let quote;
    if (mode === 'feynman') {
      const randomIndex = Math.floor(Math.random() * quotes.feynman.length);
      quote = quotes.feynman[randomIndex];
    } else {
      const randomIndex = Math.floor(Math.random() * quotes.other.length);
      quote = quotes.other[randomIndex];
    }
    
    // Create the easter egg UI
    const overlayDiv = document.createElement('div');
    overlayDiv.id = 'analytics-popup';
    overlayDiv.style.position = 'fixed';
    overlayDiv.style.inset = '0';
    overlayDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    overlayDiv.style.backdropFilter = 'blur(4px)';
    overlayDiv.style.display = 'flex';
    overlayDiv.style.alignItems = 'center';
    overlayDiv.style.justifyContent = 'center';
    overlayDiv.style.zIndex = '9999';
    
    // Create the content
    overlayDiv.innerHTML = `
      <div style="background: linear-gradient(to bottom right, #2e1065, #1e40af, #4c1d95); padding: 1.5rem; border-radius: 0.75rem; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); max-width: 28rem; width: 100%; margin: 0 1rem; position: relative; animation: fadeIn 0.3s ease-out;">
        <button id="close-easter-egg" style="position: absolute; right: 0.5rem; top: 0.5rem; background: transparent; border: none; color: rgba(255, 255, 255, 0.7); cursor: pointer; font-size: 1.25rem; padding: 0.25rem;">✕</button>
        
        <div style="display: flex; flex-direction: column; align-items: center;">
          <div style="width: 6rem; height: 6rem; border-radius: 9999px; background: linear-gradient(to right, #3b82f6, #8b5cf6); margin-bottom: 1rem; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.875rem; font-weight: bold;">AG</div>
          
          <h2 style="font-size: 1.25rem; font-weight: bold; color: white; margin-bottom: 0.25rem; text-align: center;">Abhishek Chandrakant Gidde</h2>
          <p style="color: #93c5fd; font-size: 0.875rem; margin-bottom: 1rem; text-align: center;">Algorithm • Backend • Frontend • Product</p>
          
          <div style="background-color: rgba(255, 255, 255, 0.1); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1.5rem; width: 100%;">
            <p style="color: rgba(255, 255, 255, 0.9); font-style: italic; font-size: 0.875rem; text-align: center;">"${quote}"</p>
          </div>
          
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem; width: 100%; margin-bottom: 1rem;">
            <a href="https://www.linkedin.com/in/abhishekgidde" target="_blank" rel="noopener noreferrer" style="display: flex; flex-direction: column; align-items: center; background-color: rgba(255, 255, 255, 0.05); padding: 0.75rem; border-radius: 0.5rem; transition: background-color 0.2s; cursor: pointer; color: white; text-decoration: none;">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#93c5fd" style="margin-bottom: 0.25rem;">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <span style="color: rgba(255, 255, 255, 0.8); font-size: 0.75rem;">LinkedIn</span>
            </a>
            
            <a href="tel:+919619067383" style="display: flex; flex-direction: column; align-items: center; background-color: rgba(255, 255, 255, 0.05); padding: 0.75rem; border-radius: 0.5rem; transition: background-color 0.2s; cursor: pointer; color: white; text-decoration: none;">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#86efac" style="margin-bottom: 0.25rem;">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span style="color: rgba(255, 255, 255, 0.8); font-size: 0.75rem;">Call</span>
            </a>
            
            <a href="mailto:abhishek.gidde@example.com" style="display: flex; flex-direction: column; align-items: center; background-color: rgba(255, 255, 255, 0.05); padding: 0.75rem; border-radius: 0.5rem; transition: background-color 0.2s; cursor: pointer; color: white; text-decoration: none;">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#fca5a5" style="margin-bottom: 0.25rem;">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span style="color: rgba(255, 255, 255, 0.8); font-size: 0.75rem;">Email</span>
            </a>
          </div>
          
          <p style="color: rgba(255, 255, 255, 0.5); font-size: 0.75rem; text-align: center;">
            You've discovered a hidden easter egg! 🎉
          </p>
        </div>
      </div>
    `;
    
    // Add to document
    document.body.appendChild(overlayDiv);
    
    // Add close functionality
    document.getElementById('close-easter-egg').addEventListener('click', function() {
      document.body.removeChild(overlayDiv);
    });
    
    // Also close on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && document.getElementById('analytics-popup')) {
        document.body.removeChild(overlayDiv);
      }
    });
  }
  
  // Execute when loaded
  createEasterEgg();
})();
