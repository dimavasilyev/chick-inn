import React from 'react';

import { Button } from 'components/shared';
import api from '../api';

const OrderForm = () => {
  const sum = 49;

  const makeOrder = () => {
    api.makeOrder();
  };

  return (
    <div className="flex flex-col">
      <input type="text" placeholder="numele" />
      <input type="text" placeholder="telefon" />
      Metoda de livrare
      <input type="text" placeholder="adresa" />
      Comentarii
      <textarea />
      <Button onClick={makeOrder}>Заказать</Button>
      Totul: {sum} lei
    </div>
  );
};

export default OrderForm;
