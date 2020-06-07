import React from 'react';

import { Button } from '../shared';

const ProductShort = ({ id, name, weight, price, onClick, images }) => {
  const [mainImageObj] = images;

  return (
    <div onClick={onClick} className="product-short bg-black">
      <img src={mainImageObj?.src} />
      <div className="custom-grid md:mobile-custom-grid p-6 items-center">
        <div className="text-4xl justify-centername font-black">{name}</div>
        <div className="text-2xl weight font-black">{weight ? `${weight}g` : ''}</div>
        <div className="text-3xl price font-black">{price} lei</div>
        <Button className="button">Adauga in cos</Button>
      </div>
      <style jsx>
        {`
          .product-short {
            cursor: pointer;
            border-radius: 25px;
            overflow: hidden;
            box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.5);
          }

          .custom-grid {
            display: grid;
            grid-gap: 1em;
            grid-template-areas:
              'name weight'
              'button price';
          }

          .mobile-custom-grid {
            display: grid;
            grid-template-areas:
              'name weight'
              'button price';
          }

          .name {
            grid-area: name;
          }
          .weight {
            grid-area: weight;
            align-self: end;
            margin-bottom: 0.25em;
            justify-self: end;
          }
          .button {
            grid-area: button;
          }
          .price {
            grid-area: price;
            justify-self: end;
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
