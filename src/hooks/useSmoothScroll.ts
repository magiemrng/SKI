import { useEffect, useRef } from 'react';

interface SmoothScrollOptions {
  factor?: number;
  ease?: number;
  enabled?: boolean;
}

export const useSmoothScroll = (options: SmoothScrollOptions = {}) => {
  // 🎛️ DEFAULT SPEED SETTINGS - Change these for global speed adjustments:
  const { 
    factor = 1.2,    // 📈 Higher = faster scrolling (try 0.8-2.0)
    ease = 0.15,     // 📈 Higher = more responsive (try 0.05-0.25)
    enabled = true 
  } = options;
  
  const scrollElementRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const currentScrollY = useRef(0);
  const targetScrollY = useRef(0);

  useEffect(() => {
    if (!enabled) return;

    const scrollElement = scrollElementRef.current;
    if (!scrollElement) return;

    let isScrolling = false;

    const updateScroll = () => {
      if (!scrollElement) return;

      // 🚀 Faster interpolation with improved easing
      const diff = targetScrollY.current - currentScrollY.current;
      currentScrollY.current += diff * ease;
      
      // Apply transform with GPU acceleration
      scrollElement.style.transform = `translate3d(0, ${-currentScrollY.current}px, 0)`;

      // Continue animation with tighter threshold for faster stopping
      if (Math.abs(diff) > 0.05) {
        requestRef.current = requestAnimationFrame(updateScroll);
      } else {
        isScrolling = false;
        // Snap to final position for crisp finish
        currentScrollY.current = targetScrollY.current;
        scrollElement.style.transform = `translate3d(0, ${-currentScrollY.current}px, 0)`;
      }
    };

    const handleScroll = () => {
      targetScrollY.current = window.scrollY * factor;
      
      if (!isScrolling) {
        isScrolling = true;
        requestRef.current = requestAnimationFrame(updateScroll);
      }
    };

    // Set initial position with optimizations
    document.body.style.height = `${scrollElement.scrollHeight}px`;
    scrollElement.style.position = 'fixed';
    scrollElement.style.top = '0';
    scrollElement.style.left = '0';
    scrollElement.style.width = '100%';
    scrollElement.style.willChange = 'transform';
    scrollElement.style.backfaceVisibility = 'hidden';
    scrollElement.style.perspective = '1000px';

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      // Reset styles
      document.body.style.height = '';
      if (scrollElement) {
        scrollElement.style.position = '';
        scrollElement.style.top = '';
        scrollElement.style.left = '';
        scrollElement.style.width = '';
        scrollElement.style.transform = '';
        scrollElement.style.willChange = '';
        scrollElement.style.backfaceVisibility = '';
        scrollElement.style.perspective = '';
      }
    };
  }, [factor, ease, enabled]);

  return scrollElementRef;
};