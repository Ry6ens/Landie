import './LightFast.scss';

import { ReactComponent as Svg } from 'img/Icon.svg';
import img from 'img/undraw_mobile_login_ikmv.png';

const LightFast = () => {
  return (
    <section className="description__section">
      <img
        className="description__img"
        src={img}
        alt="description"
        width="540"
      />
      <h2 className="description__title">Light, Fast & Powerful</h2>
      <p className="description__text">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim.
      </p>
      <ul className="description__list">
        <li className="description__item">
          <Svg className="description__icon" />
          <h3 className="description__subtitle">Title Goes Here</h3>
          <p className="description__subtitle-text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor.
          </p>
        </li>
        <li className="description__item">
          <Svg />
          <h3 className="description__subtitle">Title Goes Here</h3>
          <p className="description__subtitle-text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default LightFast;
