import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Smartphone, Search, ShoppingCart, BarChart } from 'lucide-react';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Code,
      title: 'Custom Web Development',
      description: 'Bespoke websites built with cutting-edge technologies, tailored to your unique business needs.',
      features: ['React & Next.js', 'Node.js Backend', 'Database Design', 'API Integration'],
      color: '#3B82F6',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Stunning, user-centric designs that convert visitors into customers and enhance brand perception.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Brand Identity'],
      color: '#EC4899',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Development',
      description: 'Responsive designs that deliver exceptional experiences across all devices and screen sizes.',
      features: ['Progressive Web Apps', 'Mobile Optimization', 'Touch Interfaces', 'Performance Tuning'],
      color: '#10B981',
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Strategic SEO implementation to boost your search rankings and drive organic traffic.',
      features: ['Technical SEO', 'Content Strategy', 'Performance Optimization', 'Analytics Setup'],
      color: '#F59E0B',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Powerful online stores that maximize conversions and provide seamless shopping experiences.',
      features: ['Payment Integration', 'Inventory Management', 'Order Processing', 'Customer Analytics'],
      color: '#6366F1',
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Comprehensive tracking and analytics to measure success and optimize for better results.',
      features: ['User Behavior Tracking', 'Conversion Optimization', 'A/B Testing', 'ROI Analysis'],
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
          <h2 className="text-4xl md:text-6xl font-bold text-ski-black mb-8 tracking-tight">
            Our Services
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
            Comprehensive web development services designed to elevate your digital presence and drive measurable business growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-ski-gray p-8 rounded-2xl group hover:shadow-xl transition-all duration-300 relative overflow-hidden h-full border border-gray-100"
            >
              {/* Subtle Hover Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"
                style={{ backgroundColor: service.color }}
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
                  <li 
                    key={idx} 
                    className="text-sm text-gray-500 flex items-center"
                  >
                    <div className="w-1.5 h-1.5 bg-ski-accent rounded-full mr-3" />
                    {feature}
                  </li>
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