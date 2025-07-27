import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import './ProductShowcase.css';

// Import your product images
import product1Image from '../../assets/images/products/product1.jpg';
import product2Image from '../../assets/images/products/product2.png';
import product3Image from '../../assets/images/products/product3.jpg';
import product4Image from '../../assets/images/products/product4.jpeg';

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      title: 'Precision Gaming Headset',
      description: 'High-quality gaming headset with noise-cancellation and clear audio.',
      category: 'Audio',
      price: '$59.99',
      image: product1Image
    },
    {
      id: 2,
      title: 'Premium Drink',
      description: 'Best drink to have it while playing',
      category: 'Drink',
      price: '$89.99',
      image: product2Image
    },
    {
      id: 3,
      title: 'Energy drink',
      description: 'Energy drink to have it while playing',
      category: 'Drink',
      price: '$24.99',
      image: product3Image
    },
    {
      id: 4,
      title: 'Specialized Drink',
      description: 'Specialized drink to have it while playing',
      category: 'Drink',
      price: '$119.99',
      image: product4Image
    }
  ];

  return (
    <section id="products" className="product-showcase">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Find Products That Perfectly Match Your Gameplay
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          1200+ Products Sold Last Month
        </motion.p>
        
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;