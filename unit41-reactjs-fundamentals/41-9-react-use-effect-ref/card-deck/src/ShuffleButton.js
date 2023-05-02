import './ShuffleButton.css';


const ShuffleButton = ({ newDeck }) => {

  return (
    <>
      <button
        className="ShuffleButton-button"
        onClick={newDeck}>
          SHUFFLE DECK
      </button>
    </>
  );
}

export default ShuffleButton;
