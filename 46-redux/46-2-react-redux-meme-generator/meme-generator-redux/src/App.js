import Meme from "./Meme";
import MemeForm from "./MemeForm";
import { useDispatch } from "react-redux";

function App() {
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

export default App;
