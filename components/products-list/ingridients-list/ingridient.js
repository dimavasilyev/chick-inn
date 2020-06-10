import React from 'react';

import { Counter } from 'components/shared';

const Ingridient = ({ id, title, weight, price, amount = 0, onChange }) => {
  const handleChange = (amount) => {
    onChange(id, amount);
  };

  return (
    <div className="flex items-center">
      <Counter onChange={handleChange} amount={amount} />
      <div className="pl-2 text-xl">
        {title} {weight}g - {price} lei
      </div>
    </div>
  );
};

export default Ingridient;
