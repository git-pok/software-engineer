import { NavLink } from 'react-router-dom';

const Navbar = ({ linkNames }) => {
  console.log(linkNames);
  return (
    <nav>
      <NavLink exact to="/">
        JOBLY
      </NavLink>
      {
        linkNames.map((val, idx) => (
          <NavLink exact to={`/${val}`} key={val}>
            {val.toUpperCase()}
          </NavLink>
        ))
      }
    </nav>
  );
}

export default Navbar;
