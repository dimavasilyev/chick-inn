import React, { createContext, useState } from 'react';

const ProductsContext = createContext({});

const ProductsProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [categoriesWithProducts, setCategoriesWithProducts] = useState([]);

  return (
    <ProductsContext.Provider
      value={{ categories, categoriesWithProducts, setCategoriesWithProducts, setCategories }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider, ProductsContext };
