import React, { useState } from "react";
import useAxios from './hooks/useAxios.js';
// Fixed Bug
// import uuid => import { v4 as uuid }.
import { v4 as uuid } from "uuid";
import axios from "axios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  // ADDED CODE: imported and implemented useAxios.
  const [cards, setCards] = useAxios("https://deckofcardsapi.com/api/deck/new/draw/");

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        {/* 
        Called setCards as a callback.
        If not, the event object gets passed in as an argument,
        passes it in the API url as an endpoint, and throws
        an error. */}
        <button onClick={() => setCards()}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
