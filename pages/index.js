import React from 'react';
import axios from 'axios';

import Layout from '../components/layout';
import ProductsList from '../components/products-list/products-list';
import Contacts from '../components/contacts';
import Delivery from '../components/delivery';
import AboutUs from '../components/about-us';

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
  const { data: categories } = await axios.get('http://localhost:3000/getCategories');
  const { data: products } = await axios.get('http://localhost:3000/getProducts');

  categories.forEach((category) => {
    if (category.count > 0 && category.display === 'products') {
      products.map((product) => {
        if (product.categories.some((productCategory) => category.id === productCategory.id)) {
          if (category.data?.length > 0) {
            category.data.push({ ...product, viewType: 'COMBO' });
          } else {
            category.data = [{ ...product, viewType: 'COMBO' }];
          }
        }
      });
    }
  });

  return {
    props: {
      products,
      categoriesWithProducts: categories,
    },
  };
}

export default Index;
