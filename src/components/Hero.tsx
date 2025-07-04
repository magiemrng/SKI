import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TypewriterEffect from './animations/TypewriterEffect';
import TextReveal from './animations/TextReveal';
import GradientText from './animations/GradientText';
import WaveText from './animations/WaveText';
import Aurora from './Aurora';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const typewriterWords = ['EXCELLENCE', 'INNOVATION', 'CREATIVITY', 'SUCCESS'];

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#FF6B35", "#0A0A0A", "#FF6B35"]}
          blend={0.3}
          amplitude={0.8}
          speed={0.3}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-ski-gray/60 to-white/90 z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-30">
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
            className="max-w-4xl mx-auto mb-12"
          >
            <TextReveal
              text="A multidisciplinary creative and technology agency committed to driving brand growth through strategic innovation, intelligent design, and data-driven solutions."
              className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light"
              delay={1.8}
              duration={0.5}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              onClick={() => navigate('/contact')}
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
              onClick={scrollToWork}
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
    </section>
  );
};

export default Hero;