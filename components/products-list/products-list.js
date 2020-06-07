import React, { useState } from 'react';

import ProductShort from './product-short';
import ProductExtended from './prooduct-extended';

import { sortByMenuOrder, ExtendedProductsViewTypes, viewTypes } from 'helpers';

const ProductsList = ({ categoriesWithProducts = [] }) => {
  console.log('categoriesWithProducts:', categoriesWithProducts);
  const [extendedProductId, setExtendedProduct] = useState();

  const handleShortProductClick = (item) => {
    setExtendedProduct(item.id);
    if (item?.viewType === viewTypes.nonextended) {
      console.log('add to cart');
    } else {
      setExtendedProduct(item.id);
    }
  };

  sortByMenuOrder(categoriesWithProducts);

  return (
    <div>
      {categoriesWithProducts.map(({ name, id, data, slug }) => {
        if (data?.length) {
          return (
            <div key={id} className="pt-32 -mt-16 container" id={`${slug}`}>
              <h2 className="text-4xl pb-10 text-center category-title">{name}</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 row-gap-10 col-gap-20">
                {data?.map((item) => (
                  <li key={item.id}>
                    {
                      // extendedProductId === item.id &&
                      // item.viewType &&
                      // item.viewType !== viewTypes.nonextended && (
                      extendedProductId === item.id && (
                        <ProductExtended
                          {...item}
                          onClose={() => setExtendedProduct(undefined)}
                          viewType={item.viewType ?? viewTypes.select}
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
            font-family: 'Chick-inn';
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

export default ProductsList;
