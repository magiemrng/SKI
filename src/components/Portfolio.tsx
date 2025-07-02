import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

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
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, #FF6B35 1px, transparent 1px),
                           radial-gradient(circle at 80% 20%, #0A0A0A 1px, transparent 1px)`,
          backgroundSize: '100px 100px, 80px 80px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-ski-black mb-8 tracking-tight">
            Our Work
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
            Showcasing exceptional digital experiences that have transformed businesses 
            and exceeded client expectations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300 relative h-full"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/90 p-3 rounded-full shadow-lg backdrop-blur-sm hover:bg-white transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5 text-ski-black" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/90 p-3 rounded-full shadow-lg backdrop-blur-sm hover:bg-white transition-colors duration-200"
                    >
                      <Github className="w-5 h-5 text-ski-black" />
                    </motion.button>
                  </div>
                </div>
              </div>
              
              <div className="p-6 relative">
                <div 
                  className="text-sm font-medium mb-2"
                  style={{ color: project.color }}
                >
                  {project.category}
                </div>
                
                <h3 className="text-xl font-bold text-ski-black mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-ski-gray text-xs font-medium text-gray-700 rounded-full hover:bg-gray-200 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;