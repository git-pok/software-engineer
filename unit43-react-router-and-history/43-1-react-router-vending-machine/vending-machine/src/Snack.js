import './Snack.css';

const Snack = ({ name, img }) => {
  const nameCaps = name.toUpperCase();
  return (
    <>
    <h1>{nameCaps}</h1>
    <img src={img} />
    </>
  );
}

export default Snack;
