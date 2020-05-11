import React, { useState } from 'react';
import Link from 'next/link';

import CartIcon from '../../assets/cart-icon.svg';

import { IconContainer } from '../shared';

const Delivery = () => {
  const [counter, setCount] = useState(7);

  return (
    <div className="cart-container">
      <IconContainer width={100}>
        <Link href="/cart">
          <CartIcon />
        </Link>
        {counter > 0 && (
          <div className="counter bg-yellow flex items-center justify-center">{counter}</div>
        )}
      </IconContainer>
      <style jsx>{`
        .cart-container {
          position: relative;
        }

        .counter {
          min-width: 20px;
          height: 20px;
          border-radius: 50%;
          position: absolute;
          right: 20px;
          top: 33px;
          font-size: 16px;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default Delivery;
