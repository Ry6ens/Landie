import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <>
      <ul className={s.nav__list}>
        <li className={s.nav__item}>Home</li>
        <li className={s.nav__item}>About</li>
        <li className={s.nav__item}>Contact</li>
      </ul>
    </>
  );
};

export default Navigation;
