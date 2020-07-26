import React from 'react';

import { Counter } from 'components/shared';

const CartProduct = ({ name, quantity, totalPrice, image, onRemove, onItemQuantityChange }) => {
  let preparedName = name.length > 14 ? `${name.substring(0, 14)}...` : name;

  return (
    <div className="flex mb-8 items-center">
      <img className="w-16 lg:w-32 mr-4 lg:mr-8 rounded" src={image?.src} />
      <div className="flex-1">
        <div className="text-2xl lg:text-4xl leading-none title mb-3" title={name}>
          {preparedName}
          <div onClick={onRemove} className=" cursor-pointer close-icon">
            <svg
              width="14"
              height="14"
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
        </div>

        <div className="flex justify-between">
          <Counter amount={quantity} onChange={onItemQuantityChange} nonZero />
          <div className="text-xl lg:text-2xl">{totalPrice} lei</div>
        </div>
      </div>

      <style jsx>
        {`
          .title {
            display: inline;
            flex: 1;
            position: relative;
          }

          .close-icon {
            position: absolute;
            right: -30px;
            top: 50%;
            transform: translateY(-50%);
          }

          @media only screen and (max-width: 768px) {
            .title {
              min-width: 185px;
              width: 185px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default CartProduct;
