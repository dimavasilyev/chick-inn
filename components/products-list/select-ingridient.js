import React from 'react';

const SelectIngridient = ({
  items = [
    { id: 1, title: 'Ketchup' },
    { id: 2, title: 'Tartat' },
  ],
}) => {
  return (
    <div className="inline-flex items-center relative">
      <select className="text-xl lg:text-2xl bg-black appearance-none outline-none pr-8  cursor-pointer">
        {items.map((item) => (
          <option key={item.id}>{item.title}</option>
        ))}
      </select>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-0 pointer-events-none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM5.70711 9.70711L9.29289 13.2929C9.68342 13.6834 10.3166 13.6834 10.7071 13.2929L14.2929 9.70711C14.9229 9.07714 14.4767 8 13.5858 8H6.41421C5.52331 8 5.07714 9.07714 5.70711 9.70711Z"
          fill="#E5B902"
        />
      </svg>
    </div>
  );
};

export default SelectIngridient;
