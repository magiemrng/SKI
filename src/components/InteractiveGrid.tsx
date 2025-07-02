import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveGrid: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const gridItems = Array.from({ length: 64 }, (_, i) => i);

  return (
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <div className="grid grid-cols-8 gap-2 h-full w-full p-8">
        {gridItems.map((index) => (
          <motion.div
            key={index}
            className="bg-ski-accent rounded-sm"
            initial={{ opacity: 0.1 }}
            animate={{
              opacity: hoveredIndex === index ? 0.8 : 0.1,
              scale: hoveredIndex === index ? 1.2 : 1,
            }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>
    </div>
  );
};

export default InteractiveGrid;