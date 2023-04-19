import './Pokedex.css';
import Pokecard from './Pokecard';


const Pokedex = ({ pokemon }) => {
    return (
    <>
      <div className="Pokedex">
        <h1 className="Pokedex-header1">Pokedex</h1>
        <div className="Pokedex-cards">
          { 
            pokemon.map(val => (
              <Pokecard
                name={val.name} baseExp={val.baseExperience}
                type={val.type} img={val.img}
                key={val.id} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Pokedex;
