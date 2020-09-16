import React from 'react';
import { Carousel } from 'react-responsive-carousel';
// import { useWindowResize } from '../hooks';
// import DeliveryDesktopImg from '../assets/delivery-desktop.png';
// import DeliveryMobileImg from '../assets/delivery-mobile.jpg';

const Slider = () => {
  // const { width } = useWindowResize();
  // const [deliveryImg, setDeliveryImg] = useState(DeliveryDesktopImg);

  // useEffect(() => {
  //   if (width < 1024) {
  //     setDeliveryImg(DeliveryMobileImg);
  //   } else {
  //     setDeliveryImg(DeliveryDesktopImg);
  //   }
  // }, [width]);

  return (
    <div className="w-full pb-20 slider-container">
      <Carousel
        showArrows
        showStatus={false}
        showThumbs={false}
        showIndicators
        autoPlay
        swipeable
        swipeScrollTolerance={3}
        interval={2500}
        showIndicators={false}
      >
        <div>
          <img src="data:image/jpeg;base64,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" />
        </div>
        <div>
          <img src="data:image/jpeg;base64,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" />
        </div>
        <div>
          <img src="data:image/jpeg;base64,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" />
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

          .carousel .control-arrow,
          .carousel.carousel-slider .control-arrow {
            -webkit-transition: all 0.25s ease-in;
            -moz-transition: all 0.25s ease-in;
            -ms-transition: all 0.25s ease-in;
            -o-transition: all 0.25s ease-in;
            transition: all 0.25s ease-in;
            opacity: 0.4;
            filter: alpha(opacity=40);
            position: absolute;
            z-index: 2;
            top: 20px;
            background: none;
            border: 0;
            font-size: 32px;
            cursor: pointer;
          }
          .carousel .control-arrow:hover {
            opacity: 1;
            filter: alpha(opacity=100);
          }
          .carousel .control-arrow:before,
          .carousel.carousel-slider .control-arrow:before {
            margin: 0 5px;
            display: inline-block;
            border-top: 8px solid transparent;
            border-bottom: 8px solid transparent;
            content: '';
          }
          .carousel .control-disabled.control-arrow {
            opacity: 0;
            filter: alpha(opacity=0);
            cursor: inherit;
            display: none;
          }
          .carousel .control-prev.control-arrow {
            left: 0;
          }
          .carousel .control-prev.control-arrow:before {
            border-right: 8px solid #fff;
          }
          .carousel .control-next.control-arrow {
            right: 0;
          }
          .carousel .control-next.control-arrow:before {
            border-left: 8px solid #fff;
          }
          .carousel-root {
            outline: none;
          }
          .carousel {
            position: relative;
            width: 100%;
          }
          .carousel * {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
          }
          .carousel img {
            width: 100%;
            display: inline-block;
            pointer-events: none;
          }
          .carousel .carousel {
            position: relative;
          }
          .carousel .control-arrow {
            outline: 0;
            border: 0;
            background: none;
            top: 50%;
            margin-top: -13px;
            font-size: 18px;
          }
          .carousel .thumbs-wrapper {
            margin: 20px;
            overflow: hidden;
          }
          .carousel .thumbs {
            -webkit-transition: all 0.15s ease-in;
            -moz-transition: all 0.15s ease-in;
            -ms-transition: all 0.15s ease-in;
            -o-transition: all 0.15s ease-in;
            transition: all 0.15s ease-in;
            -webkit-transform: translate3d(0, 0, 0);
            -moz-transform: translate3d(0, 0, 0);
            -ms-transform: translate3d(0, 0, 0);
            -o-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
            position: relative;
            list-style: none;
            white-space: nowrap;
          }
          .carousel .thumb {
            -webkit-transition: border 0.15s ease-in;
            -moz-transition: border 0.15s ease-in;
            -ms-transition: border 0.15s ease-in;
            -o-transition: border 0.15s ease-in;
            transition: border 0.15s ease-in;
            display: inline-block;
            margin-right: 6px;
            white-space: nowrap;
            overflow: hidden;
            border: 3px solid #fff;
            padding: 2px;
          }
          .carousel .thumb:focus {
            border: 3px solid #ccc;
            outline: none;
          }
          .carousel .thumb.selected,
          .carousel .thumb:hover {
            border: 3px solid #333;
          }
          .carousel .thumb img {
            vertical-align: top;
          }
          .carousel.carousel-slider {
            position: relative;
            margin: 0;
            overflow: hidden;
          }
          .carousel.carousel-slider .control-arrow {
            top: 0;
            color: #fff;
            font-size: 26px;
            bottom: 0;
            margin-top: 0;
            padding: 5px;
          }
          .carousel.carousel-slider .control-arrow:hover {
            background: rgba(0, 0, 0, 0.2);
          }
          .carousel .slider-wrapper {
            overflow: hidden;
            margin: auto;
            width: 100%;
            -webkit-transition: height 0.15s ease-in;
            -moz-transition: height 0.15s ease-in;
            -ms-transition: height 0.15s ease-in;
            -o-transition: height 0.15s ease-in;
            transition: height 0.15s ease-in;
          }
          .carousel .slider-wrapper.axis-horizontal .slider {
            -ms-box-orient: horizontal;
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -moz-flex;
            display: -webkit-flex;
            display: flex;
          }
          .carousel .slider-wrapper.axis-horizontal .slider .slide {
            flex-direction: column;
            flex-flow: column;
          }
          .carousel .slider-wrapper.axis-vertical {
            -ms-box-orient: horizontal;
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -moz-flex;
            display: -webkit-flex;
            display: flex;
          }
          .carousel .slider-wrapper.axis-vertical .slider {
            -webkit-flex-direction: column;
            flex-direction: column;
          }
          .carousel .slider {
            margin: 0;
            padding: 0;
            position: relative;
            list-style: none;
            width: 100%;
          }
          .carousel .slider.animated {
            -webkit-transition: all 0.35s ease-in-out;
            -moz-transition: all 0.35s ease-in-out;
            -ms-transition: all 0.35s ease-in-out;
            -o-transition: all 0.35s ease-in-out;
            transition: all 0.35s ease-in-out;
          }
          .carousel .slide {
            min-width: 100%;
            margin: 0;
            position: relative;
            text-align: center;
            background: #000;
          }
          .carousel .slide img {
            width: 100%;
            vertical-align: top;
            border: 0;
          }
          .carousel .slide iframe {
            display: inline-block;
            width: calc(100% - 80px);
            margin: 0 40px 40px;
            border: 0;
          }
          .carousel .slide .legend {
            -webkit-transition: all 0.5s ease-in-out;
            -moz-transition: all 0.5s ease-in-out;
            -ms-transition: all 0.5s ease-in-out;
            -o-transition: all 0.5s ease-in-out;
            transition: all 0.5s ease-in-out;
            position: absolute;
            bottom: 40px;
            left: 50%;
            margin-left: -45%;
            width: 90%;
            border-radius: 10px;
            background: #000;
            color: #fff;
            padding: 10px;
            font-size: 12px;
            text-align: center;
            opacity: 0.25;
            -webkit-transition: opacity 0.35s ease-in-out;
            -moz-transition: opacity 0.35s ease-in-out;
            -ms-transition: opacity 0.35s ease-in-out;
            -o-transition: opacity 0.35s ease-in-out;
            transition: opacity 0.35s ease-in-out;
          }
          .carousel .control-dots {
            position: absolute;
            bottom: 0;
            margin: 10px 0;
            text-align: center;
            width: 100%;
          }
          @media (min-width: 960px) {
            .carousel .control-dots {
              bottom: 0;
            }
          }
          .carousel .control-dots .dot {
            -webkit-transition: opacity 0.25s ease-in;
            -moz-transition: opacity 0.25s ease-in;
            -ms-transition: opacity 0.25s ease-in;
            -o-transition: opacity 0.25s ease-in;
            transition: opacity 0.25s ease-in;
            opacity: 0.3;
            filter: alpha(opacity=30);
            box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9);
            background: #fff;
            border-radius: 50%;
            width: 8px;
            height: 8px;
            cursor: pointer;
            display: inline-block;
            margin: 0 8px;
          }
          .carousel .control-dots .dot.selected,
          .carousel .control-dots .dot:hover {
            opacity: 1;
            filter: alpha(opacity=100);
          }
          .carousel .carousel-status {
            position: absolute;
            top: 0;
            right: 0;
            padding: 5px;
            font-size: 10px;
            text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
            color: #fff;
          }
          .carousel:hover .slide .legend {
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
};

export default Slider;
