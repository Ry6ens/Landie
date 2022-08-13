import '../LightFastList/LightFastList.scss';
import 'components/Button/Button.scss';

import Button from 'components/Button/Button';

const LightFastList = ({ img, title, text }) => {
  return (
    <section className="sectionList">
      <img src={img} alt="description" width="480" />
      <div className="overflow">
        <h2 className="title">{title}</h2>
        <p className="text">{text}</p>
        <Button title={'Purchase Now'} className="buttonPurchase" />
      </div>
    </section>
  );
};

export default LightFastList;
