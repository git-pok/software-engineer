import Link from './Link.js';
import './LinkBox.css';

const LinkBox = ({ title, titleClass, links }) => {
  
  return (
    <div className="LinkBox">
      <h1 className={titleClass}>{title}</h1>
      <Link links={links} />
    </div>
  );
}

export default LinkBox;
