import { useEffect, useRef } from 'react';

interface SmoothScrollOptions {
  factor?: number;
  ease?: number;
  enabled?: boolean;
}

export const useSmoothScroll = (options: SmoothScrollOptions = {}) => {
  const { factor = 0.1, ease = 0.08, enabled = true } = options;
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

      // Smooth interpolation
      currentScrollY.current += (targetScrollY.current - currentScrollY.current) * ease;
      
      // Apply transform
      scrollElement.style.transform = `translateY(${-currentScrollY.current}px)`;

      // Continue animation if still moving
      if (Math.abs(targetScrollY.current - currentScrollY.current) > 0.1) {
        requestRef.current = requestAnimationFrame(updateScroll);
      } else {
        isScrolling = false;
      }
    };

    const handleScroll = () => {
      targetScrollY.current = window.scrollY * factor;
      
      if (!isScrolling) {
        isScrolling = true;
        requestRef.current = requestAnimationFrame(updateScroll);
      }
    };

    // Set initial position
    document.body.style.height = `${scrollElement.scrollHeight}px`;
    scrollElement.style.position = 'fixed';
    scrollElement.style.top = '0';
    scrollElement.style.left = '0';
    scrollElement.style.width = '100%';
    scrollElement.style.willChange = 'transform';

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
      }
    };
  }, [factor, ease, enabled]);

  return scrollElementRef;
};