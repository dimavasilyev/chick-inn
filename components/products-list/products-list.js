import React, { useState } from 'react';

import { sortByMenuOrder, ExtendedProductsViewTypes, viewTypes } from 'helpers';
import ProductShort from './product-short';
import ProductExtended from './product-extended';
import PreventOrder from './prevent-order';
import { useCart } from '../../hooks';

const ProductsList = (props) => {
  const { categoriesWithProducts = [] } = props;
  const [extendedProductId, setExtendedProduct] = useState();
  const [showModal, setShowModal] = useState(false);
  const { addItem } = useCart();

  const handleShortProductClick = (item) => {
    if (!isWorkingHours()) {
      preventOrder();
      return;
    }

    setExtendedProduct(item.id);
    if (item?.viewType === viewTypes.nonextended) {
      addToCart();
    } else {
      setExtendedProduct(item.id);
    }
  };

  if (categoriesWithProducts.length === 0) {
    return preloader;
  }

  const isWorkingHours = () => {
    const date = new Date();
    let currentHour = date.getHours();
    const from = 11;
    const to = 23;

    if (currentHour === 22) {
      const currentMinutes = date.getMinutes();

      if (currentMinutes > 30) {
        currentHour = 23;
      }
    }

    if (currentHour >= from && currentHour < to) {
      return true;
    }

    return false;
  }

  const preventOrder = () => {
    setShowModal(true)
  }

  return (
    <div>
      {showModal && <PreventOrder onClose={() => setShowModal(false)} />}
      {categoriesWithProducts.map(({ name, id, data, slug }) => {
        if (data?.length) {
          const sortedData = sortByMenuOrder(data);

          return (
            <div key={id} className="pt-32 -mt-16 container" id={`${slug}`}>
              <h2 className="text-4xl pb-10 text-center category-title font-bold">{name}</h2>
              <ul className="grid grid-cols-1 lg:grid-cols-2 row-gap-10 col-gap-20">
                {sortedData.map((item) => (
                  <li key={item.id}>
                    {
                      // extendedProductId === item.id &&
                      // item.viewType &&
                      // item.viewType !== viewTypes.nonextended && (
                      extendedProductId === item.id && (
                        <ProductExtended
                          {...item}
                          onClose={() => setExtendedProduct(undefined)}
                          viewType={item?.viewType ?? viewTypes.select}
                          addToCart={addItem}
                        />
                      )
                    }
                    <ProductShort {...item} onClick={() => handleShortProductClick(item)} />
                  </li>
                ))}
              </ul>
            </div>
          );
        }
      })}
      <style jsx>
        {`
          .category-title {
            text-transform: uppercase;
          }

          .container:first-child {
            margin-top: -8em;
          }
        `}
      </style>
    </div>
  );
};

export const preloader = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      margin: '5em auto',
      // background: 'rgb(255, 255, 255)',
      display: 'block',
      shapeRendering: 'auto',
    }}
    width="200px"
    height="200px"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <circle
      cx="50"
      cy="50"
      fill="none"
      stroke="#ECBE02"
      strokeWidth="10"
      r="35"
      strokeDasharray="164.93361431346415 56.97787143782138"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1s"
        values="0 50 50;360 50 50"
        keyTimes="0;1"
      ></animateTransform>
    </circle>
  </svg>
);

export default ProductsList;
