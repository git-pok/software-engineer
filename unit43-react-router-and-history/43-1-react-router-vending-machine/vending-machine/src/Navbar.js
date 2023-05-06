import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ route, linkName }) => {

  return (
    <nav className="VendingMachine-nav">
        <NavLink exact to={route}>{linkName}</NavLink>
        <NavLink exact to={route}>{linkName}</NavLink>
        <NavLink exact to={route}>{linkName}</NavLink>
        <NavLink exact to={route}>{linkName}</NavLink>
    </nav>
  );
}

export default Navbar;
