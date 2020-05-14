import React from 'react';

import { Button } from '../shared';

const ProductShort = ({ id, name, weight, price, onClick, images }) => {
  const [mainImageObj] = images;

  return (
    <div onClick={onClick} className="product-short bg-black">
      <img src={mainImageObj?.src} />
      <div className="custom-grid">
        <div className="name">{name}</div>
        <div className="weight">{weight ? `${weight}g` : ''}</div>
        <div className="price">{price} lei</div>
        <Button className="button">Заказать</Button>
      </div>

      <style jsx>
        {`
          .product-short {
            cursor: pointer;
            border-radius: 25px;
            overflow: hidden;
          }

          .custom-grid {
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
          }
          .button {
            grid-area: button;
          }
          .price {
            grid-area: price;
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
