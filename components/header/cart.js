import React from 'react';
import Link from 'next/link';

import { IconContainer } from '../shared';
import { useCart } from '../../hooks';
import CartIcon from '../../assets/cart-icon.svg';

const Cart = () => {
  const { totalCount } = useCart();

  return (
    <div className="cart-container w-24 cursor-pointer font-normal">
      <IconContainer>
        <Link href="/cart">
          <div>
            <CartIcon />
          </div>
        </Link>
        {totalCount > 0 && (
          <div className="counter bg-yellow flex items-center justify-center leading-4">
            {totalCount}
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
          top: 55%;
          right: 20%;
        }
      `}</style>
    </div>
  );
};

export default Cart;
