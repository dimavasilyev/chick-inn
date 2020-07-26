import React from 'react';

import Dropdown from '../dropdown';
import { useProducts } from '../../hooks';

const NavMenu = ({ onItemClick }) => {
  const { categories } = useProducts();

  const navItems = [
    {
      title: 'Meniu',
      link: '/#menu',
      sublinks: categories,
    },
    {
      title: 'Contacte',
      link: '/#contacts',
    },
    {
      title: 'Livrare',
      link: '/delivery',
    },
  ];

  return (
    <nav className="pt-4 lg:pt-0 mr-12 ml-8">
      <ul className="flex flex-col lg:flex-row justify-around lg:items-center">
        {navItems.map(({ link, title, sublinks }) => (
          <li key={link} className="mb-4 lg:mb-0 text-2xl">
            {sublinks?.length > 0 ? (
              <>
                <a onClick={onItemClick} href={link}>
                  {title}
                </a>
                <div className="hidden lg:block">
                  <Dropdown
                    items={sublinks}
                    renderItem={(item) => (
                      <a href={`/#${item.slug}`} className="block hover:text-yellow">
                        <div className="flex items-center mr-4">
                          <span className="w-4 bg-yellow h-4 mr-3 rounded-full" />
                          <span className="font-black text-base">{item.name}</span>
                        </div>
                      </a>
                    )}
                  />
                </div>
              </>
            ) : (
              <a onClick={onItemClick} href={link}>
                {title}
              </a>
            )}
          </li>
        ))}
      </ul>
      <style jsx>
        {`
          nav {
            flex: 1;
            font-weight: 800;
          }

          li {
            cursor: pointer;
            text-transform: uppercase;
          }

          li:hover :global(.dropdown-container) {
            display: block;
            transform: translateX(-40px);
          }
        `}
      </style>
    </nav>
  );
};

export default NavMenu;
