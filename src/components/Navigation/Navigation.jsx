import './Navigation.scss';

const Navigation = ({ className }) => {
  return (
    <ul className={className}>
      <li>
        <a className="nav__item" href="/">
          Home
        </a>
      </li>
      <li>
        <a className="nav__item" href="/#">
          About
        </a>
      </li>
      <li>
        <a className="nav__item" href="/#">
          Contact
        </a>
      </li>
    </ul>
  );
};

export default Navigation;
