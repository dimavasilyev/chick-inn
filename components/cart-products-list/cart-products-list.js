import React from 'react';

import CartProduct from './cart-product';
import { useCart } from '../../hooks';

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
        <div>Empty cart</div>
      )}
    </div>
  );
};

export default CartProductsList;
