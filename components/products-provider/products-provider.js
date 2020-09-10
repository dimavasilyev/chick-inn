import React, { createContext, useState, useEffect } from 'react';
import api from '../../api';
import { sortByMenuOrder } from '../../helpers';

const ProductsContext = createContext({});

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoriesWithProducts, setCategoriesWithProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0 && categories.length > 0) {
      const categoriesCopy = [...categories];

      categoriesCopy.forEach((category) => {
        if (category.count > 0 && category.display === 'products') {
          products.map((product) => {
            if (product.categories.some((productCategory) => category.id === productCategory.id)) {
              if (category.data?.length > 0) {
                category.data.push(product);
              } else {
                category.data = [product];
              }
            }
          });
        }
      });

      setCategoriesWithProducts(categoriesCopy);
    }
  }, [products, categories]);

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await api.getProducts();

    if (res) {
      const products = res.data;

      if (products) setProducts(products);
    }
  };

  const fetchCategories = async () => {
    const res = await api.getCategories();

    if (res) {
      const data = res.data;
      const categories = sortByMenuOrder(data);
      console.log('categories:', categories);

      setCategories(categories.filter((category) => category.slug !== 'uncategorized'));
    }
  };

  return (
    <ProductsContext.Provider
      value={{ categories, categoriesWithProducts, setCategoriesWithProducts, setCategories }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider, ProductsContext };
