import React, { useEffect, useState } from 'react';

import Layout from '../components/layout';
import ProductsList from '../components/products-list/products-list';
import Slider from '../components/slider';
import api from '../api';

const Index = () => {
  const [categoriesWithProducts, setCategoriesWithProducts] = useState([]);

  const fetchProducts = async () => {
    const { data: categories } = await api.getCategories();
    const { data: products } = await api.getProducts();

    categories.forEach((category) => {
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

    setCategoriesWithProducts(categories);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Layout>
      <Slider />
      <ProductsList categoriesWithProducts={categoriesWithProducts} />
    </Layout>
  );
};

export default Index;
