import React from 'react';

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className="button bg-red">
      {children}
      <style jsx>
        {`
          .button {
            height: 40px;
            padding: 0 12px;
            font-weight: 600;
          }
        `}
      </style>
    </button>
  );
};

export default Button;
