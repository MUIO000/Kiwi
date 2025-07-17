import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCalculator } from 'react-icons/fa';
import './OrderModal.css';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'confirm' | 'payment'>('confirm');
  const [quantity5kg, setQuantity5kg] = useState(0);
  const [quantity10kg, setQuantity10kg] = useState(0);

  const price5kg = 59;
  const price10kg = 99;
  const totalAmount = quantity5kg * price5kg + quantity10kg * price10kg;

  const handleConfirmOrder = () => {
    setStep('payment');
  };

  const handleBackToConfirm = () => {
    setStep('confirm');
  };

  const handleClose = () => {
    setStep('confirm');
    setQuantity5kg(0);
    setQuantity10kg(0);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={handleClose}>
              <FaTimes />
            </button>

            {step === 'confirm' && (
              <div className="confirm-step">
                <h2>📋 订单信息确认</h2>
                <p className="confirm-question">您是否已经完成订单信息填写？</p>
                <div className="form-reminder">
                  <p>请确保您已在表单中填写：</p>
                  <ul>
                    <li>✓ 收货人姓名</li>
                    <li>✓ 联系电话</li>
                    <li>✓ 收货地址</li>
                    <li>✓ 商品规格选择</li>
                  </ul>
                </div>
                <div className="confirm-buttons">
                  <button className="btn-secondary" onClick={handleClose}>
                    返回填写
                  </button>
                  <button className="btn-primary" onClick={handleConfirmOrder}>
                    ✅ 已完成，去付款
                  </button>
                </div>
              </div>
            )}

            {step === 'payment' && (
              <div className="payment-step">
                <h2>💰 付款信息</h2>
                
                <div className="calculator-section">
                  <h3><FaCalculator /> 订单计算器</h3>
                  <div className="calculator">
                    <div className="calc-item">
                      <span className="product-name">尝鲜装 (5斤)</span>
                      <span className="product-price">¥{price5kg}/份</span>
                      <div className="quantity-control">
                        <button 
                          onClick={() => setQuantity5kg(Math.max(0, quantity5kg - 1))}
                          disabled={quantity5kg <= 0}
                        >
                          -
                        </button>
                        <span className="quantity">{quantity5kg}</span>
                        <button onClick={() => setQuantity5kg(quantity5kg + 1)}>
                          +
                        </button>
                      </div>
                      <span className="subtotal">¥{quantity5kg * price5kg}</span>
                    </div>

                    <div className="calc-item">
                      <span className="product-name">家庭装 (10斤)</span>
                      <span className="product-price">¥{price10kg}/份</span>
                      <div className="quantity-control">
                        <button 
                          onClick={() => setQuantity10kg(Math.max(0, quantity10kg - 1))}
                          disabled={quantity10kg <= 0}
                        >
                          -
                        </button>
                        <span className="quantity">{quantity10kg}</span>
                        <button onClick={() => setQuantity10kg(quantity10kg + 1)}>
                          +
                        </button>
                      </div>
                      <span className="subtotal">¥{quantity10kg * price10kg}</span>
                    </div>

                    <div className="total-amount">
                      <strong>总计：¥{totalAmount}</strong>
                    </div>
                  </div>
                </div>

                {totalAmount > 0 && (
                  <div className="payment-section">
                    <div className="qr-code-area">
                      <div className="qr-placeholder">
                        <span>微信收款码</span>
                        <img src="/images/QR-code.png" alt="微信收款码" style={{width: '80%', height: '70%'}} />
                      </div>
                    </div>
                    
                    <div className="payment-instructions">
                      <h4>💡 付款说明</h4>
                      <div className="instruction-item">
                        <span className="instruction-label">付款金额：</span>
                        <span className="amount-highlight">¥{totalAmount}</span>
                      </div>
                      <div className="instruction-item">
                        <span className="instruction-label">付款备注：</span>
                        <span className="note-highlight">姓名+手机号</span>
                      </div>
                      <p className="payment-note">
                        ⚠️ 请务必在付款时备注您的<strong>姓名和手机号</strong>，
                        以便我们核对订单信息。确认收款后24小时内发货！
                      </p>
                    </div>
                  </div>
                )}

                <div className="payment-buttons">
                  <button className="btn-secondary" onClick={handleBackToConfirm}>
                    ← 返回上一步
                  </button>
                  <button className="btn-success" onClick={handleClose}>
                    💚 已完成付款
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OrderModal; 