import React from 'react';

import CartProduct from './cart-product';
import { useCart } from '../../hooks';
import { ghostChickinn } from '../../helpers';
import GhostChickinn from '../../assets/transparent-chickinn.svg';

const CartProductsList = () => {
  const { removeItem, items, changeItemQuantity } = useCart();

  return (
    <div className="mb-16">
      {items.length > 0 ? (
        items.map((item) => (
          <CartProduct
            key={item.id}
            {...item}
            onRemove={() => removeItem(item.id)}
            onItemQuantityChange={(quantity) => changeItemQuantity(item.id, quantity)}
          />
        ))
      ) : (
        <div className="empty w-1/2 mx-auto">{ghostChickinn}</div>
      )}
      <style>
        {`
          .empty svg {
            width: 100%;
            height: 100%;
          }
        `}
      </style>
    </div>
  );
};

export default CartProductsList;
