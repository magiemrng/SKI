import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Smartphone, Search, ShoppingCart, BarChart } from 'lucide-react';
import ParallaxSection from './ParallaxSection';
import GlitchText from './animations/GlitchText';
import BlurText from './animations/BlurText';
import StarBorder from './animations/StarBorder';

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
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Stunning, user-centric designs that convert visitors into customers and enhance brand perception.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Brand Identity'],
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Development',
      description: 'Responsive designs that deliver exceptional experiences across all devices and screen sizes.',
      features: ['Progressive Web Apps', 'Mobile Optimization', 'Touch Interfaces', 'Performance Tuning'],
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Strategic SEO implementation to boost your search rankings and drive organic traffic.',
      features: ['Technical SEO', 'Content Strategy', 'Performance Optimization', 'Analytics Setup'],
      gradient: 'from-yellow-500 to-orange-600',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Powerful online stores that maximize conversions and provide seamless shopping experiences.',
      features: ['Payment Integration', 'Inventory Management', 'Order Processing', 'Customer Analytics'],
      gradient: 'from-indigo-500 to-blue-600',
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Comprehensive tracking and analytics to measure success and optimize for better results.',
      features: ['User Behavior Tracking', 'Conversion Optimization', 'A/B Testing', 'ROI Analysis'],
      gradient: 'from-purple-500 to-pink-600',
    },
  ];

  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #FF6B35 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, #0A0A0A 1px, transparent 1px),
            linear-gradient(45deg, transparent 49%, #FF6B35 50%, transparent 51%)
          `,
          backgroundSize: '60px 60px, 40px 40px, 80px 80px',
        }} />
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
              text="Our Services"
              className="text-4xl md:text-6xl font-bold text-ski-black mb-8 tracking-tight"
            />
            <BlurText
              text="Comprehensive web development services designed to elevate your digital presence and drive measurable business growth."
              className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto"
              delay={0.8}
            />
          </motion.div>
        </ParallaxSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <StarBorder key={service.title} speed={2 + index * 0.5}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  rotateX: 5,
                }}
                className="bg-ski-gray p-8 rounded-2xl group hover:shadow-2xl transition-all duration-500 relative overflow-hidden h-full"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Enhanced Gradient Overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-2xl`}
                  initial={false}
                  whileHover={{
                    background: [
                      `linear-gradient(45deg, transparent, rgba(255, 107, 53, 0.1), transparent)`,
                      `linear-gradient(135deg, transparent, rgba(255, 107, 53, 0.1), transparent)`,
                      `linear-gradient(225deg, transparent, rgba(255, 107, 53, 0.1), transparent)`,
                      `linear-gradient(315deg, transparent, rgba(255, 107, 53, 0.1), transparent)`,
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                <motion.div
                  whileHover={{ 
                    scale: 1.3, 
                    rotate: 360,
                    boxShadow: "0 0 40px rgba(255, 107, 53, 0.6)"
                  }}
                  transition={{ duration: 0.8 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-xl shadow-md mb-6 group-hover:shadow-2xl transition-all duration-300 relative z-10"
                >
                  <service.icon className="w-8 h-8 text-ski-accent" />
                </motion.div>
                
                <BlurText
                  text={service.title}
                  className="text-xl font-bold text-ski-black mb-4 relative z-10"
                  delay={index * 0.1 + 0.5}
                />
                
                <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                  {service.description}
                </p>
                
                <ul className="space-y-2 relative z-10">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="text-sm text-gray-500 flex items-center"
                      whileHover={{ x: 10, color: "#FF6B35" }}
                      transition={{ duration: 0.2 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 + idx * 0.1 }}
                    >
                      <motion.div 
                        className="w-1.5 h-1.5 bg-ski-accent rounded-full mr-3"
                        whileHover={{ scale: 2 }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Enhanced Hover Effect Particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-ski-accent rounded-full opacity-0 group-hover:opacity-100"
                    style={{
                      top: `${20 + i * 20}%`,
                      right: `${10 + i * 5}%`,
                    }}
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.5, 1, 0.5],
                      y: [0, -10, 0]
                    }}
                    transition={{
                      duration: 2 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3
                    }}
                  />
                ))}
              </motion.div>
            </StarBorder>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;