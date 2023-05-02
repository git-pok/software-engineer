import axios from 'axios';
import './DrawButton.css';


const DrawButton = ({
  deck, currCard, currImage, newDeck
}) => {


  const DRAW_URL = `
  https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1
`;


  const drawCard = async () => {
    const res = await axios.get(DRAW_URL);
    const cardsLeft = res.data.remaining;
    const noCards = { null: null }; 
    const { code } = res.data.cards[0] || noCards;

    if (!code) {
      newDeck();
      alert("No cards left! Here is a new deck!");
    } else {
      const { image } = res.data.cards[0];
      currCard(code);
      currImage(image);
    }
  }

  
  return (
    <>
      <button
        className="DrawButton-button"
        onClick={drawCard}>
          DRAW CARD
      </button>
    </>
  );
}

export default DrawButton;
