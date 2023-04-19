import pokemonArr from './pokemon-api';
import Pokedex from './Pokedex';


function App() {
  return (
    <>
      <Pokedex pokemon={pokemonArr} />
    </>
  );
}

export default App;
