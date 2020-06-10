import React from 'react';

import { Button } from '../shared';

const ProductShort = ({ id, name, weight, price, onClick, images }) => {
  const [mainImageObj] = images;

  return (
    <div onClick={onClick} className="product-short bg-black">
      <img src={mainImageObj?.src} />
      <div className="p-6 mini:p-8  items-center">
        <div className="flex items-center justify-between mb-4">
          <div className="text-3xl mini:text-4xl justify-center font-black name mr-8 hover:text-yellow">
            {name}
          </div>
          <div className="text-xl mini:text-2xl weight font-black">
            {weight ? `${weight}g` : ''}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Button className="button">Adauga in cos</Button>
          <div className="text-2xl mini:text-3xl price font-black">{price} lei</div>
        </div>
      </div>
      <style jsx>
        {`
          .product-short {
            cursor: pointer;
            border-radius: 25px;
            overflow: hidden;
            box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.5);
          }

          img {
            height: auto;
            width: 100%;
            max-height: 410px;
          }
        `}
      </style>
    </div>
  );
};

const MemoProductShort = React.memo(ProductShort);

export default MemoProductShort;
