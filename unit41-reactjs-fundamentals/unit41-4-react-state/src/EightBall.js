import React, { useState } from 'react';
import { randomAnswer } from './helpers.js';
import './EightBall.css';


const EightBall = ({ answers }) => {
  const ogColor = "black";
  const ogText = "Think of a Question";

  // Extracts a random object from answers,
  // creates variables for color and msg properties,
  // and sets state with them.
  const genAnswers = () => {
    const eightBallData = randomAnswer(answers);
    const color = eightBallData.color;
    const msg = eightBallData.msg;
    setColor(color);
    setText(msg);
  }

  const restart = () => {
    setColor(ogColor);
    setText(ogText);
  }

  const [color, setColor] = useState(ogColor);
  const [text, setText] = useState(ogText);
  
  return (
    <div className="EightBall">
    <div
      className="EightBall-ball"
      style={{backgroundColor: color}}
      onClick={genAnswers}>
      <p className="EightBall-p">{ text }</p>
    </div>
    <button
    className="EightBall-button"
    onClick={restart}>RESTART</button>
    </div>
  );
}

export default EightBall;
