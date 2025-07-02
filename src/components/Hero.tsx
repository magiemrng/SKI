import React from 'react';
import { motion } from 'framer-motion';

import Scene3D from './3D/Scene3D';
import MorphingShape from './MorphingShape';
import InteractiveGrid from './InteractiveGrid';
import SplitText from './animations/SplitText';
import GradientText from './animations/GradientText';
import MagnetButton from './animations/MagnetButton';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Enhanced 3D Background */}
      <Scene3D />
      
      {/* Interactive Grid */}
      <InteractiveGrid />
      
      {/* Morphing Shape */}
      <MorphingShape />
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-ski-gray/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
           
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex justify-center mb-2"
            >
              <img 
                src="/logo.svg" 
                alt="SKI Logo"
                className="h-32 w-32 hover:cursor-pointer transition-transform duration-300"
              />
            </motion.div>
            
            <div className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              <SplitText 
                text="SPARK" 
                className="block text-ski-black"
                delay={0.2}
                stagger={0.08}
              />
              <GradientText 
                text="KNACK" 
                className="block text-6xl md:text-8xl lg:text-9xl font-black my-4"
                gradient="from-ski-accent via-orange-500 to-red-500"
              />
              <SplitText 
                text="IGNITE" 
                className="block text-ski-black"
                delay={1}
                stagger={0.08}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <SplitText
              text="We build unique and standout websites that outshine your competitors. Premium web development that sparks engagement, ignites growth."
              className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light"
              delay={1.5}
              stagger={0.02}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <MagnetButton
              className="bg-ski-black text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 transition-all duration-300 hover:shadow-lg relative overflow-hidden group hover:bg-ski-accent"
              strength={15}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-ski-accent to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <span className="relative z-10">Start Your Project</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10"
              >
                
              </motion.div>
            </MagnetButton>
            
            <MagnetButton
              className="border-2 border-ski-black text-ski-black px-8 py-4 rounded-full font-medium hover:bg-ski-black hover:text-white transition-all duration-300 relative overflow-hidden group"
              strength={12}
            >
              <motion.div
                className="absolute inset-0 bg-ski-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                initial={false}
              />
              <span className="relative z-10">View Our Work</span>
            </MagnetButton>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.4, 1]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/4 left-10 w-6 h-6 bg-gradient-to-r from-ski-accent to-orange-500 rounded-full opacity-70 shadow-2xl"
      />
      <motion.div
        animate={{ 
          y: [0, 25, 0],
          x: [0, 15, 0],
          rotate: [0, -180, -360]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-1/4 right-10 w-8 h-8 border-3 border-ski-accent rounded-full opacity-50 shadow-2xl"
      />
      <motion.div
        animate={{ 
          scale: [1, 2, 1],
          opacity: [0.3, 0.9, 0.3],
          rotate: [0, 360, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/3 right-1/4 w-4 h-4 bg-gradient-to-r from-ski-accent to-orange-500 rounded-full shadow-xl"
      />
    </section>
  );
};

export default Hero;