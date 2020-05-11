import React, { useMemo } from 'react';

import Delivery from '../../assets/nav/LIVRARE.svg';
import Menu from '../../assets/nav/MENIU.svg';
import Contacts from '../../assets/nav/CONTACTE.svg';
import AboutUs from '../../assets/nav/DESPRE_NOI.svg';
import { IconContainer } from '../shared';

const NavMenu = () => {
  const navItems = useMemo(
    () => [
      {
        title: 'Meniu',
        link: '#menu',
        icon: <Menu />,
        onClick: () => window.scrollTo(0, 0),
      },
      {
        title: 'Contacte',
        link: '#contacte',
        icon: <Contacts />,
      },
      {
        title: 'Livrare',
        link: '#delivery',
        icon: <Delivery />,
      },
      {
        title: 'Despre noi',
        link: '#about-us',
        icon: <AboutUs />,
      },
    ],
    [],
  );

  return (
    <nav className="">
      <ul className="flex justify-between">
        {navItems.map(({ link, title, icon, onClick }) => (
          <li>
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
