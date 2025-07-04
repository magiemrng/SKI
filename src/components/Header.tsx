import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        style={{
          borderBottomLeftRadius: isScrolled ? '24px' : '0px',
          borderBottomRightRadius: isScrolled ? '24px' : '0px',
        }}
      >
        <div className="max-w-8xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a href="/" className="flex items-center">
                <img src="/full_logo.png" alt="SKI Logo" className="h-32 w-32 hover:cursor-pointer" />
              </a>
            </motion.div>
            

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className="text-ski-black hover:text-ski-accent transition-colors duration-200 font-medium relative group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  {item.name}
                  {/* Curved underline on hover */}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-ski-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    style={{
                      borderRadius: '2px',
                    }}
                  />
                </motion.a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors duration-200"
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Curved bottom edge when scrolled */}
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-ski-accent/20 via-ski-accent/40 to-ski-accent/20"
            style={{
              borderBottomLeftRadius: '24px',
              borderBottomRightRadius: '24px',
            }}
          />
        )}
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-20 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-lg mx-4 mt-2"
            style={{
              borderRadius: '20px',
            }}
          >
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-ski-black hover:text-ski-accent transition-colors duration-200 font-medium py-2 px-4 rounded-xl hover:bg-ski-gray/50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;