import React, { useState } from 'react';

import Ingridient from './ingridient';

const IngridientsList = () => {
  const [isActive, setState] = useState(false);
  const toggleState = () => setState(!isActive);

  return (
    <div className="ingridients-list">
      <div onClick={toggleState} className="cursor-pointer">
        Adauga in roll
      </div>
      {isActive && (
        <ul>
          {items.map((item) => (
            <li key={item.key}>
              <Ingridient {...item} />
            </li>
          ))}
        </ul>
      )}
      <style jsx>{`
        .ingridients-list {
        }
      `}</style>
    </div>
  );
};

const items = [
  {
    title: 'Соус Spicy',
    weight: 20,
    price: 6,
  },
  {
    title: 'Кетчуп',
    weight: 40,
    price: 6,
  },
  {
    title: 'Соус белый',
    weight: 40,
    price: 6,
  },
  {
    title: 'Соус чеснок',
    weight: 40,
    price: 6,
  },
  {
    title: 'Лук маринованный ',
    weight: 20,
    price: 3,
  },
  {
    title: 'Куриное мясо',
    weight: 50,
    price: 10,
  },
  {
    title: 'Говяжья котлета',
    weight: 50,
    price: 10,
  },
  {
    title: 'Сыр Чеддар',
    weight: 20,
    price: 7,
  },
  {
    title: 'Сыр Дор-Блю',
    weight: 50,
    price: 6,
  },
  {
    title: 'Картофель фри',
    weight: 20,
    price: 6,
  },
  {
    title: 'Томаты',
    weight: 30,
    price: 6,
  },
  {
    title: 'Солёные огурцы',
    weight: 30,
    price: 6,
  },
  {
    title: 'Салат Коул-Слоу',
    weight: 30,
    price: 6,
  },
];

export default IngridientsList;
