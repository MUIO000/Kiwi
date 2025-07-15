import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './App.css';
import Hero from './components/Hero';   
import Grandma from './components/Grandma';
import Origin from './components/Origin';
import Growth from './components/Growth';
import HowToEat from './components/HowToEat';
import Pricing from './components/Pricing';
import FloatingLeaves from './components/FloatingLeaves';
import CartButton from './components/CartButton';

function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  
  // 视差滚动效果
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    // 模拟加载过程
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="loading-content"
        >
          <div className="kiwi-loader"></div>
          <p>正在进入奇异果的世界...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="App">
      {/* 飘落的树叶特效 */}
      <FloatingLeaves />
      {/* 固定购物车按钮 */}
      <CartButton />
      
      {/* 视差背景 */}
      <motion.div 
        className="parallax-bg"
        style={{ y }}
      />
      
      {/* 导航指示器 */}
      <div className="scroll-indicator">
        <motion.div 
          className="scroll-progress"
          style={{ scaleY: scrollYProgress }}
        />
      </div>
      
      {/* 主要内容区域 */}
      <main>
        <Hero />
        <Grandma />
        <Origin />
        <Growth />
        <HowToEat />
        <Pricing />
      </main>
    </div>
  );
}

export default App;
