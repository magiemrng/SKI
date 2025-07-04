import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Calendar, TrendingUp, Users, Award, Filter } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Social Media', 'Video Production', 'Web Development', 'Analytics', 'Advertising'];

  const projects = [
    {
      title: 'TechStart Campaign',
      category: 'Social Media',
      description: 'Complete social media overhaul with engaging video content that increased followers by 300% and engagement by 450%.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Video Editing', 'Social Media', 'Content Strategy', 'Analytics'],
      metrics: [
        { label: 'Follower Growth', value: '300%', icon: Users },
        { label: 'Engagement Rate', value: '450%', icon: TrendingUp },
        { label: 'Campaign Duration', value: '3 months', icon: Calendar },
      ],
      featured: true,
    },
    {
      title: 'EcoFashion Brand',
      category: 'Advertising',
      description: 'Influencer campaign that generated 2M+ impressions and 15% increase in sales through strategic partnerships.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Influencer Marketing', 'Brand Partnerships', 'Campaign Management', 'ROI Tracking'],
      metrics: [
        { label: 'Impressions', value: '2M+', icon: TrendingUp },
        { label: 'Sales Increase', value: '15%', icon: Award },
        { label: 'ROI', value: '340%', icon: TrendingUp },
      ],
      featured: false,
    },
    {
      title: 'FitLife App Launch',
      category: 'Advertising',
      description: 'Multi-platform ad campaign that achieved 40% lower cost-per-acquisition than industry average.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Facebook Ads', 'Google Ads', 'Conversion Optimization', 'A/B Testing'],
      metrics: [
        { label: 'CPA Reduction', value: '40%', icon: TrendingUp },
        { label: 'Conversion Rate', value: '8.5%', icon: Award },
        { label: 'Ad Spend ROI', value: '425%', icon: TrendingUp },
      ],
      featured: true,
    },
    {
      title: 'RestaurantChain Rebrand',
      category: 'Video Production',
      description: 'Complete visual rebrand with professional photography and video content across all locations.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Photography', 'Video Production', 'Brand Design', 'Content Planning'],
      metrics: [
        { label: 'Brand Recognition', value: '85%', icon: Award },
        { label: 'Customer Satisfaction', value: '92%', icon: Users },
        { label: 'Revenue Growth', value: '28%', icon: TrendingUp },
      ],
      featured: false,
    },
    {
      title: 'B2B SaaS Growth',
      category: 'Analytics',
      description: 'LinkedIn-focused campaign that generated 500+ qualified leads in 3 months with advanced analytics.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['LinkedIn Ads', 'Lead Generation', 'B2B Marketing', 'Sales Funnel'],
      metrics: [
        { label: 'Qualified Leads', value: '500+', icon: Users },
        { label: 'Conversion Rate', value: '12%', icon: TrendingUp },
        { label: 'Pipeline Value', value: '$2.5M', icon: Award },
      ],
      featured: true,
    },
    {
      title: 'Local Business Boost',
      category: 'Web Development',
      description: 'Local business website and social media management that increased foot traffic by 60%.',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Website Development', 'Local SEO', 'Google My Business', 'Review Management'],
      metrics: [
        { label: 'Foot Traffic', value: '60%', icon: Users },
        { label: 'Online Reviews', value: '4.8★', icon: Award },
        { label: 'Local Ranking', value: '#1', icon: TrendingUp },
      ],
      featured: false,
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="work" className="py-16 sm:py-24 lg:py-32 bg-ski-gray relative overflow-hidden">
      {/* Enhanced Background Elements using SKI color palette */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-ski-accent/30 to-orange-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-br from-ski-black/20 to-gray-800/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-56 sm:w-72 h-56 sm:h-72 bg-gradient-to-br from-ski-accent/20 to-ski-black/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-ski-accent/20 to-orange-500/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-ski-accent/30 mb-6 sm:mb-8"
          >
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-ski-accent" />
            <span className="text-ski-accent font-semibold text-sm sm:text-base">Success Stories</span>
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ski-black mb-6 sm:mb-8 tracking-tight px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Portfolio Showcase
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed font-light max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Showcasing successful digital marketing campaigns that have transformed brands 
            and delivered exceptional results for our clients across various industries.
          </motion.p>
        </motion.div>

        {/* Filter Tabs - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 sm:mb-16 px-4"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-1 sm:gap-2 text-sm sm:text-base ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-ski-accent to-orange-500 text-white shadow-lg'
                  : 'bg-white/80 text-gray-700 hover:bg-white border border-gray-200 hover:border-ski-accent/30'
              }`}
            >
              {category === 'All' && <Filter className="w-3 h-3 sm:w-4 sm:h-4" />}
              <span className="whitespace-nowrap">{category}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid - Fully Responsive */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`group relative ${
                  project.featured 
                    ? 'sm:col-span-2 lg:col-span-2' 
                    : 'col-span-1'
                }`}
              >
                {/* Main Card */}
                <div className="bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                  {/* Image Section */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className={`w-full object-cover ${
                        project.featured 
                          ? 'h-48 sm:h-56 lg:h-64' 
                          : 'h-40 sm:h-48'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    
                    {/* Gradient Overlay using SKI colors */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ski-black/60 via-ski-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-gradient-to-r from-ski-accent to-orange-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg"
                      >
                        Featured
                      </motion.div>
                    )}

                    {/* Hover Actions */}
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-full shadow-xl hover:bg-white transition-colors duration-200"
                      >
                        <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 text-ski-black" />
                      </motion.button>
                    </motion.div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-4 sm:p-6 lg:p-8">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <motion.div 
                        className="text-xs sm:text-sm font-medium text-ski-accent bg-ski-accent/10 px-2 sm:px-3 py-1 rounded-full border border-ski-accent/20"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      >
                        {project.category}
                      </motion.div>
                    </div>
                    
                    <motion.h3 
                      className="text-lg sm:text-xl lg:text-2xl font-bold text-ski-black mb-3 sm:mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    >
                      {project.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    >
                      {project.description}
                    </motion.p>

                    {/* Metrics - Responsive Grid */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
                      {project.metrics.map((metric, metricIndex) => (
                        <motion.div
                          key={metric.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.4, delay: 0.9 + index * 0.1 + metricIndex * 0.1 }}
                          className="text-center bg-ski-gray/50 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-gray-200/50 hover:border-ski-accent/30 transition-colors duration-300"
                        >
                          <metric.icon className="w-4 h-4 sm:w-5 sm:h-5 text-ski-accent mx-auto mb-1 sm:mb-2" />
                          <div className="text-ski-black font-bold text-sm sm:text-lg">{metric.value}</div>
                          <div className="text-gray-500 text-xs leading-tight">{metric.label}</div>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Tags - Responsive */}
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          className="px-2 sm:px-3 py-1 bg-gray-100 text-xs font-medium text-gray-600 rounded-full border border-gray-200 hover:bg-ski-accent/10 hover:text-ski-accent hover:border-ski-accent/30 transition-colors duration-200"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: 1.0 + index * 0.1 + tagIndex * 0.05 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA - Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="text-center mt-16 sm:mt-20"
        >
          <div className="bg-gradient-to-r from-ski-black to-gray-800 rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-gray-200/20 relative overflow-hidden shadow-2xl mx-4 sm:mx-0">
            <div className="absolute inset-0 bg-gradient-to-r from-ski-accent/10 to-orange-500/10" />
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to Create Your Success Story?
              </h3>
              <p className="text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
                Join our portfolio of successful brands and let us help you achieve remarkable results with our proven strategies.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-ski-accent to-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
              >
                Start Your Project
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;