import './SocialLinks.scss';

import { ReactComponent as Facebook } from 'img/SocialLinks/facebook.svg';
import { ReactComponent as Instagram } from 'img/SocialLinks/instagram.svg';
import { ReactComponent as Linkedin } from 'img/SocialLinks/linkedin.svg';
import { ReactComponent as Twitter } from 'img/SocialLinks/twitter.svg';
import { ReactComponent as Youtube } from 'img/SocialLinks/youtube.svg';

const SocialLinks = () => {
  return (
    <ul className="social__list">
      <li>
        <a href="https://www.facebook.com/" target="_blanked">
          <Facebook />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/" target="_blanked">
          <Instagram />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/" target="_blanked">
          <Linkedin />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/" target="_blanked">
          <Twitter />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/" target="_blanked">
          <Youtube />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
