import React from 'react';

const IconContainer = ({ className, width, children }) => {
  return (
    <div className={`icon-container ${className ?? ''}`}>
      {children}
      <style jsx>
        {`
          .icon-container {
            min-width: 50px;
            width: ${width ? width + 'px' : 'auto'};
            cursor: pointer;
          }

          .icon-container svg {
            width: 100%;
          }

          .icon-container:hover svg * {
            fill: #ecbe02;
          }
        `}
      </style>
    </div>
  );
};

export default IconContainer;
