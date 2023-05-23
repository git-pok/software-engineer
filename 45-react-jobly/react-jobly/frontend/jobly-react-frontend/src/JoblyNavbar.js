import { NavLink } from 'react-router-dom';
import JoblyApi from './models/JoblyApi.js';
import './JoblyNavbar.css';

const Navbar = ({ linkNames }) => {
  // console.log(linkNames);
  const token = JoblyApi.token;
  // console.log("token", JoblyApi.token);
  return (
    <nav className="Navbar">
      <div className="left-links">
      <NavLink exact to="/">
        JOBLY
      </NavLink>
      </div>
      <div className="right-links">
      { token 
        ?
          linkNames.map((val, idx) => (
            <NavLink exact to={`/${val}`} key={val}>
              {val.toUpperCase()}
            </NavLink>
          )) 
        : 
          null
      }
      {
        token
          ?
            <NavLink exact to="/logout">
              LOG OUT
            </NavLink>
          :
            <NavLink exact to="/login">
              LOG IN
            </NavLink>
      }
      {
        !token
          ?
            <NavLink exact to="/signup">
              SIGN UP
            </NavLink>
          :
            null
      }
      </div>
    </nav>
  );
}

export default Navbar;
