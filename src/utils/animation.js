import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Animation variants that match Framer's exact animations
export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0], // Cubic bezier curve matching Framer's easing
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
      ease: [0.25, 0.1, 0.25, 1.0],
    }
  }
};

export const scaleOnHover = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.03,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }
  }
};

export const slideInFromRight = {
  hidden: { x: 50, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { 
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

// Custom hook for revealing elements on scroll - exactly like Framer
export function useScrollReveal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return [ref, isInView];
}