import React from 'react';
import { motion } from 'framer-motion';
import './CategoryNavigation.css';

const CategoryNavigation = () => {
  const categories = [
    { id: 1, name: 'Skins', description: 'Customize your character with premium skins' },
    { id: 2, name: 'Weapons', description: 'Upgrade your arsenal with legendary weapons' },
    { id: 3, name: 'Characters', description: 'Unlock exclusive characters and abilities' },
    { id: 4, name: 'Currency', description: 'Get in-game currency without the grind' },
    { id: 5, name: 'Boosters', description: 'Level up faster with XP and resource boosters' },
    { id: 6, name: 'Accessories', description: 'Enhance your setup with premium gear' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="categories" className="category-navigation">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Where Timeless Gaming Meets Modern Vision
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Find exactly what you need for your gaming experience
        </motion.p>
        
        <motion.div 
          className="category-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {categories.map(category => (
            <motion.div 
              key={category.id} 
              className="category-card"
              variants={itemVariants}
              whileHover={{ y: -5, borderColor: 'var(--accent)' }}
            >
              <h3 className="category-name">{category.name}</h3>
              <p className="category-description">{category.description}</p>
              <motion.a 
                href="#" 
                className="category-link"
                whileHover={{ x: 5 }}
              >
                Explore
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryNavigation;