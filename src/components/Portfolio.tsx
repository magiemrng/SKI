import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Play } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'TechStart Campaign',
      category: 'Social Media & Video',
      description: 'Complete social media overhaul with engaging video content that increased followers by 300%.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Video Editing', 'Social Media', 'Content Strategy', 'Analytics'],
      color: '#3B82F6',
    },
    {
      title: 'EcoFashion Brand',
      category: 'Influencer Marketing',
      description: 'Influencer campaign that generated 2M+ impressions and 15% increase in sales.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Influencer Marketing', 'Brand Partnerships', 'Campaign Management', 'ROI Tracking'],
      color: '#10B981',
    },
    {
      title: 'FitLife App Launch',
      category: 'Paid Advertising',
      description: 'Multi-platform ad campaign that achieved 40% lower cost-per-acquisition than industry average.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Facebook Ads', 'Google Ads', 'Conversion Optimization', 'A/B Testing'],
      color: '#8B5CF6',
    },
    {
      title: 'RestaurantChain Rebrand',
      category: 'Content Creation',
      description: 'Complete visual rebrand with professional photography and video content across all locations.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Photography', 'Video Production', 'Brand Design', 'Content Planning'],
      color: '#EF4444',
    },
    {
      title: 'B2B SaaS Growth',
      category: 'LinkedIn Marketing',
      description: 'LinkedIn-focused campaign that generated 500+ qualified leads in 3 months.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['LinkedIn Ads', 'Lead Generation', 'B2B Marketing', 'Sales Funnel'],
      color: '#F59E0B',
    },
    {
      title: 'Local Business Boost',
      category: 'Community Management',
      description: 'Local business social media management that increased foot traffic by 60%.',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Community Management', 'Local SEO', 'Google My Business', 'Review Management'],
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
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-ski-black mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Work
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Showcasing successful digital marketing campaigns that have transformed brands 
            and delivered exceptional results for our clients.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
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
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
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
                     
                    </motion.button>
                  </div>
                </motion.div>
              </div>
              
              <div className="p-6 relative">
                <motion.div 
                  className="text-sm font-medium mb-2"
                  style={{ color: project.color }}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  {project.category}
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-bold text-ski-black mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 mb-4 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  {project.description}
                </motion.p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1 bg-ski-gray text-xs font-medium text-gray-700 rounded-full hover:bg-gray-200 transition-colors duration-200"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.7 + index * 0.1 + tagIndex * 0.05 }}
                    >
                      {tag}
                    </motion.span>
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