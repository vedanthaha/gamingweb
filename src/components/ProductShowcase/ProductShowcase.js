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
      title: 'Precision Gaming Mouse',
      description: 'Ultra-responsive gaming mouse with customizable RGB lighting and programmable buttons.',
      category: 'Accessories',
      price: '$59.99',
      image: product1Image
    },
    {
      id: 2,
      title: 'Premium Gaming Headset',
      description: 'Immersive sound experience with noise-cancellation and crystal-clear microphone.',
      category: 'Audio',
      price: '$89.99',
      image: product2Image
    },
    {
      id: 3,
      title: 'Legendary Weapon Skin',
      description: 'Exclusive legendary weapon skin to showcase your status in the gaming world.',
      category: 'Digital Items',
      price: '$24.99',
      image: product3Image
    },
    {
      id: 4,
      title: 'Pro Gaming Keyboard',
      description: 'Mechanical gaming keyboard with customizable key mapping and anti-ghosting technology.',
      category: 'Accessories',
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