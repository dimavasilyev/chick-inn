import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useWindowResize } from '../hooks';
import DeliveryDesktopImg from '../assets/delivery-desktop.png';
import DeliveryMobileImg from '../assets/delivery-mobile.jpg';

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
    <div className="w-full pb-20 slider-container">
      <Carousel
        showArrows
        showStatus={false}
        showThumbs={false}
        // verticalSwipe={verticalSwipe}
        showIndicators={false}
      >
        <div>
          <img src="https://api.chicken.md/wp-content/uploads/2020/05/Food0134-scaled.jpg" />
        </div>
      </Carousel>
      <style jsx global>
        {`
          .carousel-root {
            outline: none;
            border-radius: 25px;
            overflow: hidden;
          }

          .slider-wrapper {
            border-radius: 25px;
            overflow: hidden;
          }

          .slider-container img {
            border-radius: 25px;
          }
        `}
      </style>
    </div>
  );
};

export default Slider;
