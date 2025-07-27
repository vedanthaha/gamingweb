import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './styles/global.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ProductShowcase from './components/ProductShowcase/ProductShowcase';
import CategoryNavigation from './components/CategoryNavigation/CategoryNavigation';
import StatsSection from './components/StatsSection/StatsSection';
import About from './components/About/About';

function App() {
  return (
    <AnimatePresence mode="wait">
      <motion.div 
        className="App"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <Hero />
        <ProductShowcase />
        <StatsSection />
        <CategoryNavigation />
        <About />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
