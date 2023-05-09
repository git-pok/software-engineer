import { NavLink } from 'react-router-dom';
import './DogNav.css';

const DogNav = ({ dogNames }) => {

  return (
    <>
    <nav className="DogNav-nav">
        <NavLink exact to="/dogs">
            Home
        </NavLink>
        {
            dogNames.map((val, idx) => (
                <NavLink
                    exact
                    to={`/dogs/${val}`}
                    key={idx}
                >
                    {val}
                </NavLink>
            ))
        }
    </nav>
    </>
  );
}

export default DogNav;