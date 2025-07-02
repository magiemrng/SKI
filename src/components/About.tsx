import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Zap, Rocket } from 'lucide-react';
import SplitText from './animations/SplitText';
import BlurText from './animations/BlurText';
import CountUp from './animations/CountUp';
import StarBorder from './animations/StarBorder';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: Target,
      title: 'SPARK',
      description: 'We ignite creativity and innovation in every project, sparking ideas that captivate and engage your audience.',
    },
    {
      icon: Zap,
      title: 'KNACK',
      description: 'Our expertise and intuitive understanding of web development ensures flawless execution and exceptional results.',
    },
    {
      icon: Rocket,
      title: 'IGNITE',
      description: 'We fuel your business growth with powerful web solutions that accelerate your success and market presence.',
    },
  ];

  const stats = [
    { number: 150, suffix: '+', label: 'Projects Completed' },
    { number: 98, suffix: '%', label: 'Client Satisfaction' },
    { number: 50, suffix: '+', label: 'Happy Clients' },
    { number: 24, suffix: '/7', label: 'Support Available' },
  ];

  return (
    <section id="about" className="py-32 bg-ski-gray relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, #FF6B35 1px, transparent 1px),
                           radial-gradient(circle at 80% 20%, #0A0A0A 1px, transparent 1px),
                           radial-gradient(circle at 40% 40%, #FF6B35 0.5px, transparent 0.5px)`,
          backgroundSize: '100px 100px, 80px 80px, 40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <SplitText
            text="About SKI"
            className="text-4xl md:text-6xl font-bold text-ski-black mb-8 tracking-tight"
            delay={0.2}
            stagger={0.1}
          />
          <div className="max-w-4xl mx-auto">
            <BlurText
              text="We are a premium web development agency that believes in the power of exceptional design and cutting-edge technology to transform businesses."
              className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light mb-8"
              delay={0.8}
            />
            <BlurText
              text="Our mission is simple: create websites that don't just exist, but dominate. We craft digital experiences that spark engagement, demonstrate your knack for excellence, and ignite unprecedented growth."
              className="text-lg text-gray-500 leading-relaxed"
              delay={1.2}
            />
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <StarBorder key={stat.label} className="text-center" speed={3 + index}>
              <CountUp
                end={stat.number}
                suffix={stat.suffix}
                className="text-3xl md:text-4xl font-bold text-ski-black mb-2"
                duration={2.5}
              />
              <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
            </StarBorder>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 + 0.6 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 360,
                  boxShadow: "0 0 40px rgba(255, 107, 53, 0.6)"
                }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-8 group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-ski-accent to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  whileHover={{ scale: 1.5 }}
                />
                <value.icon className="w-10 h-10 text-ski-accent relative z-10" />
              </motion.div>
              
              <SplitText
                text={value.title}
                className="text-2xl font-bold text-ski-black mb-4 tracking-wide"
                delay={index * 0.2 + 1}
                stagger={0.1}
              />
              
              <BlurText
                text={value.description}
                className="text-gray-600 leading-relaxed"
                delay={index * 0.2 + 1.4}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;