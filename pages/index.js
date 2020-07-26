import React from 'react';

import Layout from '../components/layout';
import ProductsList from '../components/products-list/products-list';
import Slider from '../components/slider';
import { useProducts } from '../hooks';

const Index = () => {
  const { categoriesWithProducts } = useProducts();

  return (
    <Layout>
      <Slider />
      <ProductsList categoriesWithProducts={categoriesWithProducts} />
    </Layout>
  );
};

export default Index;
