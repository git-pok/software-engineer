import { useState, useRef } from 'react';
import axios from 'axios';
import './DrawButton.css';

const DrawButton = ({ deck, currCard, currImage, newDeck }) => {

  const DRAW_URL = `
  https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1
`;
  // console.log("DECK ID", deck);
  const drawCard = async (deck) => {
    const res = await axios.get(DRAW_URL);
    const cardsLeft = res.data.remaining;
    // console.log("CARDS REMIANING", cardsLeft);
    if (cardsLeft === 0) {
      alert("No cards left! Here is a new deck!");
      newDeck();
    };
    const { code } = res.data.cards[0];
    const { image } = res.data.cards[0];
  
    currCard(code);
    currImage(image);
  }

  return (
    <>
      <button
        className="DrawButton-button"
        onClick={drawCard}>DRAW CARD</button>
    </>
  );
}

export default DrawButton;
