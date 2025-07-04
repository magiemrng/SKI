import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Video, Users, Target, BarChart, Camera, Megaphone } from 'lucide-react';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Video,
      title: 'Video Editing & Production',
      description: 'Professional video editing services that transform raw footage into compelling stories that engage and convert.',
      features: ['Motion Graphics', 'Color Grading', 'Audio Enhancement', 'Brand Integration'],
      color: '#3B82F6',
    },
    {
      icon: Users,
      title: 'Social Media Management',
      description: 'Complete social media management to build your brand presence and engage with your audience effectively.',
      features: ['Content Strategy', 'Community Management', 'Posting Schedule', 'Analytics Reporting'],
      color: '#EC4899',
    },
    {
      icon: Target,
      title: 'Targeted Ad Campaigns',
      description: 'Data-driven advertising campaigns across platforms that maximize ROI and reach your ideal customers.',
      features: ['Facebook Ads', 'Google Ads', 'Instagram Campaigns', 'LinkedIn Marketing'],
      color: '#10B981',
    },
    {
      icon: Camera,
      title: 'Content Creation',
      description: 'High-quality content creation including photography, videography, and graphic design for all platforms.',
      features: ['Product Photography', 'Brand Videos', 'Graphic Design', 'Content Planning'],
      color: '#F59E0B',
    },
    {
      icon: Megaphone,
      title: 'Influencer Marketing',
      description: 'Strategic influencer partnerships that amplify your brand message and reach new audiences authentically.',
      features: ['Influencer Outreach', 'Campaign Management', 'Performance Tracking', 'Brand Partnerships'],
      color: '#6366F1',
    },
    {
      icon: BarChart,
      title: 'Analytics & Optimization',
      description: 'Comprehensive analytics and optimization services to measure success and continuously improve performance.',
      features: ['Performance Analytics', 'A/B Testing', 'Conversion Tracking', 'ROI Analysis'],
      color: '#8B5CF6',
    },
  ];

  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      {/* Simplified Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #FF6B35 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, #0A0A0A 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px, 40px 40px',
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
            Our Services
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive digital marketing services designed to elevate your brand presence and drive measurable business growth.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-ski-gray p-8 rounded-2xl group hover:shadow-xl transition-all duration-300 relative overflow-hidden h-full border border-gray-100"
            >
              {/* Subtle Hover Effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"
                style={{ backgroundColor: service.color }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
              />
              
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-xl shadow-md mb-6 group-hover:shadow-lg transition-shadow duration-300 relative z-10"
              >
                <service.icon className="w-8 h-8 text-ski-accent" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-ski-black mb-4 relative z-10">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                {service.description}
              </p>
              
              <ul className="space-y-2 relative z-10">
                {service.features.map((feature, idx) => (
                  <motion.li 
                    key={idx} 
                    className="text-sm text-gray-500 flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 + idx * 0.05 }}
                  >
                    <div className="w-1.5 h-1.5 bg-ski-accent rounded-full mr-3" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;