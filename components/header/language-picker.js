import React from 'react';

const LanguagePicker = () => {
  return (
    <div>
      <select>
        <option value="ru">ru</option>
        <option value="en">en</option>
        <option value="ro">ro</option>
      </select>
      <style jsx>
        {`
          li {
          }
        `}
      </style>
    </div>
  );
};

export default LanguagePicker;
