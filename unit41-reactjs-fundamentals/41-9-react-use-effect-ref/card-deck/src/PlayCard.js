import { useEffect } from 'react';
import './PlayCard.css';


const PlayCard = ({ cardDiv, cardImage, card }) => {

  /**
   * Sets cardDiv ref for img attribute with image.
   */
  useEffect(() => {
    if (card) cardDiv.current.src = cardImage;
  }, [card])


  return (
    <>
    <img
        ref={cardDiv}
        className="PlayCard-card">
    </img>
    </>
  );
}

export default PlayCard;
