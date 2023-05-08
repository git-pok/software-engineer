import Link from './Link.js';
import './LinkDiv.css';

const LinkDiv = ({ title, titleClass, links }) => {
  
  return (
    <div className="LinkDiv">
      <h1 className={titleClass}>{title}</h1>
      <Link links={links} />
    </div>
  );
}

export default LinkDiv;
