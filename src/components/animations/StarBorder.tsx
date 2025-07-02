import React from 'react';
import { motion } from 'framer-motion';

interface StarBorderProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

const StarBorder: React.FC<StarBorderProps> = ({ 
  children, 
  className = '',
  speed = 2 
}) => {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: `conic-gradient(from 0deg, transparent, #FF6B35, transparent)`,
          padding: '2px',
        }}
        animate={{
          rotate: 360
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-full h-full bg-white rounded-lg" />
      </motion.div>
      
      <div className="relative z-10 p-6">
        {children}
      </div>
    </div>
  );
};

export default StarBorder;