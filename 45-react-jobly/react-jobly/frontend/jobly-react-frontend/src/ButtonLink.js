import { Link } from 'react-router-dom';
// import './ButtonLink.css';

const ButtonLink = ({ buttonArray }) => {

  return (
    buttonArray.map(val => (
      <div className="Button">
        <Link exact to={`/users/${val.username}/edit`}>
          <button>{val.buttonText}</button>
        </Link>
      </div>
    ))
  );
}

export default ButtonLink;
