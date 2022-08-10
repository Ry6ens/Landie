import Navigation from 'components/Navigation/Navigation';
import Button from 'components/Button/Button';
import s from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={s.header}>
        <Navigation />
        <span className={s.title}>Landie</span>
        <Button title={'Buy Now'} />
      </header>
    </>
  );
};

export default Header;
