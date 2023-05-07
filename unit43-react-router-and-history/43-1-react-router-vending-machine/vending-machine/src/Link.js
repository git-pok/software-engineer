import { NavLink } from 'react-router-dom';
import './Link.css';

const Link = ({ links }) => {
  
  return (
    <div className="Link">
      { links.map((val, idx) => (
          <NavLink
            key={idx}
            exact
            to={val.route}>{val.linkName}</NavLink>
        ))
      }
    </div>
  );
}

export default Link;
