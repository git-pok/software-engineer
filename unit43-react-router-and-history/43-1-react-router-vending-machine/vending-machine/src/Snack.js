import './Snack.css';

const Snack = ({ name, img }) => {
  return (
    <div className="Snack">
      <h1 className="Snack-h1">{name}</h1>
      <img className="Snack-img" src={img} />
    </div>
  );
}

export default Snack;
