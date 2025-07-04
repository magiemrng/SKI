import { useEffect, useRef } from 'react';

interface ParallaxOptions {
  speed?: number;
  offset?: number;
  enabled?: boolean;
}

export const useParallax = (options: ParallaxOptions = {}) => {
  // 🎛️ PARALLAX SPEED SETTINGS:
  const { 
    speed = -0.3,    // 📈 Higher absolute value = more parallax effect (try -0.1 to -0.5)
    offset = 0, 
    enabled = true 
  } = options;
  
  const elementRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number>();

  useEffect(() => {
    if (!enabled) return;

    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      rafRef.current = requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * speed + offset;
        // Use translate3d for better performance
        element.style.transform = `translate3d(0, ${parallax}px, 0)`;
      });
    };

    // Set initial transform with GPU acceleration
    element.style.willChange = 'transform';
    element.style.backfaceVisibility = 'hidden';
    
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (element) {
        element.style.transform = '';
        element.style.willChange = '';
        element.style.backfaceVisibility = '';
      }
    };
  }, [speed, offset, enabled]);

  return elementRef;
};