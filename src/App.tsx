import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollIndicator from './components/ScrollIndicator';
import SmoothScrollWrapper from './components/SmoothScrollWrapper';

function App() {
  useEffect(() => {
    // Enhanced smooth scrolling for the entire page
    const smoothScrollStyle = document.createElement('style');
    smoothScrollStyle.textContent = `
      html {
        scroll-behavior: smooth;
        scroll-padding-top: 100px;
      }
      
      * {
        scroll-behavior: smooth;
      }
      
      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 10px;
      }
      
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(45deg, #FF6B35, #ff8a65);
        border-radius: 10px;
        transition: all 0.3s ease;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(45deg, #e55a2b, #ff7043);
        box-shadow: 0 0 10px rgba(255, 107, 53, 0.5);
      }
      
      /* Smooth transitions for all elements */
      * {
        transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      
      /* Enhanced focus states */
      a:focus, button:focus {
        outline: 2px solid #FF6B35;
        outline-offset: 2px;
        border-radius: 4px;
      }
    `;
    document.head.appendChild(smoothScrollStyle);

    // Add smooth scroll behavior to anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.head.removeChild(smoothScrollStyle);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="font-inter overflow-x-hidden">
      <ScrollIndicator />
      <SmoothScrollWrapper enabled={true} factor={1} ease={0.08}>
        <Header />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </SmoothScrollWrapper>
    </div>
  );
}

export default App;