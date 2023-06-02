import { useSelector, useDispatch } from "react-redux";
import './Meme.css';

const Meme = () => {

  const store = useSelector(state => state);
  const memes = store.meme;
  const dispatch = useDispatch();

  const deleteMeme = id => {
    dispatch({ type: "DELETE", payload: id });
  }
  
  const reduxMemes = memes.map(val => (
    <div
      id={val.id}
      key={val.id}
      className="Meme-container">
      <div className="Meme">
        <img src={val.img}></img>
        <h1 className="Meme-top-h1">{val.topText}</h1>
        <h1 className="Meme-btm-h1">{val.btmText}</h1>
      </div>
      <button
        className="Meme-button"
        onClick={() => deleteMeme(val.id)}>
          DELETE
      </button>
    </div>
  ));

  return (
    <>
      {
        memes.length !== 0
          ?
            reduxMemes
          : 
            <h1 className="Meme-h1">CRETAE A MEME!</h1>
      }
    </>
  );
}

export default Meme;
