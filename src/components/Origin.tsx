import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMapMarkerAlt, FaMountain, FaWater, FaLeaf, FaHistory, FaBook, FaIndustry, FaGlobeAfrica } from 'react-icons/fa';

const Origin: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  return (
    <section className="origin-section" ref={ref}>
      <motion.div 
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          源自天然产地
        </motion.h2>
        
        <motion.div className="origin-content" variants={itemVariants}>
          <div className="map-container">
            <div className="map-placeholder">
              <FaMapMarkerAlt className="map-marker" size={48} />
              <div className="location-info">
                <h3>陕西 • 眉县</h3>
                <p>眉县位于太白山脚下，昼夜温差大，光照充足，猕猴桃自然甜度高，口感酸甜适中，被誉为“中国猕猴桃之乡”</p>
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>全国每7个猕猴桃就有一个产自眉县呦 ･◡･</p>
              </div>
            </div>
          </div>
          
          <div className="environment-cards">
            <motion.div 
              className="env-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <FaLeaf className="env-icon" size={40} />
              <h4>正宗徐香猕猴桃</h4>
              <p>果形端正、果肉翠绿、汁水丰富，口感酸甜平衡</p>
              <p>富含维C与膳食纤维，深受消费者喜爱</p>
            </motion.div>

            <motion.div 
              className="env-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <FaHistory className="env-icon" size={40} />
              <h4>历史悠久</h4>
              <p>早在唐代就有人工栽培记录，是猕猴桃原产地之一，眉县猕猴桃拥有深厚的文化与栽培基础</p>
            </motion.div>

            <motion.div 
              className="env-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <FaWater className="env-icon" size={40} />
              <h4>纯净水源</h4>
              <p>农夫山泉水源地，太白山山泉灌溉，确保每一颗果实的纯净品质</p>
            </motion.div>
            
            <motion.div 
              className="env-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <FaIndustry className="env-icon" size={40} />
              <h4>完整产业链</h4>
              <p>眉县已形成育种、种植、加工、销售全链条闭环，带动超2.6万农户增收，打造乡村振兴“样板产业”</p>
            </motion.div>

            <motion.div 
              className="env-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <FaGlobeAfrica className="env-icon" size={40} />
              <h4>销往世界</h4>
              <p>眉县猕猴桃及加工品远销泰国、马来西亚、巴西等26个国家，品牌价值达161.37亿元</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Origin; 