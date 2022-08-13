import Hero from 'components/Hero/Hero';
import LightFast from 'components/LighFast/LightFast';
import LightFastList from 'components/LightFastList/LightFastList';

import data from 'components/data/data.js';

const Main = () => {
  return (
    <main>
      <Hero />
      <LightFast />

      {data.map(({ id, title, text, img }) => (
        <LightFastList key={id} title={title} text={text} img={img} />
      ))}
    </main>
  );
};

export default Main;
