import './Box.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';

// Box- this component should display a div
// with a background color, width and height
// based on the props passed to it.
const Box = ({
  backgroundColor, width,
  height, removeBox, boxId }) => {

  const styles = {
    backgroundColor,
    width,
    height
  }

  return (
    <>
      <div className="Box">
      <div className="Box-box" style={styles}>
      </div>
      <button
        className="Box-delete-icon"
        onClick={() => removeBox(boxId)}>
          X
      </button>
      {/* <FontAwesomeIcon
        icon={faSquareXmark}
        className="Box-delete-icon"
        onClick={() => removeBox(boxId)} /> */}
      </div>
    </>
  );
}

export default Box;