import { Link } from 'react-router-dom';
// import './ButtonLink.css';

const ButtonLink = ({ buttonArray }) => {

  return (
    buttonArray.map(val => (
      <div key={val.username} className="Button">
        <Link exact="true" to={`/users/${val.username}/edit`}>
          <button>{val.buttonText}</button>
        </Link>
      </div>
    ))
  );
}

export default ButtonLink;
