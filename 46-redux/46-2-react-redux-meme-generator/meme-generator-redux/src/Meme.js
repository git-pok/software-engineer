// import logo from './logo.svg';
import { useSelector } from "react-redux";
import './Meme.css';

const Meme = ({ t, b, i}) => {
  
  const img = useSelector(store => store.img);
  const topText = useSelector(store => store.topText);
  const btmText = useSelector(store => store.btmText);

  return (
    <div className="Meme">
      <img src={img}></img>
      <h1 className="Meme-top-h1">{topText}</h1>
      <h1 className="Meme-btm-h1">{btmText}</h1>
    </div>
  );
}

export default Meme;
