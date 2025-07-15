import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HowToEat: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [selectedMethod, setSelectedMethod] = useState(0);

  const methods = [
    {
      title: '直接食用',
      icon: '🥄',
      steps: [
        '选择软硬适中的猕猴桃',
        '用勺子轻轻按压，微软即可',
        '对半切开，用勺子挖着吃',
        '享受原汁原味的美味'
      ],
      tip: '最能品尝到猕猴桃的原味'
    },
    {
      title: '制作果汁',
      icon: '🥤',
      steps: [
        '去皮切块放入榨汁机',
        '加入少许蜂蜜调味',
        '可加入其他水果混合',
        '冰镇后口感更佳'
      ],
      tip: '营养丰富，老少皆宜'
    },
    {
      title: '水果沙拉',
      icon: '🥗',
      steps: [
        '切成小块备用',
        '搭配苹果、葡萄等水果',
        '淋上酸奶或沙拉酱',
        '撒上坚果碎装饰'
      ],
      tip: '颜值与营养并存'
    },
    {
      title: '果酱制作',
      icon: '🍯',
      steps: [
        '去皮切碎加糖腌制',
        '小火慢煮至粘稠',
        '加入柠檬汁调味',
        '装瓶密封保存'
      ],
      tip: '可以保存更久，随时享用'
    }
  ];

  return (
    <section className="howtoeat-section" ref={ref}>
      <motion.div 
        className="container"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="section-title"
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          美味吃法
        </motion.h2>
        
        <div className="methods-container">
          <div className="method-tabs">
            {methods.map((method, index) => (
              <motion.button
                key={index}
                className={`method-tab ${selectedMethod === index ? 'active' : ''}`}
                onClick={() => setSelectedMethod(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="method-icon">{method.icon}</span>
                <span className="method-name">{method.title}</span>
              </motion.button>
            ))}
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedMethod}
              className="method-content"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{methods[selectedMethod].title}</h3>
              {selectedMethod === 0 && (
                <div className="method-image">
                  <img src="/images/8.jpg" alt="直接食用猕猴桃" />
                </div>
              )}
              <div className="steps">
                {methods[selectedMethod].steps.map((step, index) => (
                  <motion.div 
                    key={index}
                    className="step-item"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="step-number">{index + 1}</span>
                    <span>{step}</span>
                  </motion.div>
                ))}
              </div>
              <div className="method-tip">
                <span className="tip-icon">💡</span>
                {methods[selectedMethod].tip}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <motion.div 
          className="nutrition-info"
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h3>营养价值</h3>
          <div className="nutrition-grid">
            <div className="nutrition-item">
              <span className="nutrition-label">维生素C</span>
              <span className="nutrition-value">含量是橙子的2倍</span>
            </div>
            <div className="nutrition-item">
              <span className="nutrition-label">膳食纤维</span>
              <span className="nutrition-value">促进肠道健康</span>
            </div>
            <div className="nutrition-item">
              <span className="nutrition-label">叶酸</span>
              <span className="nutrition-value">孕妇的理想水果</span>
            </div>
            <div className="nutrition-item">
              <span className="nutrition-label">钾元素</span>
              <span className="nutrition-value">有助心脏健康</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HowToEat; 