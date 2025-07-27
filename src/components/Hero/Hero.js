import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import { fadeIn, useScrollReveal } from '../../utils/animation';

const Hero = () => {
  const [ref, isInView] = useScrollReveal();

  return (
    <section id="hero" className="hero">
      <div className="container hero-container" ref={ref}>
        <div className="hero-content">
          {/* Customer avatars and rating */}
          <motion.div 
            className="customer-rating"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            custom={0}
          >
            <div className="avatar-group">
              <div className="avatar"></div>
              <div className="avatar"></div>
              <div className="avatar"></div>
            </div>
            <div className="rating">
              <div className="stars">★★★★★</div>
              <span>230k+ Happy customers</span>
            </div>
          </motion.div>

          {/* Main headline with exact Framer styling */}
          <motion.h1 
            className="main-headline"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            custom={1}
          >
            Built To Buy,<br />Designed To Delight
          </motion.h1>
          
          {/* Supporting text with exact Framer styling */}
          <motion.p 
            className="supporting-text"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            custom={2}
          >
            Natural tools and curated products designed to elevate your lifestyle.
          </motion.p>
          
          {/* CTA button with arrow icon */}
          <motion.button 
            className="cta-button"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            custom={3}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Store
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L15 8L8 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;