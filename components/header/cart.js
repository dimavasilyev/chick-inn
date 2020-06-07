import React, { useState } from 'react';
import Link from 'next/link';

import CartIcon from '../../assets/cart-icon.svg';

import { IconContainer } from '../shared';
import { useCart } from '../cart-provider/cart-provider';

const Delivery = () => {
  const { total } = useCart();

  return (
    <div className="cart-container hidden md:block">
      <IconContainer width={100}>
        <Link href="/cart">
          <CartIcon />
        </Link>
        {total > 0 && (
          <div className="counter bg-yellow flex items-center justify-center leading-4">
            {total}
          </div>
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
          font-size: 17px;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default Delivery;
