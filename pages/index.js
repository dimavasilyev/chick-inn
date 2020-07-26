import React, { useEffect } from 'react';

import Layout from '../components/layout';
import ProductsList from '../components/products-list/products-list';
import Slider from '../components/slider';
import { useProducts } from '../hooks';
import api from '../api';
import { sortByMenuOrder } from '../helpers';

const Index = ({ products = [], categories = [] }) => {
  const { categoriesWithProducts, setCategoriesWithProducts, setCategories } = useProducts();

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
      setCategories(categories);
    }
  }, [categories.length]);

  return (
    <Layout>
      <Slider />
      <ProductsList categoriesWithProducts={categoriesWithProducts} />
    </Layout>
  );
};

export async function getStaticProps() {
  return Promise.all([api.getCategories(), api.getProducts()]).then((values) => {
    const [categories, products] = values;

    return {
      props: {
        revalidate: 1,
        products: products.data,
        categories: sortByMenuOrder(categories.data).filter(
          (category) => category.slug !== 'uncategorized',
        ),
      },
    };
  });
}

export default Index;
