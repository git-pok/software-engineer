import React, { useState } from "react";
import useFlip from './hooks/useFlip.js';
import backOfCard from "./back.png";
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  // ADDED CODE: imported and implemented useFlip.
  const [isFacingUp, setIsFacingUp] = useFlip(true);
  
  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={setIsFacingUp}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
