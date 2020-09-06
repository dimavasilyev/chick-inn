import React from 'react';

import designByImg from '../../assets/do.png';
import { footerChickinnSvg } from '../../helpers';

const Footer = () => {
  const designedBy = (
    <div className="flex items-center">
      <img src={designByImg} />
      <div className="">
        <div className="text-sm font-normal ml-3">Design :</div>
        <div className="text-sm font-normal ml-3">Danila Ohrimenco</div>
      </div>
    </div>
  );

  const contacts = (
    <div className="font-black mb-8 lg:mb-0">
      <div className="text-xl lg:text-xl">
        <a href="tel:+373 78882 025">Tel: +373 7888 20 25</a>
      </div>
      <div className="text-xl lg:text-xl">
        <a href="mailto:info@chicken.md"> Email: info@chicken.md</a>
      </div>
    </div>
  );

  return (
    <footer className="container text-white mt-20">
      <div id="contacts" className="bg-black p-8 my-rounded relative">
        <div className="lg:hidden">
          <div className="block  uppercase text-5xl font-black mb-3 pt-20 -mt-20">Contacte:</div>
          {contacts}
          {designedBy}
        </div>
        <div className="hidden lg:flex items-center">
          <div className="mr-16">{designedBy}</div>
          {contacts}
        </div>
        <div className="bottom-0 right-0 mr-0 lg:mr-8 absolute w-2/5 lg:w-auto">
          {footerChickinnSvg}
        </div>
      </div>
      <style>
        {`
          .my-rounded {
            border-top-right-radius: 50px;
            border-top-left-radius: 50px;
          }

          .logo {
            cursor: pointer;
            width: 150px;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
