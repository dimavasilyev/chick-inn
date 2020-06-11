import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useWindowResize } from '../hooks';
import DeliveryDesktopImg from '../assets/delivery-desktop.png';
import DeliveryMobileImg from '../assets/delivery-mobile.png';

const Slider = () => {
  const { width } = useWindowResize();
  const [deliveryImg, setDeliveryImg] = useState(DeliveryDesktopImg);

  useEffect(() => {
    if (width < 1024) {
      setDeliveryImg(DeliveryMobileImg);
    } else {
      setDeliveryImg(DeliveryDesktopImg);
    }
  }, [width]);

  return (
    <div className="w-full pb-20">
      <Carousel
        showArrows
        showStatus={false}
        showThumbs={false}
        // verticalSwipe={verticalSwipe}
        showIndicators={false}
      >
        <div>
          <img src={deliveryImg} />
        </div>
      </Carousel>
      <style jsx>
        {`
          .carousel-root {
            outline: none;
            border-radius: 45px;
            overflow: hidden;
          }
        `}
      </style>
    </div>
  );
};

export default Slider;
