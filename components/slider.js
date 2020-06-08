import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useWindowResize } from '../hooks';
import DeliveryDesktopImg from '../assets/delivery-desktop.png';
import DeliveryMobileImg from '../assets/delivery-mobile.png';

const Slider = () => {
  const { width } = useWindowResize();
  const isMobile = width < 1024;
  const deliveryImg = isMobile ? DeliveryMobileImg : DeliveryDesktopImg;
  const verticalSwipe = !isMobile;

  return (
    <div className="w-full pb-20">
      <Carousel
        showArrows
        showStatus={false}
        showThumbs={false}
        verticalSwipe={verticalSwipe}
        showIndicators={false}
      >
        <div>
          <img src={deliveryImg} />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
