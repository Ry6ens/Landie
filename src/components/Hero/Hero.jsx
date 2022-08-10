import Button from 'components/Button/Button';
import sButton from 'components/Button/Button.module.css';
import sHero from './Hero.module.css';
import path from 'img/Path.png';

const Hero = () => {
  return (
    <div className={sHero.hero}>
      <img src={path} alt="path" width="1490" />
      <h1 className={sHero.title}>
        Introduce Your Product Quickly & Effectively
      </h1>
      <p className={sHero.text}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim.
      </p>
      <Button title={'Purchase UI Kit'} className={sButton.buttonPurchase} />
      <Button title={'Learn More'} className={sButton.buttonLearn} />
    </div>
  );
};

export default Hero;
