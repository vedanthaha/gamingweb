import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../utils/animation';

const ProductCard = ({ product }) => {
  const { title,category, price, image } = product;
  const [ref, isInView] = useScrollReveal();
  
  return (
    <motion.div 
      className="product-card"
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {image && (
        <div className="product-image-container">
          <motion.img 
            src={image} 
            alt={title} 
            className="product-image" 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      )}
      <div className="product-category">{category}</div>
      <h3 className="product-title">{title}</h3>
      <div className="product-price-row">
        <span className="product-price">{price}</span>
        <motion.button 
          className="product-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 1L15 8L8 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;