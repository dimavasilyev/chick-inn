import React, { useState } from 'react';
import Link from 'next/link';

import Logo from '../../assets/logo.svg';
import NavMenu from './nav-menu';
import SocialIcons from './social-icons';
import LanguagePicker from './language-picker';
import Cart from './cart';
import { footerChickinnSvg } from '../../helpers';

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

  const socialAndLanguage = (
    <>
      <SocialIcons />
      {/* <LanguagePicker /> */}
    </>
  );

  const navMenu = <NavMenu onItemClick={() => setMobileActive(false)} />;

  return (
    <header className={`bg-black lg:flex items-center container lg:pr-8  lg:pb-0 lg:pt-0 py-4`}>
      <div className="flex items-center justify-between h-full w-full">
        <div className="lg:hidden cursor-pointer ml-4 mt-1 w-20" onClick={handleBurgerClick}>
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            className="w-8 h-8"
            style={{ transform: 'scaleX(-1)' }}
          >
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
        {isMobileActive ? (
          <div className="lg:hidden h-full flex items-center mr-8">{socialAndLanguage}</div>
        ) : (
          <Link href="/">
            <div className="logo" onClick={handleLogoClick}>
              <Logo />
            </div>
          </Link>
        )}
        <div className="flex items-center lg:flex-1">
          <div className="hidden lg:flex lg:items-center lg:mr-8 flex-1">
            <div className="flex-1">{navMenu}</div>
            {socialAndLanguage}
          </div>
          <Cart />
        </div>
      </div>
      {isMobileActive && (
        <>
          <div
            className="lg:hidden absolute border-2 border-yellow rounded mt-4"
            style={{ right: '1rem', left: '1rem' }}
          />
          <div className="flex items-center h-full mt-8">
            {navMenu}
            <div className="mt-8 mr-6 lg:mr-0 lg:-mt-4 lg:ml-auto lg:w-1/4">
              {footerChickinnSvg}
            </div>
          </div>
        </>
      )}
      <style jsx>
        {`
          header {
            z-index: 999;
            position: fixed;
            border-radius: 0 0 15px 15px;
            min-height: 100px;
            padding-top: ${isMobileActive && '23px'};
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
