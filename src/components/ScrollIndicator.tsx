import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-ski-accent via-orange-500 to-red-500 z-50 origin-left"
      style={{
        scaleX: scrollProgress,
        transformOrigin: '0%',
      }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: scrollProgress }}
      // 🎛️ SCROLL INDICATOR SPEED - adjust duration for faster/slower response:
      transition={{ duration: 0.05, ease: 'easeOut' }} // Lower = faster response
    />
  );
};

export default ScrollIndicator;