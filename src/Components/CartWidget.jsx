import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = ({ itemCount }) => {
  return (
    <div>
      <FaShoppingCart />
      <span>{itemCount}</span>
    </div>
  );
};

export default CartWidget;
