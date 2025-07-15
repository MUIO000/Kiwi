import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './CartButton.css';

const CartButton: React.FC = () => {
  const handleClick = () => {
    const target = document.querySelector('.pricing-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button className="cart-fab" onClick={handleClick} aria-label="前往购买">
      <FaShoppingCart size={24} />
    </button>
  );
};

export default CartButton; 