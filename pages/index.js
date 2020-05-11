import React from 'react';
import Layout from '../components/layout';
import ProductsList from '../components/products-list/products-list';
import Contacts from '../components/contacts';
import Delivery from '../components/delivery';
import AboutUs from '../components/about-us';

const Index = () => {
  return (
    <Layout>
      <ProductsList />
      <Contacts />
      <Delivery />
      <AboutUs />
    </Layout>
  );
};

export default Index;
