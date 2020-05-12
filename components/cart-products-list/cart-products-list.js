import React from 'react';

import CartProduct from './cart-product';

const CartProductsList = () => {
  const items = [
    {
      title: 'Chikinn Roll',
      amount: 1,
      price: 49,
    },
    {
      title: 'Blue Cheese Roll',
      amount: 2,
      price: 69,
    },
  ];
  return (
    <div>
      {items.map((item) => (
        <CartProduct {...item} />
      ))}
    </div>
  );
};

export default CartProductsList;
