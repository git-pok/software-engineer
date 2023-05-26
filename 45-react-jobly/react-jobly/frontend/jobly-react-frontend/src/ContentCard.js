import './ContentCard.css';

const ContentCard = ({ dataObj }) => {

  return (
    <>
    <div className="ContentCard-div">
    { dataObj
      ?
        <div
          className="ContentCard">
            <h2>{dataObj.title}</h2>
            <p>{dataObj.description}</p>
        </div>
      :
        null
    }
    </div>
    </>
  );
}

export default ContentCard;
