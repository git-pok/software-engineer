import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
 function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;
  //Increments currCardIdx state by 1

  const isLastImg = currCardIdx >= total - 1;
  const isFirstImg = currCardIdx <= 0;

  function goForward() {
    setCurrCardIdx(currCardIdx + 1);
  }

  // ADDED goBack
  const goBack = () => setCurrCardIdx(currCardIdx - 1);

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
      {/* ADDED ternary operator for button. */}
        { isFirstImg ? <span className="no-bi"></span> :
          <i
          // ADDED data attribute for tests.
          data-testid="left-button"
        // Fixed BUG #1
          className="bi bi-arrow-left-circle"
          onClick={goBack}
        /> 
        }
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        {/* ADDED ternary operator for button. */}
        { isLastImg ? <span className="no-bi"></span> :
        <i
          // ADDED data attribute for tests.
          data-testid="right-button"
          className="bi bi-arrow-right-circle"
          onClick={goForward}
        />
        }
      </div>
    </div>
  );
}

export default Carousel;
