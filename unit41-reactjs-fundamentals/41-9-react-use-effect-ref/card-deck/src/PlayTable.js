import { useState, useEffect } from 'react';
import axios from 'axios';
import './PlayTable.css';
import DrawButton from './DrawButton.js';

const SHUFFLE_URL = `
    https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6
`;

const PlayTable = () => {
  const [ deckId, setDeckId ] = useState(null);

  useEffect(() => {

    async function ShuffleDeck() {
      const res = await axios.get(SHUFFLE_URL);
      setDeckId(data => res.data.deck_id);
    }

    try {
      ShuffleDeck();
    } catch(err) {
      throw new Error(`ERROR: \n${err}`);
    }

  }, []);

  return (
    <>
    <h1 className="PlayTable-h1">Play Table</h1>
    <div className="PlayTable-div">
      <DrawButton deck={deckId} />
    </div>
    </>
  );
}

export default PlayTable;