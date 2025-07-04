import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Video, Users, Target, BarChart, Camera, Megaphone, ArrowRight, CheckCircle } from 'lucide-react';
import CardSwap from './animations/CardSwap';

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
      benefits: [
        'Increase engagement by 300%',
        'Professional quality output',
        'Fast turnaround time',
        'Unlimited revisions'
      ],
      pricing: 'Starting at $500/video'
    },
    {
      icon: Users,
      title: 'Social Media Management',
      description: 'Complete social media management to build your brand presence and engage with your audience effectively.',
      features: ['Content Strategy', 'Community Management', 'Posting Schedule', 'Analytics Reporting'],
      color: '#EC4899',
      benefits: [
        'Grow followers by 200%+',
        'Daily content creation',
        '24/7 community management',
        'Monthly strategy reports'
      ],
      pricing: 'Starting at $800/month'
    },
    {
      icon: Target,
      title: 'Targeted Ad Campaigns',
      description: 'Data-driven advertising campaigns across platforms that maximize ROI and reach your ideal customers.',
      features: ['Facebook Ads', 'Google Ads', 'Instagram Campaigns', 'LinkedIn Marketing'],
      color: '#10B981',
      benefits: [
        'Average 4x ROAS',
        'Precise audience targeting',
        'A/B tested creatives',
        'Real-time optimization'
      ],
      pricing: 'Starting at $1000/month'
    },
    {
      icon: Camera,
      title: 'Content Creation',
      description: 'High-quality content creation including photography, videography, and graphic design for all platforms.',
      features: ['Product Photography', 'Brand Videos', 'Graphic Design', 'Content Planning'],
      color: '#F59E0B',
      benefits: [
        'Professional equipment',
        'Creative direction included',
        'Multiple format delivery',
        'Brand consistency'
      ],
      pricing: 'Starting at $300/shoot'
    },
    {
      icon: Megaphone,
      title: 'Influencer Marketing',
      description: 'Strategic influencer partnerships that amplify your brand message and reach new audiences authentically.',
      features: ['Influencer Outreach', 'Campaign Management', 'Performance Tracking', 'Brand Partnerships'],
      color: '#6366F1',
      benefits: [
        'Vetted influencer network',
        'Authentic partnerships',
        'Campaign performance tracking',
        'Negotiated rates'
      ],
      pricing: 'Starting at $1500/campaign'
    },
    {
      icon: BarChart,
      title: 'Analytics & Optimization',
      description: 'Comprehensive analytics and optimization services to measure success and continuously improve performance.',
      features: ['Performance Analytics', 'A/B Testing', 'Conversion Tracking', 'ROI Analysis'],
      color: '#8B5CF6',
      benefits: [
        'Data-driven insights',
        'Monthly performance reports',
        'Continuous optimization',
        'ROI tracking'
      ],
      pricing: 'Starting at $400/month'
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
              className="h-96"
            >
              <CardSwap
                frontContent={
                  <div className="bg-ski-gray p-8 rounded-2xl h-full border border-gray-100 relative overflow-hidden">
                    {/* Subtle Hover Effect */}
                    <div
                      className="absolute inset-0 opacity-5 rounded-2xl"
                      style={{ backgroundColor: service.color }}
                    />
                    
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-xl shadow-md mb-6 relative z-10">
                      <service.icon className="w-8 h-8 text-ski-accent" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-ski-black mb-4 relative z-10">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 relative z-10">
                      {service.features.map((feature, idx) => (
                        <li 
                          key={idx} 
                          className="text-sm text-gray-500 flex items-center"
                        >
                          <div className="w-1.5 h-1.5 bg-ski-accent rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="absolute bottom-4 right-4 text-ski-accent opacity-50">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                }
                backContent={
                  <div className="bg-gradient-to-br from-ski-black to-gray-800 p-8 rounded-2xl h-full border border-gray-700 text-white relative overflow-hidden">
                    {/* Accent gradient overlay */}
                    <div
                      className="absolute inset-0 opacity-10 rounded-2xl"
                      style={{ 
                        background: `linear-gradient(135deg, ${service.color}20, transparent)` 
                      }}
                    />
                    
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl mb-6 relative z-10">
                      <service.icon className="w-8 h-8 text-ski-accent" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4 relative z-10">
                      What You Get
                    </h3>
                    
                    <ul className="space-y-3 mb-6 relative z-10">
                      {service.benefits.map((benefit, idx) => (
                        <li 
                          key={idx} 
                          className="text-sm text-gray-300 flex items-center"
                        >
                          <CheckCircle className="w-4 h-4 text-ski-accent mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    <div className="absolute bottom-6 left-8 right-8 relative z-10">
                      <div className="text-ski-accent font-bold text-lg mb-2">
                        {service.pricing}
                      </div>
                      <button className="w-full bg-ski-accent hover:bg-orange-500 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 text-sm">
                        Get Started
                      </button>
                    </div>
                  </div>
                }
                className="h-full"
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Ready to transform your digital presence? Let's discuss your marketing goals.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-ski-black text-white px-8 py-4 rounded-full font-medium hover:bg-ski-accent transition-all duration-300 inline-flex items-center gap-2"
          >
            Start Your Campaign
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;