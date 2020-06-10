import React from 'react';

const Counter = ({ amount = 0, onChange }) => {
  const increase = () => {
    if (amount < 100) {
      onChange(amount + 1);
    }
  };

  const decrease = () => {
    if (amount > 0) {
      onChange(amount - 1);
    }
  };

  return (
    <div className="flex items-center">
      <button onClick={decrease} className="bg-yellow">
        -
      </button>
      <div className="px-3 text-xl">{amount}</div>
      <button onClick={increase} className="bg-yellow">
        +
      </button>
      <style jsx>
        {`
          button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 20px;
            min-width: 20px;
            height: 20px;
            font-size: 18px;
            border-radius: 3px;
            line-height: 20px;
            cursor: pointer;
            outline: none;
          }
        `}
      </style>
    </div>
  );
};

export default Counter;
