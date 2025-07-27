import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header 
      className="header"
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <div className="container header-container">
        <motion.div 
          className="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          ESSENTIAL GAMING
        </motion.div>
        <nav className="nav">
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.li whileHover={{ scale: 1.05 }}><a href="#hero">Home</a></motion.li>
            <motion.li whileHover={{ scale: 1.05 }}><a href="#products">Products</a></motion.li>
            <motion.li whileHover={{ scale: 1.05 }}><a href="#categories">Categories</a></motion.li>
            <motion.li whileHover={{ scale: 1.05 }}><a href="#about">About</a></motion.li>
          </motion.ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;