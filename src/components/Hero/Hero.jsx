import Button from 'components/Button/Button';
import 'components/Button/Button.scss';

import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero__title">
        Introduce Your Product Quickly & Effectively
      </h1>
      <p className="hero__text">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim.
      </p>
      <Button title={'Purchase UI Kit'} />
      <Button title={'Learn More'} className="btn btnLearn" />
    </section>
  );
};

export default Hero;
