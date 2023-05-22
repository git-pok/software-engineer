import { NavLink } from 'react-router-dom';

const Navbar = ({ linkNames }) => {
  return (
    <nav>
      <NavLink exact to="/">
        HOME
      </NavLink>
      {
        linkNames.map((val, idx) => {
          <NavLink exact to={`/${val}`}>
            val
          </NavLink>
        })
      }
    </nav>
  );
}

export default Navbar;
