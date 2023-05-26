import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import JoblyContext from './context/JoblyContext.js';
import './JoblyNavbar.css';

const JoblyNavbar = ({ linkNames, logOut }) => {

  const { userData } = useContext(JoblyContext);
  const userToken = userData ? userData.token : null;

  return (
    <nav className="Navbar">
      <div className="left-links">
        <NavLink exact to="/">
          JOBLY
        </NavLink>
      { userToken &&
        <span>
          WELCOME {userData.username.toUpperCase()}!
        </span> 
      }
      </div>
      <div className="right-links">
        { userToken &&
          linkNames.map((val, idx) => (
            <NavLink exact to={`/${val}`} key={val}>
              {val.toUpperCase()}
            </NavLink>
          ))
        }
        { userToken
          ?
            <NavLink exact to="/logout" onClick={logOut}>
              LOG OUT
            </NavLink>
          :
            <NavLink exact to="/login">
              LOG IN
            </NavLink>
        }
        { !userToken &&
          <NavLink exact to="/signup">
            SIGN UP
          </NavLink>
        }
      </div>
    </nav>
  );
}

export default JoblyNavbar;
