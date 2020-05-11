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
      <div className="px-2">{amount}</div>
      <button onClick={increase} className="bg-yellow">
        +
      </button>
      <style jsx>
        {`
          button {
            display: flex;
            justify-content: center;
            width: 30px;
            min-width: 30px;
            height: 30px;
            border-radius: 5px;
            line-height: 28px;
            font-weight: 600;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default Counter;
