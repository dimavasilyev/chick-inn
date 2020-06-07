import React from 'react';

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className="button bg-red font-black">
      {children}
      <style jsx>
        {`
          .button {
            height: 57px;
            padding: 0 12px;
            box-shadow: inset 0px 4px 5px 0px rgba(0, 0, 0, 0.25);
            font-size: 28px;
            border-radius: 25px;
          }
        `}
      </style>
    </button>
  );
};

export default Button;
