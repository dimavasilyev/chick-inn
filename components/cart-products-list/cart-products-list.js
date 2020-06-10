import React from 'react';

import CartProduct from './cart-product';
import { useCart } from '../../hooks';

const CartProductsList = () => {
  const { removeItem, items } = useCart();

  return (
    <div>
      {items.map((item) => (
        <CartProduct key={item.id} {...item} onRemove={() => removeItem(item.id)} />
      ))}
    </div>
  );
};

export default CartProductsList;
