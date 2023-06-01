// import logo from './logo.svg';
import './Meme.css';

const Meme = ({ t, b, i}) => {
  return (
    <div className="Meme">
      <img src={i}></img>
      <h1 className="Meme-top-h1">{t}</h1>
      <h1 className="Meme-btm-h1">{b}</h1>
    </div>
  );
}

export default Meme;
