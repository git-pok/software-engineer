import { NavLink } from 'react-router-dom';
import './JoblyNavbar.css';

const Navbar = ({ linkNames }) => {
  console.log(linkNames);
  return (
    <nav className="Navbar">
      <div className="left-links">
      <NavLink exact to="/">
        JOBLY
      </NavLink>
      </div>
      <div className="right-links">
      {
        linkNames.map((val, idx) => (
          <NavLink exact to={`/${val}`} key={val}>
            {val.toUpperCase()}
          </NavLink>
        ))
      }
      <NavLink exact to="/login">
        LOG IN
      </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
