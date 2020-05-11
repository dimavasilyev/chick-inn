import React, { useRef } from 'react';
import { useTitle, useClickOutside, useKeyPress } from '../../hooks';

import { Button } from 'components/shared';
import IngridientsList from './ingridients-list/ingridients-list';

import CloseIcon from '../../assets/close.svg';

const ProductExtended = ({ id, title, description, weight, price, onClose }) => {
  const ref = useRef();
  useTitle(title);
  useClickOutside(ref, onClose);
  useKeyPress('Escape', onClose);

  return (
    <div ref={ref} className="product-extended container">
      <div onClick={onClose} className="close-icon__container">
        <CloseIcon />
      </div>
      <div className="text-2xl">{title}</div>
      <div>{description}</div>
      <div>{weight}g</div>
      <div>{price} lei</div>
      <IngridientsList />
      <Button>Adauga in cos</Button>
      <style jsx>
        {`
          .product-extended {
            position: fixed;
            overflow: scroll;
            background: rgba(0, 0, 0, 0.85);
            z-index: 9;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            padding-top: 10em;
          }

          .close-icon__container {
            width: 30px;
            height: 30px;
            background: pink;
            cursor: pointer;
            float: right;
          }
          .close-icon__container svg {
            width: 100%;
            height: 100%;
            fill: white;
          }
        `}
      </style>
      <style jsx global>
        {`
          body {
            overflow: hidden;
          }
        `}
      </style>
    </div>
  );
};

const MemoProductExtended = React.memo(ProductExtended);

export default MemoProductExtended;
