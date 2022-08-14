import Hero from 'components/Hero/Hero';
import LightFast from 'components/LighFast/LightFast';
import LightFastList from 'components/LightFastList/LightFastList';
import Price from 'components/Price/Price';

import data from 'components/data/data.js';
import Button from 'components/Button/Button';

const Main = () => {
  return (
    <main>
      <Hero />
      <LightFast />

      {data.map(({ id, title, text, img, width }, i) => (
        <LightFastList
          key={id}
          title={title}
          text={text}
          img={img}
          width={width}
          content={data.length - 1 === i && <Button title={'Purchase Now'} />}
        />
      ))}

      <Price />
    </main>
  );
};

export default Main;
