import React from 'react';
import Layout from '../components/layout';

const Delivery = () => {
  const items = [
    {
      text: 'Приём заказов: ежедневно с 11:00 до 22:30',
    },
    {
      text: 'Бесплатная доставка: от 250 лей',
    },
    {
      text: 'Стоимость доставки: 35 лей',
    },
    {
      text: 'Доставка по городу: от 45 мин',
    },
  ];

  return (
    <Layout>
      <div className="bg-black p-8" style={{ borderRadius: 15 }}>
        <ul className="text-xl lg:text-2xl">
          {items.map((item) => (
            <li key={item.text} className="flex mt-3">
              <div className="w-4 bg-yellow h-4 mr-3 rounded-full mt-3" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>
        {`
          li > div {
            min-width: 1rem;
          }
        `}
      </style>
    </Layout>
  );
};

export default Delivery;
