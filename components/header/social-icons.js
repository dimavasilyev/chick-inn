import React from 'react';

import { IconContainer } from 'components/shared';
import InstaIcon from '../../assets/instagram-icon.svg';
import FacebookIcon from '../../assets/facebook-icon.svg';

const instaLink = 'https://www.instagram.com/chicken.md/';
const facebookLink = 'https://www.facebook.com/Chickenmd-112663703753324';

const SocialIcons = () => {
  return (
    <div>
      <ul className="flex items-center">
        <li>
          <a target="_blank" href={instaLink}>
            <IconContainer width={100}>
              <InstaIcon />
            </IconContainer>
          </a>
        </li>
        <li>
          <a target="_blank" href={facebookLink}>
            <IconContainer width={100}>
              <FacebookIcon />
            </IconContainer>
          </a>
        </li>
      </ul>
      <style jsx>
        {`
          .icon-containter {
            width: 100px;
          }

          li {
            font-size: 2em;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default SocialIcons;
