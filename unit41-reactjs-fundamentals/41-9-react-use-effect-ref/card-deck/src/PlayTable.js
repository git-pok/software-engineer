import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ShuffleButton from './ShuffleButton.js';
import DrawButton from './DrawButton.js';
import PlayCard from './PlayCard.js';
import './PlayTable.css';
import './PlayCard.css';

const SHUFFLE_URL = `
    https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
`;

const PlayTable = () => {
  const [ deckId, setDeckId ] = useState(null);
  const [ card, setCard ] = useState(null);
  const [ cardImage, setCardImage ] = useState(null);

  // console.log("CURR CARD", card);
  // console.log("CURR CARD IMAGE", cardImage);
  const currCard = (code) => {
    setCard(card => code);
  }

  const resetCard = () => {
    setCard(card => null);
  }

  const currImage = (image) => {
    setCardImage(cardImage => image);
  }

  const resetImage = () => {
    setCardImage(cardImage => null);
  }

  const cardDiv = useRef();

  useEffect(() => {

    async function ShuffleDeck() {
      try {
        const res = await axios.get(SHUFFLE_URL);
        setDeckId(data => res.data.deck_id);
        // console.log("DATA", res.data);
      } catch(err) {
        throw new Error(`ERROR!!!: \n${err}`);
      }
    }

    ShuffleDeck();

  }, [])

  useEffect(() => {
    if (card) cardDiv.current.src = cardImage;
  }, [card])

  const newDeck = async () => {
    try {
      cardDiv.current.src = "";
      const res = await axios.get(SHUFFLE_URL);
      setDeckId(data => res.data.deck_id);
      resetCard();
      resetImage();
    } catch(err) {
      throw new Error(`ERROR!!!: \n${err}`);
    }
  }

  return (
    <>
    <h1 className="PlayTable-h1">Play Table</h1>
    <div className="PlayTable-div">
      <div className="PlayTable-buttons">
        <DrawButton
          deck={deckId}
          currCard={currCard}
          currImage={currImage}
          newDeck={newDeck} />
        {
          card &&
          <ShuffleButton
            newDeck={newDeck} />
        }
      </div>
      {
        card &&
        <PlayCard cardDiv={cardDiv} />
      }
      
    </div>
    </>
  );
}

export default PlayTable;