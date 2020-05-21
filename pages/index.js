import React from 'react';

import Layout from '../components/layout';
import ProductsList from '../components/products-list/products-list';
import Contacts from '../components/contacts';
import Delivery from '../components/delivery';
import AboutUs from '../components/about-us';
import api from '../api';

import chickinnImg from '../assets/chickinn.jpg';
import chickinnMobileImg from '../assets/chickinn-mobile.jpg';

const Index = ({ categoriesWithProducts }) => {
  return (
    <style jsx global>
      {`
        body {
          width: 100vw;
          height: 100vh;
          margin: 0;
          background-image: url('${chickinnImg}');
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-position: center center;
          background-size: cover;
        }

        @media only screen and (max-width: 900px) {
          body {
            background-image: url('${chickinnMobileImg}');
          }
        }
      `}
    </style>
    // <Layout>
    //   <ProductsList categoriesWithProducts={categoriesWithProducts} />
    //   <Contacts />
    //   <Delivery />
    //   <AboutUs />
    // </Layout>
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
