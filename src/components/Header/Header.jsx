import Navigation from 'components/Navigation/Navigation';
import Button from 'components/Button/Button';
import Logo from 'components/Logo/Logo';
import './Header.scss';

const Header = () => {
  return (
    <>
      <header className="header">
        <Navigation className="nav__list" />
        <Logo />
        <Button title={'Buy Now'} />
      </header>
    </>
  );
};

export default Header;
