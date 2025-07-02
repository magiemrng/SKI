import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Zap, Rocket } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: Target,
      title: 'SPARK',
      description: 'We ignite bold ideas and creative innovation, sparking transformative concepts that captivate and engage your target audience.',
    },
    {
      icon: Zap,
      title: 'KNACK',
      description: 'Our deep expertise and intuitive understanding of technology and design ensures intelligent solutions and exceptional results.',
    },
    {
      icon: Rocket,
      title: 'INSPIRE',
      description: 'We deliver transformative results that empower our clients to lead in their industries and inspire lasting change.',
    },
  ];

  const stats = [
    { number: 250, suffix: '+', label: 'Campaigns Completed' },
    { number: 98, suffix: '%', label: 'Client Satisfaction' },
    { number: 75, suffix: '+', label: 'Happy Clients' },
    { number: 24, suffix: '/7', label: 'Support Available' },
  ];

  return (
    <section id="about" className="py-32 bg-ski-gray relative overflow-hidden">
      {/* Simplified Background Pattern */}
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
            About SKI
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A multidisciplinary creative and technology agency committed to driving brand growth through strategic innovation, intelligent design, and data-driven solutions.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-500 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              SKI – Spark, Knack, Inspire. Our mission is to ignite bold ideas, apply deep expertise, and deliver transformative results that empower our clients to lead in their industries.
            </motion.p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label} 
              className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-ski-black mb-2">
                {stat.number}{stat.suffix}
              </div>
              <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-8 group-hover:shadow-xl transition-shadow duration-300"
              >
                <value.icon className="w-10 h-10 text-ski-accent" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-ski-black mb-4 tracking-wide">
                {value.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;