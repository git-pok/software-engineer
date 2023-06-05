import { NavLink } from "react-router-dom";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';

const Navbar = () => {

  return (
    <>
    <nav>
      <NavLink exact to="/">
        Products
      </NavLink>
      <NavLink exact to="/cart">
        <FontAwesomeIcon
          className="Navbar-fa-cart"
          icon={faCartShopping} />
      </NavLink>
    </nav>
    </>
  );
}

export default Navbar;
