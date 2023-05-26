import './LoadingAnimation.css';

const LoadingAnimation = ({ ldgObj }) => {

  return (
      <div
        className={`LoadingAnimation ${ldgObj.class}`}
        style={{color: ldgObj.color}}>
      </div>
  );
}

export default LoadingAnimation;
