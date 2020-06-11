import React, { useRef } from 'react';

const Dropdown = ({ items, renderItem, className }) => {
  const ref = useRef();

  const hanldeClick = async () => {
    // ref.current.style.display = 'none';
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
            font-family: 'SFUIDisplay';
            text-transform: initial;
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
