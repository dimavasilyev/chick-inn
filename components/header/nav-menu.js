import React, { useEffect, useState } from 'react';
import Dropdown from '../dropdown';
import api from '../../api';

const NavMenu = ({ onItemClick }) => {
  const [categories, setCategories] = useState([
    {
      id: 22,
      name: 'Combo',
      slug: 'combo',
      parent: 0,
      description: 'combo menu',
      display: 'products',
      image: {
        id: 62,
        date_created: '2020-05-13T09:27:40',
        date_created_gmt: '2020-05-13T09:27:40',
        date_modified: '2020-05-13T09:27:40',
        date_modified_gmt: '2020-05-13T09:27:40',
        src: 'http://localhost:8888/chicken-md/wp-content/uploads/2020/05/1490982273193754516.jpg',
        name: '1490982273193754516',
        alt: '',
      },
      menu_order: 2,
      count: 1,
      _links: {
        self: [
          {
            href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products/categories/22',
          },
        ],
        collection: [
          {
            href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products/categories',
          },
        ],
      },
    },
    {
      id: 19,
      name: 'Drinks',
      slug: 'drinks',
      parent: 0,
      description: 'напитки',
      display: 'products',
      image: {
        id: 61,
        date_created: '2020-05-13T09:24:13',
        date_created_gmt: '2020-05-13T09:24:13',
        date_modified: '2020-05-13T09:24:13',
        date_modified_gmt: '2020-05-13T09:24:13',
        src:
          'http://localhost:8888/chicken-md/wp-content/uploads/2020/05/94555311_611085072824632_6237355728356379859_n.jpg',
        name: '94555311_611085072824632_6237355728356379859_n',
        alt: '',
      },
      menu_order: 7,
      count: 1,
      _links: {
        self: [
          {
            href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products/categories/19',
          },
        ],
        collection: [
          {
            href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products/categories',
          },
        ],
      },
    },
    {
      id: 21,
      name: 'Rolls',
      slug: 'rolls',
      parent: 0,
      description: 'rolls',
      display: 'products',
      image: {
        id: 60,
        date_created: '2020-05-13T09:24:13',
        date_created_gmt: '2020-05-13T09:24:13',
        date_modified: '2020-05-13T09:24:13',
        date_modified_gmt: '2020-05-13T09:24:13',
        src:
          'http://localhost:8888/chicken-md/wp-content/uploads/2020/05/94627017_2651234468314640_7178304305172156235_n.jpg',
        name: '94627017_2651234468314640_7178304305172156235_n',
        alt: '',
      },
      menu_order: 1,
      count: 2,
      _links: {
        self: [
          {
            href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products/categories/21',
          },
        ],
        collection: [
          {
            href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products/categories',
          },
        ],
      },
    },
    {
      id: 29,
      name: 'Salads',
      slug: 'salads',
      parent: 0,
      description: 'Salads',
      display: 'default',
      image: {
        id: 74,
        date_created: '2020-05-13T20:27:58',
        date_created_gmt: '2020-05-13T20:27:58',
        date_modified: '2020-05-13T20:27:58',
        date_modified_gmt: '2020-05-13T20:27:58',
        src:
          'http://localhost:8888/chicken-md/wp-content/uploads/2020/05/75cf4d3177b74398b2c6ab4ff90205bc_middle.png',
        name: '75cf4d3177b74398b2c6ab4ff90205bc_middle',
        alt: '',
      },
      menu_order: 4,
      count: 2,
      _links: {
        self: [
          {
            href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products/categories/29',
          },
        ],
        collection: [
          {
            href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products/categories',
          },
        ],
      },
    },
    {
      id: 30,
      name: 'Sauces',
      slug: 'sauces',
      parent: 0,
      description: 'Sauces',
      display: 'default',
      image: {
        id: 75,
        date_created: '2020-05-13T20:27:59',
        date_created_gmt: '2020-05-13T20:27:59',
        date_modified: '2020-05-13T20:27:59',
        date_modified_gmt: '2020-05-13T20:27:59',
        src:
          'http://localhost:8888/chicken-md/wp-content/uploads/2020/05/514adf3a3bff46ca95e6e957f70f1378_middle.png',
        name: '514adf3a3bff46ca95e6e957f70f1378_middle',
        alt: '',
      },
      menu_order: 6,
      count: 0,
      _links: {
        self: [
          {
            href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products/categories/30',
          },
        ],
        collection: [
          {
            href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products/categories',
          },
        ],
      },
    },
    {
      id: 20,
      name: 'Snacks',
      slug: 'snacks',
      parent: 0,
      description: 'снэки',
      display: 'products',
      image: {
        id: 59,
        date_created: '2020-05-13T09:24:12',
        date_created_gmt: '2020-05-13T09:24:12',
        date_modified: '2020-05-13T09:24:12',
        date_modified_gmt: '2020-05-13T09:24:12',
        src:
          'http://localhost:8888/chicken-md/wp-content/uploads/2020/05/94835045_2529100553861221_3264369530096323279_n.jpg',
        name: '94835045_2529100553861221_3264369530096323279_n',
        alt: '',
      },
      menu_order: 3,
      count: 2,
      _links: {
        self: [
          {
            href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products/categories/20',
          },
        ],
        collection: [
          {
            href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products/categories',
          },
        ],
      },
    },
    {
      id: 28,
      name: 'Soups',
      slug: 'soups',
      parent: 0,
      description: 'soups',
      display: 'products',
      image: {
        id: 73,
        date_created: '2020-05-13T20:27:57',
        date_created_gmt: '2020-05-13T20:27:57',
        date_modified: '2020-05-13T20:27:57',
        date_modified_gmt: '2020-05-13T20:27:57',
        src:
          'http://localhost:8888/chicken-md/wp-content/uploads/2020/05/a9cb020d5a17486bb0fc28fcdc97e600_middle-1.png',
        name: 'a9cb020d5a17486bb0fc28fcdc97e600_middle-1',
        alt: '',
      },
      menu_order: 5,
      count: 1,
      _links: {
        self: [
          {
            href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products/categories/28',
          },
        ],
        collection: [
          {
            href: 'http://localhost:8888/chicken-md/wp-json/wc/v3/products/categories',
          },
        ],
      },
    },
  ]);

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

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const { data: categories } = await api.getCategories();

    // setCategories(categories.filter((category) => category.slug !== 'uncategorized'));
  };

  return (
    <nav className="pt-4 lg:pt-0 mr-12 ml-8">
      <ul className="flex flex-col lg:flex-row justify-around lg:items-center">
        {navItems.map(({ link, title, sublinks }) => (
          <li key={link} className="mb-4 lg:mb-0 text-2xl lg:text-xl">
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
          }

          ul {
            font-family: 'Chick-inn';
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

// export async function getStaticProps() {
//   const { data: categories } = await api.getCategories();
//   console.log('categories:', categories);

//   return {
//     props: {
//       categories,
//     },
//   };
// }
