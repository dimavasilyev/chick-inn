import React from 'react';

import { Counter } from 'components/shared';

const CartProduct = ({ title, amount, price, onRemove }) => {
  return (
    <div>
      <div>{title}</div>
      <Counter amount={amount} />
      <div>{price}</div>
      <div onClick={onRemove}>del</div>
    </div>
  );
};

export default CartProduct;
