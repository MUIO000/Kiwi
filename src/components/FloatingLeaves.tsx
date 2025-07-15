import React from 'react';
import { motion } from 'framer-motion';

const FloatingLeaves: React.FC = () => {
  const leaves = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 15 + Math.random() * 10,
    size: 20 + Math.random() * 20
  }));

  return (
    <div className="floating-leaves">
      {leaves.map(leaf => (
        <motion.div
          key={leaf.id}
          className="leaf"
          style={{
            left: `${leaf.x}%`,
            width: `${leaf.size}px`,
            height: `${leaf.size}px`
          }}
          initial={{ y: -50, rotate: 0 }}
          animate={{
            y: window.innerHeight + 100,
            rotate: 360,
            x: [0, 30, -30, 0]
          }}
          transition={{
            y: {
              duration: leaf.duration,
              repeat: Infinity,
              ease: "linear",
              delay: leaf.delay
            },
            rotate: {
              duration: leaf.duration,
              repeat: Infinity,
              ease: "linear",
              delay: leaf.delay
            },
            x: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: leaf.delay
            }
          }}
        >
          🍃
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingLeaves; 