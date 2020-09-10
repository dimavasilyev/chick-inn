import React, { useRef } from 'react';

const Dropdown = ({ items, renderItem, className }) => {
  const ref = useRef();

  const hanldeClick = async () => {
    const stylesheet = document.styleSheets[0];
    await stylesheet.insertRule('.dropdown-container { display: none !important;}', 0);
    setTimeout(() => {
      stylesheet.deleteRule(0);
    }, 100);
  };

  return (
    <div
      ref={ref}
      className={`${className ?? ''} dropdown-container flex flex-col absolute bg-black px-6 py-3`}
    >
      <ul>
        {items.map((item, i) => {
          if (item.count === 0) return;
          return (
            <li className="mb-3" key={i} onClick={hanldeClick}>
              {renderItem ? renderItem(item) : null}
            </li>
          );
        })}
      </ul>
      <style jsx>
        {`
          .dropdown-container {
            display: none;
            text-transform: initial;
            min-width: 60px;
            width: fit-content;
            transform: translate(20px);
            border-radius: 18px;
            z-index: 9;
          }
        `}
      </style>
    </div>
  );
};

export default Dropdown;
