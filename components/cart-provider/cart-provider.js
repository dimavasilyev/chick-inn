import React, { createContext, useEffect, useState } from 'react';

const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const defaultItems = [
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

  const [items, setItems] = useState(defaultItems);

  const total = items.map((item) => item.quantity).reduce((a, b) => a + b, 0);

  const addItem = (newItem) => {
    const sameItem = items.find((item) => item.id === newItem.id);

    if (sameItem) {
      setItems(
        items.map((item) => {
          if (item.id === sameItem.id) {
            return { ...item, amount: item.amount + 1 };
          }
          return item;
        }),
      );
    } else {
      setItems([...items, newItem]);
    }
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item !== id));
  };

  const emptyCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, total, emptyCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
