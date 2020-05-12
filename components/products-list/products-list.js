import React, { useState } from 'react';

import ProductShort from './product-short';
import ProductExtended from './prooduct-extended';

const ProductsList = () => {
  const [extendedProductId, setExtendedProduct] = useState();

  const items = [
    {
      id: 1,
      title: "Chik'Inn Roll",
      weight: 380,
      price: 49,
    },
    {
      id: 2,
      title: 'Crispy Roll',
      weight: 380,
      price: 59,
    },
    {
      id: 3,
      title: 'Blue cheese Roll',
      weight: 380,
      price: 69,
    },
    {
      id: 4,
      title: 'Double cheese Roll',
      weight: 400,
      price: 59,
    },
    {
      id: 5,
      title: 'Double cheese Roll',
      weight: 400,
      price: 59,
    },
    {
      id: 6,
      title: 'Double cheese Roll',
      weight: 400,
      price: 59,
    },
    {
      id: 7,
      title: 'Double cheese Roll',
      weight: 400,
      price: 59,
    },
    {
      id: 8,
      title: 'Double cheese Roll',
      weight: 400,
      price: 59,
    },
    {
      id: 9,
      title: 'Double cheese Roll',
      weight: 400,
      price: 59,
    },
  ];

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 row-gap-6 col-gap-8">
      {items.map((item) => (
        <li key={item.id}>
          {extendedProductId === item.id && (
            <ProductExtended {...item} onClose={() => setExtendedProduct(undefined)} />
          )}
          <ProductShort {...item} onClick={setExtendedProduct} />
        </li>
      ))}
    </ul>
  );
};

ProductsList.getInitialProps = async (ctx) => {
  const res = await fetch('/getProducts');
  const json = await res.json();

  return { stars: 1 };
};

export async function getStaticProps(context) {
  return {
    props: {},
  };
}

export default ProductsList;
