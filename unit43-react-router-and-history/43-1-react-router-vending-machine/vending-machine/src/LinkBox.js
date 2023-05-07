import Link from './Link.js';
import './LinkBox.css';

const LinkBox = ({ links }) => {
  
  return (
    <div className="LinkBox">
      <Link links={links} />
    </div>
  );
}

export default LinkBox;
