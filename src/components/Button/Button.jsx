import './Button.scss';

const Button = ({ title = '', type = 'button', className = 'btn' }) => {
  return (
    <>
      <button className={className} type={type}>
        {title}
      </button>
    </>
  );
};

export default Button;
