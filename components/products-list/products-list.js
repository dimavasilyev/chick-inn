import React from 'react';

import Product from './product-short';

const ProductsList = () => {
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
  ];
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Product {...item} />
        </li>
      ))}
    </ul>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      items: [
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
      ],
    },
  };
}

export default ProductsList;
