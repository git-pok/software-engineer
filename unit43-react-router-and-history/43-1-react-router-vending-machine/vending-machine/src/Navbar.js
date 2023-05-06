import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ links }) => {
  
  return (
    <nav className="VendingMachine-nav">
      { links.map((val, idx) => (
          <NavLink key={idx} exact to={val.route}>{val.linkName}</NavLink>
        ))
      }
    </nav>
  );
}

export default Navbar;
