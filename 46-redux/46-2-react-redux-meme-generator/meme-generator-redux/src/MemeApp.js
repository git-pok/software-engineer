import Meme from "./Meme";
import MemeForm from "./MemeForm";
import { useDispatch } from "react-redux";

const MemeApp = () => {
  
  const dispatch = useDispatch();

  const updateMeme = (meme) => {
    dispatch({ type: "UPDATE", payload: meme });
  }

  return (
    <>
      <MemeForm updateMeme={updateMeme} />
      <Meme />
    </>
  );
}

export default MemeApp;
