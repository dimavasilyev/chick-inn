import React from 'react';

import { Button } from '../shared';

const ProductShort = ({ id, title, weight, price, onClick }) => {
  return (
    <div onClick={() => onClick(id)} className="product-short bg-black">
      <div>{title}</div>
      <div>{weight}g</div>
      <div>{price} lei</div>
      <Button>Заказать</Button>
      <style jsx>
        {`
          .product-short {
            border: 1px solid white;
            cursor: pointer;
            border-radius: 25px;
            overflow: hidden;
          }
        `}
      </style>
    </div>
  );
};

const MemoProductShort = React.memo(ProductShort);

export default MemoProductShort;
