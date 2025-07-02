import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 0.8,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  const words = text.split(' ');

  return (
    <div className={`overflow-hidden ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-2 overflow-hidden">
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block"
              initial={{ y: '100%', opacity: 0 }}
              animate={isVisible ? { 
                y: '0%', 
                opacity: 1,
                transition: {
                  duration,
                  delay: (wordIndex * word.length + charIndex) * 0.05,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              } : {}}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </div>
  );
};

export default TextReveal;