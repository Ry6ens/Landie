import './Price.scss';
import Button from 'components/Button/Button';

const Price = () => {
  return (
    <section className="price__section">
      <h2 className="price__title">A Price To Suit Everyone</h2>
      <p className="price__text">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus{' '}
      </p>
      <p className="price__amount">$40</p>
      <p className="price__text-color">UI Design Kit</p>
      <p className="price__text-prompt">See, One price. Simple.</p>
      <Button title={'Purchase Now'} className="btn btnPurchaseNow" />
    </section>
  );
};

export default Price;
