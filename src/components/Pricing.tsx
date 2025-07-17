import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPhone, FaWeixin, FaTruck, FaGift } from 'react-icons/fa';
import OrderModal from './OrderModal';

const Pricing: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOrderClick = () => {
    // 先打开飞书表单
    window.open('https://icnx5ms2v0zo.feishu.cn/share/base/form/shrcnk5ySb2CAhLdgN3rRB9XCKj', '_blank');
    // 然后显示弹窗
    setIsModalOpen(true);
  };

  const packages = [
    {
      name: '尝鲜装',
      weight: '5斤',
      price: '59',
      originalPrice: '79',
      features: ['精选大果', '现货秒发', '破损包赔', '精美包装'],
      popular: true,
      image: '/images/9.jpg'
    },
    {
      name: '家庭装',
      weight: '10斤',
      price: '99',
      originalPrice: '109',
      features: ['特级大果', '现货秒发', '破损包赔', '精美包装'],
      popular: false,
      image: '/images/9.jpg'
    }
  ];

  return (
    <section className="pricing-section" ref={ref}>
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
          新鲜直达
        </motion.h2>
        
        <div className="pricing-cards">
          {packages.map((pkg, index) => (
            <motion.div 
              key={index}
              className={`price-card ${pkg.popular ? 'popular' : ''}`}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
            >
              {pkg.popular && <div className="popular-badge">热销</div>}
              <h3>{pkg.name}</h3>
              <div className="package-image">
                <img src={pkg.image} alt={pkg.name} />
              </div>
              <div className="weight">{pkg.weight}</div>
              <div className="price-info">
                <span className="currency">¥</span>
                <span className="price">{pkg.price}</span>
                {pkg.originalPrice && (
                  <span className="original-price">¥{pkg.originalPrice}</span>
                )}
              </div>
              <ul className="features">
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button 
                className="order-btn"
                onClick={handleOrderClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📝 立即订购
              </motion.button>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="order-process"
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3>下单流程</h3>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>填写订单</h4>
                <p>点击"立即订购"填写收货信息</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>微信付款</h4>
                <p>扫码付款并<b style={{color: 'red'}}>备注姓名+手机号</b></p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>确认发货</h4>
                <p>收到付款后24小时内发货</p>
              </div>
            </div>
          </div>
        </motion.div>



        <motion.div 
          className="contact-section"
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="contact-methods">
            <motion.div 
              className="contact-item"
              whileHover={{ scale: 1.05 }}
            >
              <FaPhone className="contact-icon" size={32} />
              <div className="contact-info">
                <p>电话订购</p>
                <p className="contact-detail">138-8888-8888</p>
              </div>
            </motion.div>
            <motion.div 
              className="contact-item"
              whileHover={{ scale: 1.05 }}
            >
              <FaWeixin className="contact-icon" size={32} />
              <div className="contact-info">
                <p>微信订购</p>
                <p className="contact-detail">138-8888-8888</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="guarantee"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="guarantee-item">
            <FaTruck size={24} />
            <span>现摘现发</span>
          </div>
          <div className="guarantee-item">
            <FaGift size={24} />
            <span>精美包装</span>
          </div>
        </motion.div>
        
        <motion.div 
          className="footer-message"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p>感谢您选择奶奶的猕猴桃</p>
          <p>每一颗都是用心的味道 💚</p>
        </motion.div>
        
        <OrderModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </motion.div>
    </section>
  );
};

export default Pricing; 