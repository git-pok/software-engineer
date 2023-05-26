import { Link } from 'react-router-dom';
import './ButtonLink.css';

const ButtonLink = ({ buttonArray }) => {

  return (
    buttonArray.map(val => (
      <div key={val.key} className="ButtonLink">
        <Link exact="true" to={val.link}>
          <button>{val.buttonText}</button>
        </Link>
      </div>
    ))
  );
}

export default ButtonLink;
