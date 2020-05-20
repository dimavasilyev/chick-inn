import React from 'react';

import CartProduct from './cart-product';
import { useCart } from '../cart-provider/cart-provider';

const CartProductsList = () => {
  const { removeItem } = useCart();

  const items = [
    {
      id: 1,
      title: 'Chikinn Roll',
      amount: 1,
      price: 49,
    },
    {
      id: 2,
      title: 'Blue Cheese Roll',
      amount: 2,
      price: 69,
    },
  ];

  return (
    <div>
      {items.map((item) => (
        <CartProduct key={item.id} {...item} onRemove={() => removeItem(item.id)} />
      ))}
    </div>
  );
};

export default CartProductsList;
