import React, { useState } from 'react';
import Link from 'next/link';

import Logo from '../../assets/logo.svg';
import NavMenu from './nav-menu';
import SocialIcons from './social-icons';
import LanguagePicker from './language-picker';
import Cart from './cart';

const Header = () => {
  const [isMobileActive, setMobileActive] = useState(false);

  const handleBurgerClick = () => {
    setMobileActive(!isMobileActive);
  };

  const handleLogoClick = () => {
    scrollTop();
    setMobileActive(false);
  };

  const scrollTop = () => {
    const [main] = document.getElementsByTagName('main');
    main.scrollTop = 0;
  };

  const layout = (
    <>
      <NavMenu onItemClick={() => setMobileActive(false)} />
      <Cart />
      <div className="flex lg:flex-row items-center mx-auto justify-center mt-2 lg:mt-0 mb-8 lg:mb-0">
        <SocialIcons />
        <LanguagePicker />
      </div>
    </>
  );

  return (
    <header className="bg-black lg:flex items-center container lg:pr-10 py-4">
      <div className="flex items-center justify-between">
        <Link href="/">
          <div className="logo" onClick={handleLogoClick}>
            <Logo />
          </div>
        </Link>
        <div
          onClick={scrollTop}
          className="uppercase text-lg lg:hidden font-black text-center -ml-12"
        >
          In chicken we trust
        </div>
        <div className="lg:hidden cursor-pointer mr-4" onClick={handleBurgerClick}>
          <svg fill="currentColor" viewBox="0 0 20 20" className="w-8 h-8">
            {isMobileActive ? (
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            ) : (
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            )}
          </svg>
        </div>
      </div>
      {isMobileActive ? layout : <div className="hidden lg:flex flex-1 items-center">{layout}</div>}
      <style jsx>
        {`
          header {
            z-index: 999;
            position: fixed;
            border-radius: 0 0 15px 15px;
          }

          .logo {
            cursor: pointer;
            width: 130px;
            min-width: 100px;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
