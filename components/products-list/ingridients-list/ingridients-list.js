import React, { useState } from 'react';

import Ingridient from './ingridient';

const IngridientsList = () => {
  const [isActive, setState] = useState(false);
  const toggleState = () => setState(!isActive);

  const handleIngridientsChange = (id, amount) => {
    console.log('ingridient', id, amount);
  };

  return (
    <div className="ingridients-list">
      <div onClick={toggleState} className="cursor-pointer text-2xl flex items-center mb-4">
        <span className="mr-2">Adauga in roll</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={isActive && 'transform rotate-180'}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM5.70711 9.70711L9.29289 13.2929C9.68342 13.6834 10.3166 13.6834 10.7071 13.2929L14.2929 9.70711C14.9229 9.07714 14.4767 8 13.5858 8H6.41421C5.52331 8 5.07714 9.07714 5.70711 9.70711Z"
            fill="#E5B902"
          />
        </svg>
      </div>
      {isActive && (
        <ul>
          {items.map((item) => (
            <li key={item.id} className="mb-4">
              <Ingridient {...item} onChange={handleIngridientsChange} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const items = [
  {
    title: 'Соус Spicy',
    weight: 20,
    price: 6,
    id: 2,
  },
  {
    title: 'Кетчуп',
    weight: 40,
    price: 6,
    id: 2,
  },
  {
    title: 'Соус белый',
    weight: 40,
    price: 6,
    id: 2,
  },
  {
    title: 'Соус чеснок',
    weight: 40,
    price: 6,
    id: 2,
  },
  {
    title: 'Лук маринованный ',
    weight: 20,
    price: 3,
    id: 2,
  },
  {
    title: 'Куриное мясо',
    weight: 50,
    price: 10,
    id: 2,
  },
  {
    title: 'Говяжья котлета',
    weight: 50,
    price: 10,
    id: 2,
  },
  {
    title: 'Сыр Чеддар',
    weight: 20,
    price: 7,
    id: 2,
  },
  {
    title: 'Сыр Дор-Блю',
    weight: 50,
    price: 6,
    id: 2,
  },
  {
    title: 'Картофель фри',
    weight: 20,
    price: 6,
    id: 2,
  },
  {
    title: 'Томаты',
    weight: 30,
    price: 6,
    id: 2,
  },
  {
    title: 'Солёные огурцы',
    weight: 30,
    price: 6,
    id: 2,
  },
  {
    title: 'Салат Коул-Слоу',
    weight: 30,
    price: 6,
    id: 2,
  },
];

export default IngridientsList;
