import { useState, useEffect } from 'react';

export function useTypewriter(text: string, speed: number = 150, startDelay: number = 0, shouldStart: boolean = true) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    if (!shouldStart) return;
    
    if (currentIndex === -1) {
      // Initial delay before starting
      const initialTimeout = setTimeout(() => {
        setCurrentIndex(0);
      }, startDelay);
      return () => clearTimeout(initialTimeout);
    }
    
    if (currentIndex >= 0 && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.substring(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, startDelay, shouldStart]);

  return displayText;
}
