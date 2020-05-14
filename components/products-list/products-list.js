import React, { useState } from 'react';

import ProductShort from './product-short';
import ProductExtended from './prooduct-extended';

import { sortByMenuOrder, ExtendedProductsViewTypes, viewTypes } from 'helpers';

const ProductsList = ({ categoriesWithProducts = [] }) => {
  const [extendedProductId, setExtendedProduct] = useState();

  const handleShortProductClick = (item) => {
    if (item?.viewType === viewTypes.nonextended) {
      console.log('add to cart');
    } else {
      setExtendedProduct(item.id);
    }
  };

  sortByMenuOrder(categoriesWithProducts);

  return (
    <div>
      {categoriesWithProducts.map(({ name, id, data }) => {
        if (data?.length) {
          return (
            <div key={id}>
              <h2 className="text-3xl my-10">{name}</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 row-gap-6 col-gap-8">
                {data?.map((item) => (
                  <li key={item.id}>
                    {console.log(item)}
                    {extendedProductId === item.id &&
                      item.viewType &&
                      item.viewType !== viewTypes.nonextended && (
                        <ProductExtended
                          {...item}
                          onClose={() => setExtendedProduct(undefined)}
                          viewType={item.viewType ?? viewTypes.select}
                        />
                      )}
                    <ProductShort {...item} onClick={() => handleShortProductClick(item)} />
                  </li>
                ))}
              </ul>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ProductsList;
