import React from 'react';

import Button from '../button';
import { useTitle } from '../../hooks';

const ProductShort = ({ id, title, weight, price }) => {
  useTitle('hello');

  return (
    <div className="product-short">
      <div>{title}</div>
      <div>{weight}g</div>
      <div>{price} lei</div>
      <Button>Adauga in cos</Button>
      <style jsx>
        {`
          .product-short {
            border: 1px solid white;
            width: 50%;
          }
        `}
      </style>
    </div>
  );
};

export default ProductShort;
