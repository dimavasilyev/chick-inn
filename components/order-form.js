import React from 'react';

import { Button } from 'components/shared';

const OrderForm = () => {
  const sum = 49;

  return (
    <div className="flex flex-col">
      <input type="text" placeholder="numele" />
      <input type="text" placeholder="telefon" />
      Metoda de livrare
      <input type="text" placeholder="adresa" />
      Comentarii
      <textarea />
      <Button>Заказать</Button>
      Totul: {sum} lei
    </div>
  );
};

export default OrderForm;
