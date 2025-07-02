import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import TypewriterEffect from './animations/TypewriterEffect';
import TextReveal from './animations/TextReveal';
import GradientText from './animations/GradientText';
import WaveText from './animations/WaveText';

const Hero: React.FC = () => {
  const typewriterWords = ['EXCELLENCE', 'INNOVATION', 'CREATIVITY', 'SUCCESS'];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-ski-gray/30 to-white relative overflow-hidden">
      {/* Simplified Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, #FF6B35 1px, transparent 1px),
                           radial-gradient(circle at 80% 20%, #0A0A0A 1px, transparent 1px)`,
          backgroundSize: '100px 100px, 80px 80px',
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="flex justify-center mb-8"
            >
              <img 
                src="/logo.svg" 
                alt="SKI Logo"
                className="h-24 w-24 hover:cursor-pointer transition-transform duration-300"
              />
            </motion.div>
            
            <div className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              <WaveText 
                text="SPARK" 
                className="block text-ski-black justify-center mb-2"
                delay={0.2}
              />
              
              <div className="block text-6xl md:text-8xl lg:text-9xl font-black my-4">
                <GradientText 
                  text="KNACK" 
                  className="text-6xl md:text-8xl lg:text-9xl font-black"
                  gradient="from-ski-accent via-orange-500 to-red-500"
                />
              </div>
              
              <motion.div 
                className="block text-ski-black mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                IGNITE
              </motion.div>
            </div>

            {/* Animated subtitle with typewriter effect */}
            <div className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-700 mb-6">
              We create digital experiences with{' '}
              <TypewriterEffect
                words={typewriterWords}
                className="text-ski-accent font-bold"
                cursorClassName="text-ski-accent"
                typeSpeed={150}
                deleteSpeed={100}
                delayBetweenWords={2000}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <TextReveal
              text="We are a full-service digital marketing agency specializing in video editing, social media management, and targeted ad campaigns that drive real results for your business."
              className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light"
              delay={1.5}
              duration={0.6}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-ski-black text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 transition-all duration-300 hover:bg-ski-accent hover:shadow-lg group relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-ski-accent to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <span className="relative z-10">Start Your Campaign</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200 relative z-10" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-ski-black text-ski-black px-8 py-4 rounded-full font-medium hover:bg-ski-black hover:text-white transition-all duration-300 flex items-center gap-2 group relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-ski-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                initial={false}
              />
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-200 relative z-10" />
              <span className="relative z-10">View Our Work</span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/4 left-10 w-4 h-4 bg-ski-accent rounded-full shadow-lg"
      />
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          opacity: [0.2, 0.6, 0.2],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/4 right-10 w-6 h-6 border-2 border-ski-accent rounded-full shadow-lg"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.5, 0.2],
          rotate: [0, -180, -360]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-1/3 right-1/4 w-3 h-3 bg-ski-accent rounded-full shadow-lg"
      />
      
      {/* Additional animated elements */}
      <motion.div
        animate={{ 
          x: [0, 20, 0],
          y: [0, -10, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 0.5
        }}
        className="absolute top-1/2 left-1/4 w-2 h-2 bg-orange-400 rounded-full shadow-md"
      />
      <motion.div
        animate={{ 
          x: [0, -15, 0],
          y: [0, 25, 0],
          opacity: [0.4, 0.9, 0.4]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1.5
        }}
        className="absolute bottom-1/3 left-1/3 w-5 h-5 border border-orange-400 rounded-full shadow-md"
      />
    </section>
  );
};

export default Hero;