import React from 'react';

const Dropdown = ({ items, renderItem }) => {
  return (
    <div className="dropdown-container flex flex-col absolute bg-black px-6 py-3">
      <ul>
        {items.map((item, i) => {
          return (
            <li className="mb-3" key={i}>
              {renderItem ? renderItem(item) : null}
            </li>
          );
        })}
      </ul>
      <style jsx>
        {`
          .dropdown-container {
            display: none;
            font-family: 'SF UI Display';
            text-transform: initial;
            width: fit-content;
            transform: translate(-18%);
            border-radius: 18px;
          }
        `}
      </style>
    </div>
  );
};

export default Dropdown;
