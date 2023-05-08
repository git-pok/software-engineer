import './OnClickButton.css';

const OnClickButton = ({ className, btnText, onClick }) => { 

  return (
    <>
      <button
        className={className}
        onClick={onClick}>
          {btnText}
      </button>
    </>
  );
}

export default OnClickButton;
