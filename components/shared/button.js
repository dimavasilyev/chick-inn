import React from 'react';

const Button = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`${
        className ?? ''
      } button bg-red font-black text-2xl mini:text-3xl px-4 mini:px-8`}
    >
      {children}
      <style jsx>
        {`
          .button {
            height: 57px;
            box-shadow: inset 0px 4px 5px 0px rgba(0, 0, 0, 0.25);
            border-radius: 25px;
            outline: none;
          }
        `}
      </style>
    </button>
  );
};

export default Button;
