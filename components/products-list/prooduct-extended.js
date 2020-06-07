import React, { useRef } from 'react';
import { useTitle, useClickOutside, useKeyPress } from '../../hooks';

import { Button } from 'components/shared';
import { cleanTextFromTags, ExtendedProductsViewTypes } from 'helpers';
import IngridientsList from './ingridients-list/ingridients-list';
import SelectIngridient from './select-ingridient';

const ProductExtended = ({ id, name, description, weight, price, onClose, images, viewType }) => {
  const ref = useRef();
  useTitle(name);
  useClickOutside(ref, onClose);
  useKeyPress('Escape', onClose);

  const [mainImageObj] = images;
  const views = ExtendedProductsViewTypes[viewType]?.views;
  const showToppings = views.includes('toppings');
  const showSelect = views.includes('select');

  return (
    <div ref={ref} className="product-extended container">
      <div onClick={onClose} className="close-icon__container">
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.826507 0.826506C-0.275501 1.92851 -0.275503 3.71522 0.826506 4.81723L7.31891 11.3096L0.83418 17.7944C-0.267828 18.8964 -0.267828 20.6831 0.83418 21.7851C1.93619 22.8871 3.7229 22.8871 4.8249 21.7851L11.3096 15.3004L17.7871 21.7778C18.8891 22.8798 20.6758 22.8798 21.7778 21.7778C22.8798 20.6758 22.8798 18.8891 21.7778 17.7871L15.3004 11.3096L21.7855 4.82451C22.8875 3.7225 22.8875 1.9358 21.7855 0.833787C20.6835 -0.268221 18.8968 -0.268223 17.7948 0.833786L11.3096 7.31891L4.81723 0.826506C3.71522 -0.275502 1.92852 -0.275502 0.826507 0.826506Z"
            fill="#D31116"
          />
        </svg>
      </div>
      <img className="float-right w-1/2" src={mainImageObj?.src} />
      <div className="text-5xl font-black">{name}</div>
      <div className="text-2xl">{cleanTextFromTags(description)}</div>
      <div className="tex-2xl weight font-black">{weight ? `${weight}g` : ''}</div>
      {showToppings && <IngridientsList />}
      {showSelect && <SelectIngridient />}
      <div className="flex items-center">
        <Button>Adauga in cos</Button>
        <div className="text-3xl font-black">{price} lei</div>
      </div>
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
            width: 25px;
            height: 25px;
            cursor: pointer;

            position: absolute;
            right: 10px;
            top: 130px;
          }

          .close-icon__container svg {
            width: 100%;
            height: 100%;
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
