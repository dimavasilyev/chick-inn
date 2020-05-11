import React from 'react';

import { Counter } from 'components/shared';

const Ingridient = ({ id, title, weight, price, amount = 0 }) => {
  return (
    <div className="ingridient flex items-center mb-2">
      <Counter />
      <div className="pl-2">
        {title} - {weight} {price}g лей
      </div>
      <style jsx>{`
        .ingridient {
        }

        .control {
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
      `}</style>
    </div>
  );
};

export default Ingridient;
