import React, { useMemo } from 'react';

const NavMenu = () => {
  const navItems = useMemo(
    () => [
      {
        title: 'Meniu',
        link: '#menu',
        onClick: () => window.scrollTo(0, 0),
      },
      {
        title: 'Contacte',
        link: '#contacte',
      },
      {
        title: 'Livrare',
        link: '#delivery',
      },
      {
        title: 'Despre noi',
        link: '#about-us',
      },
    ],
    [],
  );

  return (
    <nav className="">
      <ul className="flex justify-between">
        {navItems.map(({ link, title, icon, onClick }) => (
          <li key={link}>
            <a onClick={onClick} href={link}>
              {title}
            </a>
          </li>
        ))}
      </ul>
      <style jsx>
        {`
          @font-face {
            font-family: system;
            font-style: normal;
            font-weight: 300;
            src: local('Chick.inn');
          }

          nav {
            flex: 1;
          }

          ul {
            font-family: system;
          }
          li {
            font-size: 24px;
            cursor: pointer;
            text-transform: uppercase;
          }
        `}
      </style>
    </nav>
  );
};

export default NavMenu;
