import React from 'react';
import { motion } from 'framer-motion';

const MorphingShape: React.FC = () => {
  const pathVariants = {
    initial: {
      d: "M100,200 C100,100 200,100 200,200 C200,300 100,300 100,200 Z"
    },
    animate: {
      d: [
        "M100,200 C100,100 200,100 200,200 C200,300 100,300 100,200 Z",
        "M150,150 C50,150 50,250 150,250 C250,250 250,150 150,150 Z",
        "M200,100 C300,100 300,200 200,200 C100,200 100,100 200,100 Z",
        "M100,200 C100,100 200,100 200,200 C200,300 100,300 100,200 Z"
      ]
    }
  };

  return (
    <div className="absolute top-1/2 right-10 transform -translate-y-1/2 opacity-20">
      <svg width="300" height="300" viewBox="0 0 300 300">
        <motion.path
          variants={pathVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          fill="url(#gradient)"
          stroke="#FF6B35"
          strokeWidth="2"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0A0A0A" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default MorphingShape;