import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ShuffleButton from './ShuffleButton.js';
import DrawButton from './DrawButton.js';
import PlayCard from './PlayCard.js';
import './PlayTable.css';

/**
 * PlayTable
 * Renders: DrawButton, ShuffleButton, PlayCard.
 * State: deckId, card, cardImage.
 * Effects: Defines a shuffled deck on first render only.
 * Ref: cardDiv for img attribute.
 */

const SHUFFLE_URL = `
    https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
`;


const PlayTable = () => {
  const [ deckId, setDeckId ] = useState(null);
  const [ card, setCard ] = useState(null);
  const [ cardImage, setCardImage ] = useState(null);

  /**
   * Sets card state with current card code.
   */
  const currCard = (code) => {
    setCard(card => code);
  }

  /**
   * Sets card state with null.
   */
  const resetCard = () => {
    setCard(card => null);
  }

  /**
   * Sets cardImage state with image. 
   */
  const currImage = (image) => {
    setCardImage(cardImage => image);
  }

  /**
   * Sets cardImage with null.
   */
  const resetImage = () => {
    setCardImage(cardImage => null);
  }


  const cardDiv = useRef();

  /**
   * Makes a request to API.
   * Creates a shuffled deck.
   * Runs once on the first component render.
   */
  useEffect(() => {

    async function ShuffleDeck() {
      try {
        const res = await axios.get(SHUFFLE_URL);
        setDeckId(data => res.data.deck_id);
      } catch(err) {
        throw new Error(`ERROR!!!: \n${err}`);
      }
    }

    ShuffleDeck();

  }, [])

  /**
   * Sets cardDiv ref to "".
   */
  const clearCardDivImgSrc = () => {
    cardDiv.current.src = "";
  }

  /**
   * Makes a request to API.
   * Sets deckId state with deck_id.
   * Resets card and cardImage state.
   */
  const newDeck = async () => {
    try {
      clearCardDivImgSrc();
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
    <h1 className="PlayTable-h1">Card Draw</h1>
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
        <PlayCard
          cardImage={cardImage}
          card={card}
          cardDiv={cardDiv} />
      }
      
    </div>
    </>
  );
}

export default PlayTable;