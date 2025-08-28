"use client";
import { useState, useEffect, useRef, RefObject } from 'react';

export function useScrollOpacity<T extends HTMLElement = HTMLElement>() {
  const [opacity, setOpacity] = useState(0);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the element is visible
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      
      // Element is completely above viewport
      if (elementBottom < 0) {
        setOpacity(0);
        return;
      }
      
      // Element is completely below viewport
      if (elementTop > windowHeight) {
        setOpacity(0);
        return;
      }
      
      // Element is partially visible - calculate opacity
      const visibleHeight = Math.min(elementBottom, windowHeight) - Math.max(elementTop, 0);
      const totalHeight = rect.height;
      
      // Ensure full opacity when element is mostly visible
      let opacityValue = visibleHeight / totalHeight;
      
      // Boost opacity to reach 1.0 when element is well within viewport
      if (opacityValue > 0.3) {
        opacityValue = Math.min(1, opacityValue * 1.5);
      }
      
      // Ensure we reach full opacity
      opacityValue = Math.max(0, Math.min(1, opacityValue));
      
      setOpacity(opacityValue);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { opacity, elementRef };
}
