import './Pokecard.css';

const Pokecard = ({ name, baseExp, type, img }) => {

  name = name[0].toUpperCase() + name.slice(1);
  return (
    <div className="Pokecard">
      <p className="Pokecard-name">{ name }</p>
      <img src={ img } alt={ name }></img>
      <p className="Pokecard-type">Type: { type }</p>
      <p className="Pokecard-exp">EXP: { baseExp }</p>
    </div>
  );
}

export default Pokecard;
