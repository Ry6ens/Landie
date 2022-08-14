import '../LightFastList/LightFastList.scss';
import 'components/Button/Button.scss';

const LightFastList = ({ img, title, text, content, width }) => {
  return (
    <section className="description__block">
      <img src={img} alt="description" width={width} />
      <div className="description__block-overflow">
        <h2 className="description__block-title">{title}</h2>
        <p className="description__block-text">{text}</p>
        {content}
      </div>
    </section>
  );
};

export default LightFastList;
