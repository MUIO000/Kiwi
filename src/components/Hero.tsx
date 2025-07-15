import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <motion.div 
          className="hero-image"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img src="/images/10.jpg" alt="猕猴桃背景" />
        </motion.div>
      </div>
      
      <div className="hero-content">
        <motion.h1 
          className="hero-title"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          奶奶的猕猴桃
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          来自大自然的馈赠，每一颗都是用心栽培
        </motion.p>
        
        <motion.div 
          className="hero-features"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <div className="feature-item">
            <span className="feature-icon">🌱</span>
            <span>有机种植</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">☀️</span>
            <span>阳光充足</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">💚</span>
            <span>新鲜采摘</span>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="scroll-hint"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <FaChevronDown size={20} />
        <span>向下滑动探索更多</span>
      </motion.div>
    </section>
  );
};

export default Hero; 