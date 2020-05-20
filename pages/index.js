import React from 'react';

import Layout from '../components/layout';
import ProductsList from '../components/products-list/products-list';
import Contacts from '../components/contacts';
import Delivery from '../components/delivery';
import AboutUs from '../components/about-us';
import api from '../api';

const Index = ({ categoriesWithProducts }) => {
  return (
    <Layout>
      <ProductsList categoriesWithProducts={categoriesWithProducts} />
      <Contacts />
      <Delivery />
      <AboutUs />
    </Layout>
  );
};

export async function getStaticProps() {
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

  return {
    props: {
      categoriesWithProducts: categories,
    },
  };
}

export default Index;
