import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Portfolio from '../components/Contact';
const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact/>
    </>
  );
};

export default HomePage;