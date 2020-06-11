import React from 'react';
import { useTitle, useKeyPress } from '../../hooks';

import { Button } from 'components/shared';
import { cleanTextFromTags, ExtendedProductsViewTypes } from 'helpers';
import IngridientsList from './ingridients-list/ingridients-list';
import SelectIngridient from './select-ingridient';

const ProductExtended = ({
  id,
  name,
  description,
  weight,
  price,
  onClose,
  images,
  viewType,
  addToCart,
}) => {
  useTitle(name);
  useKeyPress('Escape', onClose);

  const [mainImageObj] = images;
  const views = ExtendedProductsViewTypes[viewType]?.views;
  const showToppings = views.includes('toppings') || true;
  const showSelect = views.includes('select');

  const calculatedPrice = price;

  const handleAddButton = () => {
    const preparedProduct = {
      id,
      name,
      price: Number(price),
      image: mainImageObj,
    };
    addToCart(preparedProduct);
    onClose();
  };

  const mobileView = (
    <div className="lg:hidden p-4 pt-32 rounded relative bg-black h-full">
      <img className="" src={mainImageObj?.src} />
      <div
        onClick={onClose}
        className="close-icon2__container absolute cursor-pointer"
        style={{ top: '6rem', right: '20px' }}
      >
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.826507 0.826506C-0.275501 1.92851 -0.275503 3.71522 0.826506 4.81723L7.31891 11.3096L0.83418 17.7944C-0.267828 18.8964 -0.267828 20.6831 0.83418 21.7851C1.93619 22.8871 3.7229 22.8871 4.8249 21.7851L11.3096 15.3004L17.7871 21.7778C18.8891 22.8798 20.6758 22.8798 21.7778 21.7778C22.8798 20.6758 22.8798 18.8891 21.7778 17.7871L15.3004 11.3096L21.7855 4.82451C22.8875 3.7225 22.8875 1.9358 21.7855 0.833787C20.6835 -0.268221 18.8968 -0.268223 17.7948 0.833786L11.3096 7.31891L4.81723 0.826506C3.71522 -0.275502 1.92852 -0.275502 0.826507 0.826506Z"
            fill="#D31116"
          />
        </svg>
      </div>
      <div className="p-6 sm::p-8  items-center">
        <div className="flex items-center justify-between mb-4">
          <div className="text-3xl sm::text-5xl justify-center font-black name mr-8">{name}</div>
          <div className="text-xl sm::text-2xl weight font-black">{weight ? `${weight}g` : ''}</div>
        </div>
        {description && <div className="text-lg mb-4">{cleanTextFromTags(description)}</div>}
        {showToppings && (
          <div className="mt-2">
            <IngridientsList />
          </div>
        )}
        {showSelect && (
          <div className="mt-2">
            <SelectIngridient />
          </div>
        )}
        <div className="flex items-center justify-between mt-6">
          <Button className="button" onClick={handleAddButton}>
            Adauga in cos
          </Button>
          <div className="text-2xl sm::text-4xl price font-black">{price} lei</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="product-extended">
      {mobileView}
      <div className="hidden lg:block">
        <div className="lg:px-56 py-16 lg:py-40 relative h-full">
          <div className="relative">
            <div onClick={onClose} className="close-icon__container">
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.826507 0.826506C-0.275501 1.92851 -0.275503 3.71522 0.826506 4.81723L7.31891 11.3096L0.83418 17.7944C-0.267828 18.8964 -0.267828 20.6831 0.83418 21.7851C1.93619 22.8871 3.7229 22.8871 4.8249 21.7851L11.3096 15.3004L17.7871 21.7778C18.8891 22.8798 20.6758 22.8798 21.7778 21.7778C22.8798 20.6758 22.8798 18.8891 21.7778 17.7871L15.3004 11.3096L21.7855 4.82451C22.8875 3.7225 22.8875 1.9358 21.7855 0.833787C20.6835 -0.268221 18.8968 -0.268223 17.7948 0.833786L11.3096 7.31891L4.81723 0.826506C3.71522 -0.275502 1.92852 -0.275502 0.826507 0.826506Z"
                  fill="#D31116"
                />
              </svg>
            </div>
            <img className="float-right w-1/2" src={mainImageObj?.src} />
          </div>
          <div className="text-5xl font-black mb-6 name leading-none">{name}</div>
          {description && <div className="text-3xl mb-8">{cleanTextFromTags(description)}</div>}
          <div className="text-4xl weight font-black">{weight ? `${weight}g` : ''}</div>
          {showToppings && (
            <div className="mt-8">
              <IngridientsList />
            </div>
          )}
          {showSelect && (
            <div className="mt-8">
              <SelectIngridient />
            </div>
          )}
          <div className="flex items-center mt-10 mb-32">
            <Button className="mr-8 rounded big-button text-4xl" onClick={handleAddButton}>
              Adauga in cos
            </Button>
            <div className="text-5xl font-black ">{calculatedPrice} lei</div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .product-extended {
            position: fixed;
            overflow: scroll;
            background: rgba(0, 0, 0, 0.9);
            z-index: 999;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
          }

          .close-icon__container {
            width: 25px;
            height: 25px;
            cursor: pointer;

            position: absolute;
            right: 0;
            top: -50px;
          }

          .name {
            font-size: 72px;
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
          .product-extended button.big-button {
            height: 100px;
            font-size: 2.5rem;
            padding: 0 25px;
          }
        `}
      </style>
    </div>
  );
};

const MemoProductExtended = React.memo(ProductExtended);

export default MemoProductExtended;
