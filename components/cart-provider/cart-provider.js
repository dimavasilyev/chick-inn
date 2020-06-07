import React, { createContext, useEffect, useState, useContext } from 'react';

const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([
    {
      product_id: 93,
      quantity: 3,
    },
    {
      product_id: 93,
      quantity: 3,
    },
  ]);

  const total = items.map((item) => item.quantity).reduce((a, b) => a + b, 0);

  useEffect(() => {});

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item !== id));
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, total }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
