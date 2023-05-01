import { useState, useRef } from 'react';
import axios from 'axios';
import './DrawButton.css';

const ShuffleButton = ({ newDeck }) => {
  // console.log("DECK ID", deck);

  return (
    <>
      <button
        className="DrawButton-button"
        onClick={newDeck}>SHUFFLE DECK</button>
    </>
  );
}

export default ShuffleButton;
