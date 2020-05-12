import React from 'react';

import { Counter } from 'components/shared';

const CartProduct = ({ title, amount, price }) => {
  return (
    <div>
      <div>{title}</div>
      <Counter amount={amount} />
      <div>{price}</div>
    </div>
  );
};

export default CartProduct;
