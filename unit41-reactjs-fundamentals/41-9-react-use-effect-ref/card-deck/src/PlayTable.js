import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
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
  const [ cardImage, setCardImage ] = useState();

  // console.log("CURR CARD", card);
  // console.log("CURR CARD IMAGE", cardImage);
  const currCard = (code) => {
    setCard(card => code);
  }

  const currImage = (image) => {
    setCardImage(cardImage => image);
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

  }, []);

  useEffect(() => {
    if (card) cardDiv.current.src = cardImage;
  }, [card])

  const newDeck = async () => {
    try {
      const res = await axios.get(SHUFFLE_URL);
      setDeckId(data => res.data.deck_id);
      console.log("DATA", res.data);
    } catch(err) {
      throw new Error(`ERROR!!!: \n${err}`);
    }
  }

  return (
    <>
    <h1 className="PlayTable-h1">Play Table</h1>
    <div className="PlayTable-div">
      <DrawButton
        deck={deckId}
        currCard={currCard}
        currImage={currImage}
        newDeck={newDeck} />
      {
        card &&
        <PlayCard cardDiv={cardDiv} />
      }
      
    </div>
    </>
  );
}

export default PlayTable;