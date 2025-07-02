import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import ParallaxSection from './ParallaxSection';
import GlitchText from './animations/GlitchText';
import MagnetButton from './animations/MagnetButton';
import StarBorder from './animations/StarBorder';

const Portfolio: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'TechCorp Enterprise',
      category: 'Corporate Website',
      description: 'A sophisticated corporate platform with advanced analytics and user management systems.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      color: '#3B82F6',
    },
    {
      title: 'EcoMarket',
      category: 'E-commerce Platform',
      description: 'Sustainable marketplace connecting eco-conscious consumers with green products.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'Stripe', 'MongoDB', 'Vercel'],
      color: '#10B981',
    },
    {
      title: 'FinanceFlow',
      category: 'Financial Dashboard',
      description: 'Real-time financial analytics dashboard with advanced data visualization.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Vue.js', 'D3.js', 'Express', 'Redis'],
      color: '#8B5CF6',
    },
    {
      title: 'HealthHub',
      category: 'Healthcare Platform',
      description: 'Comprehensive healthcare management system for patients and providers.',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'TypeScript', 'GraphQL', 'Docker'],
      color: '#EF4444',
    },
    {
      title: 'EduLearn',
      category: 'Learning Management',
      description: 'Interactive online learning platform with video streaming and progress tracking.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Angular', 'Firebase', 'WebRTC', 'PWA'],
      color: '#F59E0B',
    },
    {
      title: 'FoodieConnect',
      category: 'Social Platform',
      description: 'Social networking app for food enthusiasts with recipe sharing and reviews.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Supabase', 'Cloudinary', 'Expo'],
      color: '#EC4899',
    },
  ];

  return (
    <section id="work" className="py-32 bg-ski-gray relative overflow-hidden">
      {/* Enhanced 3D Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? '#FF6B35' : '#0A0A0A',
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 2, 1],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <ParallaxSection>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <GlitchText
              text="Our Work"
              className="text-4xl md:text-6xl font-bold text-ski-black mb-8 tracking-tight"
            />
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto"
              initial={{ filter: 'blur(10px)', opacity: 0 }}
              animate={inView ? { filter: 'blur(0px)', opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Showcasing exceptional digital experiences that have transformed businesses 
              and exceeded client expectations.
            </motion.p>
          </motion.div>
        </ParallaxSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <StarBorder key={project.title} speed={1.5 + index * 0.3}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ 
                  y: -20,
                  rotateX: 10,
                  rotateY: 10,
                  scale: 1.02,
                }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-500 relative h-full"
                style={{ 
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.3 }}
                    transition={{ duration: 0.8 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
                    whileHover={{ backdropFilter: "blur(4px)" }}
                  >
                    <div className="flex gap-4">
                      <MagnetButton
                        className="bg-white/90 p-3 rounded-full shadow-lg backdrop-blur-sm hover:bg-white"
                        strength={10}
                      >
                        <ExternalLink className="w-5 h-5 text-ski-black" />
                      </MagnetButton>
                      <MagnetButton
                        className="bg-white/90 p-3 rounded-full shadow-lg backdrop-blur-sm hover:bg-white"
                        strength={10}
                      >
                        <Github className="w-5 h-5 text-ski-black" />
                      </MagnetButton>
                    </div>
                  </motion.div>
                </div>
                
                <div className="p-6 relative">
                  <motion.div 
                    className="text-sm font-medium mb-2"
                    style={{ color: project.color }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.category}
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl font-bold text-ski-black mb-3"
                    whileHover={{ color: project.color }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1 bg-ski-gray text-xs font-medium text-gray-700 rounded-full"
                        whileHover={{ 
                          backgroundColor: project.color,
                          color: 'white',
                          scale: 1.1
                        }}
                        transition={{ duration: 0.2 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.1 + tagIndex * 0.1 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Enhanced Floating Particles */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-100"
                      style={{ 
                        backgroundColor: project.color,
                        top: `${10 + i * 15}%`,
                        right: `${5 + i * 3}%`,
                      }}
                      animate={{
                        scale: [1, 3, 1],
                        opacity: [0.3, 1, 0.3],
                        rotate: [0, 180, 360]
                      }}
                      transition={{
                        duration: 2 + i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </StarBorder>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;