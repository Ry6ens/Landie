import s from './Button.module.css';

const Button = ({ title = '', type = 'button', className = '' }) => {
  return (
    <>
      <button className={`${s.button} ${className}`} type={type}>
        {title}
      </button>
    </>
  );
};

export default Button;
