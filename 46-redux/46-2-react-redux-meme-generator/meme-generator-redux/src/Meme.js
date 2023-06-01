// import logo from './logo.svg';
import { useSelector, useDispatch } from "react-redux";
import './Meme.css';

const Meme = () => {
  const store = useSelector(state => state);
  const dispatch = useDispatch();

  const deleteMeme = id => {
    dispatch({ type: "DELETE", id });
  }

  const reduxMemes = store.map((val, idx) => (
    <div
      className="Meme"
      id={val.id}
      key={val.id}
      onClick={() => deleteMeme(val.id)}>
      <img src={val.img}></img>
      <h1 className="Meme-top-h1">{val.topText}</h1>
      <h1 className="Meme-btm-h1">{val.btmText}</h1>
    </div>
  ))

  return (
    <>
      {reduxMemes}
    </>
  );
}

export default Meme;
