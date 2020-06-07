import React, { useState, useMemo } from 'react';
import Dropdown from '../dropdown';

const LanguagePicker = () => {
  const [value, setValue] = useState({
    title: 'РУ',
    value: 'ru',
  });

  const languages = useMemo(
    () => [
      {
        title: 'РУ',
        value: 'ru',
      },
      {
        title: 'RO',
        value: 'ro',
      },
      {
        title: 'EN',
        value: 'en',
      },
    ],
    [],
  );

  const handleClick = () => {};

  return (
    <div className="language text-xl uppercase font-black border-b-4 border-yellow">
      <div className="uppercase">{value.title}</div>
      <Dropdown
        items={languages}
        renderItem={(item) => {
          return (
            <span className="hover:text-yellow" onClick={handleClick}>
              {item.title}
            </span>
          );
        }}
      />
      <style jsx>
        {`
          .language {
            cursor: pointer;
          }

          .language :global(.dropdown-container) {
            transform: translate(-31%);
          }

          .language:hover :global(.dropdown-container) {
            display: block;
          }
        `}
      </style>
    </div>
  );
};

export default LanguagePicker;
