import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {

  return (
    <>
    <nav>
      <NavLink exact to="/">
        Products
      </NavLink>
    </nav>
    </>
  );
}

export default Navbar;
