import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import JoblyApi from './models/JoblyApi.js';
// import JoblyContext from './context/JoblyContext.js';
import './JoblyNavbar.css';

const JoblyNavbar = ({ linkNames, userData, logOut }) => {
  // console.log(linkNames);
  // const { userData } = useContext(JoblyContext);
  const token = JoblyApi.token;
  // console.log("token", JoblyApi.token);
  return (
    <nav className="Navbar">
      <div className="left-links">
      <NavLink exact to="/">
        JOBLY
      </NavLink>
      {
        token ? 
          <span>
              WELCOME {userData.username.toUpperCase()}!
          </span> 
        : null
      }
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
            <NavLink exact to="/logout" onClick={logOut}>
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

export default JoblyNavbar;
