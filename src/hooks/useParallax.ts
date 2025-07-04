import { useEffect, useRef } from 'react';

interface ParallaxOptions {
  speed?: number;
  offset?: number;
  enabled?: boolean;
}

export const useParallax = (options: ParallaxOptions = {}) => {
  const { speed = 0.5, offset = 0, enabled = true } = options;
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!enabled) return;

    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = scrolled * speed + offset;
      element.style.transform = `translateY(${parallax}px)`;
    };

    // Set initial transform
    element.style.willChange = 'transform';
    
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (element) {
        element.style.transform = '';
        element.style.willChange = '';
      }
    };
  }, [speed, offset, enabled]);

  return elementRef;
};