import './PlayCard.css';

const PlayCard = ({ cardDiv }) => {
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
