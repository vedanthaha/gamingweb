import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import './StatsSection.css';
import { useScrollReveal } from '../../utils/animation';

// Import product images or use placeholders
import product1 from '../../assets/images/products/product1.jpg';
import product2 from '../../assets/images/products/product2.png';
import product3 from '../../assets/images/products/product3.jpg';
import product4 from '../../assets/images/products/product4.jpeg';

const StatsSection = () => {
  const [ref, isInView] = useScrollReveal();
  const circleRef = useRef(null);
  const controls = useAnimation();
  
  // Add scroll-based rotation
  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ["start end", "end start"]
  });
  
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  
  const galleryItems = [
    { id: 1, image: product1 },
    { id: 2, image: product2 },
    { id: 3, image: product3 },
    { id: 4, image: product4 },
    { id: 5, image: product1 },
    { id: 6, image: product2 },
    { id: 7, image: product3 },
    { id: 8, image: product4 },
    { id: 9, image: product1 },
    { id: 10, image: product2 },
    { id: 11, image: product3 },
    { id: 12, image: product4 },
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Position items in a circle with proper spacing like the reference
  const positionInCircle = (index, total) => {
    const radius = 140; // Much larger radius to match reference spacing
    const angle = (index / total) * 2 * Math.PI;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return { x, y };
  };

  return (
    <section className="stats-section" ref={ref}>
      <div className="container">
        <motion.h2 
          className="stats-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          1200+ Products Got<br />Sold Last Month
        </motion.h2>
        
        <motion.p 
          className="stats-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          "At Essential, we believe beauty should feel effortless and empowering."
        </motion.p>
        
        <motion.div 
          className="circular-gallery" 
          ref={circleRef}
          style={{ rotate }}
        >
          {galleryItems.map((item, index) => {
            const position = positionInCircle(index, galleryItems.length);
            return (
              <motion.div
                key={item.id}
                className="gallery-item"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { 
                  opacity: 1, 
                  scale: 1,
                  x: position.x, 
                  y: position.y,
                } : { opacity: 0, scale: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0, // Remove staggered delay
                  ease: [0.25, 0.1, 0.25, 1.0]
                }}
              >
                <img src={item.image} alt={`Product ${item.id}`} />
              </motion.div>
            );
          })}
        </motion.div>
        
        <motion.button
          className="store-button"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Store
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 1L15 8L8 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.button>
      </div>
    </section>
  );
};

export default StatsSection;