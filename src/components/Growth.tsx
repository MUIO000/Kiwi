import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Growth: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const stages = [
    {
      month: '3月',
      title: '春季发芽',
      description: '枝条开始萌发新芽，生机勃勃',
      icon: '🌱'
    },
    {
      month: '5月',
      title: '开花授粉',
      description: '洁白的花朵绽放，蜜蜂忙碌授粉',
      icon: '🌸'
    },
    {
      month: '7月',
      title: '果实生长',
      description: '小果实逐渐成形，需要精心呵护',
      icon: '🥝'
    },
    {
      month: '10月',
      title: '成熟采摘',
      description: '果实饱满成熟，开始手工采摘',
      icon: '🎯'
    }
  ];

  return (
    <section className="growth-section" ref={ref}>
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
          生长历程
        </motion.h2>
        
        <div className="timeline">
          {stages.map((stage, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
            >
              <div className="timeline-marker">
                <span className="stage-icon">{stage.icon}</span>
              </div>
              <div className="timeline-content">
                <h3>{stage.month}</h3>
                <h4>{stage.title}</h4>
                <p>{stage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="growth-highlight"
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="highlight-card">
            <h3>全程有机种植</h3>
            <p>
              从发芽到成熟，每一个阶段都凝聚着奶奶的心血。
              不使用化学肥料，只施用有机肥，确保果实的天然品质。
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Growth; 