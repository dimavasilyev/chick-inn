import React, { createContext, useEffect, useState } from 'react';

const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const defaultItems = [];

  const [items, setItems] = useState(defaultItems);

  const totalCount = items.map((item) => item.quantity).reduce((a, b) => a + b, 0);
  const totalPrice = items.map((item) => item.totalPrice).reduce((a, b) => a + b, 0);

  const addItem = (product, amount) => {
    const sameItem = items.find((item) => item.id === product.id);

    if (sameItem) {
      setItems(
        items.map((item) => {
          if (item.id === sameItem.id) {
            const cartItem = {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.totalPrice + product.price,
            };

            return cartItem;
          }
          return item;
        }),
      );
    } else {
      const cartItem = {
        id: product.id,
        name: product.name,
        quantity: 1,
        totalPrice: product.price,
        image: product.image,
        price: product.price,
      };

      setItems([...items, cartItem]);
    }
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const emptyCart = () => {
    setItems([]);
  };

  const changeItemQuantity = (id, quantity) => {
    setItems(
      items.map((item) => {
        const newPrice =
          quantity > item.quantity ? item.totalPrice + item.price : item.totalPrice - item.price;

        if (item.id === id) {
          return {
            ...item,
            quantity,
            totalPrice: newPrice,
          };
        }
        return item;
      }),
    );
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        totalCount,
        totalPrice,
        emptyCart,
        changeItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
