import React from 'react';
import Link from 'next/link';

import Logo from '../../assets/logo.svg';
import NavMenu from './nav-menu';
import SocialIcons from './social-icons';
import LanguagePicker from './language-picker';
import Cart from './cart';

const Header = () => {
  return (
    <header className="bg-black h-20 flex items-center container">
      <Link href="/">
        <div className="logo" onClick={() => (window.scrollTop = 0)}>
          <Logo />
        </div>
      </Link>
      <NavMenu />
      <Cart />
      <SocialIcons />
      <LanguagePicker />
      <style jsx>
        {`
          header {
            z-index: 999;
            position: fixed;
            border-radius: 0 0 15px 15px;
          }

          .logo {
            cursor: pointer;
            width: 150px;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
