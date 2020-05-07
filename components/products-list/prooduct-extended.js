import React from 'react';

import Button from '../button';

const ProductExtended = ({ id, title, description, weight, price }) => {
  return (
    <div className="product-short">
      <div>{title}</div>
      <div>{description}</div>
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

export default ProductExtended;
