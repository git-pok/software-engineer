import './BackgroundImage.css';

const BackgroundImage = ({ img }) => {
  const imgUrlConcat = img.img.replaceAll("\n", "").replaceAll(" ", ""); 

  return (
    <img
      className="BackgroundImage"
      src={imgUrlConcat}></img>
  );
}

export default BackgroundImage;
