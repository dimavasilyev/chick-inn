import React from 'react';
import Link from 'next/link';

import { IconContainer } from '../shared';
import { useCart } from '../../hooks';
import CartIcon from '../../assets/cart-icon.svg';

const Cart = () => {
  const { total } = useCart();

  return (
    <div className="cart-container w-24 cursor-pointer">
      <IconContainer>
        <Link href="/cart">
          <div>
            <CartIcon />
          </div>
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
          top: 55%;
          right: 20%;
        }
      `}</style>
    </div>
  );
};

export default Cart;
