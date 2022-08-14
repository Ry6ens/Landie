import './Footer.scss';
import '../Navigation/Navigation.scss';

import Logo from 'components/Logo/Logo';
import Button from 'components/Button/Button';
import Navigation from 'components/Navigation/Navigation';
import SocialLinks from 'components/SocialLinks/SocialLinks';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__overflow">
        <p className="footer__company">©2020 Yourcompany</p>
        <Logo />
        <Button title="Purchase now" className="btn btnFooter" />
      </div>
      <div className="footer__nav">
        <Navigation className="nav__list-footer" />
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
