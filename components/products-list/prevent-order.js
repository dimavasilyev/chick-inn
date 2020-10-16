import React from 'react';

import OrderImg from '../../assets/order.jpeg';

import { useKeyPress } from '../../hooks';

const PreventOrder = ({ onClose }) => {
  useKeyPress('Escape', onClose);

  const deliveryText = 'Acceptăm comenzi zilnic: 11:00-22:30'

  const mobileView = (
    <div className="lg:hidden p-4 pt-32 rounded relative bg-black h-full">
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
      <img className="image px-12" src={OrderImg} />
      <div className="p-6 text-xl text-center font-semibold ">
        {deliveryText}
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
          </div>
          <img className="w-2/3 mx-auto image" src={OrderImg} />
          <div className="mb-6 mt-10 font-bold leading-none text-3xl text-center">{deliveryText}</div>
        </div>
      </div>
      <style jsx>
        {`
            .image {
                border-radius: 20px;
            }

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
            height: 80px;
            font-size: 2rem;
            padding: 20px 35px;
          }
        `}
      </style>
    </div>
  );
};

export default PreventOrder;
