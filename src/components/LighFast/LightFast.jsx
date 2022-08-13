import './LightFast.scss';

import { ReactComponent as Svg } from 'img/Icon.svg';
import img from 'img/undraw_mobile_login_ikmv.png';

const LightFast = () => {
  return (
    <section className="section">
      <img className="imgLight" src={img} alt="description" width="540" />
      <h2 className="title">Light, Fast & Powerful</h2>
      <p className="text">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim.
      </p>
      <ul className="list">
        <li className="item">
          <Svg className="icon" />
          <h3 className="subtitle">Title Goes Here</h3>
          <p className="subtitleText">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor.
          </p>
        </li>
        <li className="item">
          <Svg className="icon" />
          <h3 className="subtitle">Title Goes Here</h3>
          <p className="subtitleText">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default LightFast;
