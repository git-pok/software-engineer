import './PlayTable.css';
import DrawButton from './DrawButton.js';

const PlayTable = () => {
  return (
    <>
    <h1 className="PlayTable-h1">Play Table</h1>
    <div className="PlayTable-div">
      <DrawButton />
    </div>
    </>
  );
}

export default PlayTable;