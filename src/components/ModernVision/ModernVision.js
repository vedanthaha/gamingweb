import React from 'react';
import { motion } from 'framer-motion';
import './ModernVision.css';
import { fadeIn, useScrollReveal } from '../../utils/animation';

const ModernVision = () => {
  const [ref, isInView] = useScrollReveal();

  return (
    <section id="vision" className="modern-vision">
      <div className="container vision-container" ref={ref}>
        <motion.div 
          className="vision-content"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <motion.h2 
            className="vision-title"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            custom={0}
          >
            Where Timeless Values Meet<br />Modern Vision
          </motion.h2>
          
          <motion.p 
            className="vision-description"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            custom={1}
          >
            Behind every pixel, product, and project lies a story of dedication.
          </motion.p>
          
          <motion.button 
            className="methods-button"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            custom={2}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Our Methods
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </motion.div>
        
        <div className="materials-section">
          <motion.div 
            className="materials-category"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            custom={3}
          >
            <span className="category-label">Materials</span>
            
            <motion.div 
              className="category-content"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeIn}
              custom={4}
            >
              <h3 className="category-title">Sustainable Elegance</h3>
              <p className="category-description">
                Thoughtfully crafted from eco-friendly materials, this product reflects a commitment to both style and the planet
              </p>
            </motion.div>
          </motion.div>
          
          <div className="categories-grid">
            <motion.div 
              className="category-card"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeIn}
              custom={5}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <h4>Plant based</h4>
              <div className="category-image plant-based"></div>
            </motion.div>
            
            <motion.div 
              className="category-card"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeIn}
              custom={6}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <h4>Organic</h4>
              <div className="category-image organic"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernVision;