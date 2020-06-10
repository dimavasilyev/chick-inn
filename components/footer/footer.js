import React from 'react';

import designByImg from '../../assets/do.png';
import { footerChickinnSvg } from '../../helpers';

const Footer = () => {
  const designedBy = (
    <div className="flex items-center justify-center">
      <img src={designByImg} />
      <div className="text-sm font-normal ml-3">Дизайн сайта: Данила Охрименко</div>
    </div>
  );

  return (
    <footer className="container text-white mt-20">
      <h2 className="hidden lg:block uppercase font-bold text-center mx-auto px-8 mb-4 font-black text-4xl lg:text-6xl">
        In chicken we trust
      </h2>
      <div className="bg-black flex flex-col lg:flex-row lg:flex-wrap p-8 pb-0 my-rounded">
        <div id="contacts" className="lg:w-1/4 font-black ">
          <div className="block lg:hidden uppercase text-4xl font-black mb-3 pt-20 -mt-20">
            Contacte:
          </div>
          <div className="text-xl lg:text-xl">
            <a href="tel:+373 78882 025">Tel: +373 7888 20 25</a>
          </div>
          <div className="text-xl lg:text-xl lg:mb-4">
            <a href="mailto:info@chicken.md"> Email: info@chicken.md</a>
          </div>
          <div className="hidden lg:block">{designedBy}</div>
        </div>
        <div className="h-2 lg:h-auto w-full lg:w-2 rounded bg-yellow lg:mx-10 mb-5 mt-6 lg:mt-0 lg:mb-8" />
        <div className="lg:flex-1 lg:mr-20">
          <div id="about-us" className="text-4xl mb-3 lg:mb-4 font-black uppercase">
            Despre noi:
          </div>
          <div className="text-sm">
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout.
          </div>
          <input className="rounded mt-4 w-full" type="text" />
        </div>
        <div className="lg:hidden h-2  w-full  rounded bg-yellow  my-10 " />
        <div className="lg:hidden mt-8">{designedBy}</div>
        <div className="mt-12 lg:-mt-4 lg:ml-auto lg:w-1/4">{footerChickinnSvg}</div>
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
