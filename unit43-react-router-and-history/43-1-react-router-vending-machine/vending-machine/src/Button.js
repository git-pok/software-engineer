import './Button.css';

const Button = ({ className, btnText }) => { 

  return (
    <button
      className={className}>
        {btnText}
    </button>
  );
}

export default Button;
