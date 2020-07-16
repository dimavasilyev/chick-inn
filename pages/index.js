import React, { useEffect, useState } from 'react';

import Layout from '../components/layout';
import ProductsList from '../components/products-list/products-list';
import Slider from '../components/slider';
import api from '../api';
import { useCategories } from '../hooks';

const Index = () => {
  const [categoriesWithProducts, setCategoriesWithProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const { categories } = useCategories();

  const fetchProducts = async () => {
    const { data: products } = await api.getProducts();

    setProducts(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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

  return (
    <Layout>
      <Slider />
      <ProductsList categoriesWithProducts={categoriesWithProducts} />
    </Layout>
  );
};

export default Index;
