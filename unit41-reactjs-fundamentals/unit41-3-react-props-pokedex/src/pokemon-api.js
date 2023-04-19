import axios from 'axios';

// This app does not focus on React HTTP requests.
// The code below strictly receives the
// Pokemon API data and creates the default exported
// object that gets passed into the Pokedex component.
const BASE_URL = "https://pokeapi.co/api/v2";
const pokEnd = "pokemon";

async function getAllPokemon() {
  try {
    const pokResp = await axios.get(`${BASE_URL}/${pokEnd}/`);
    const pokeData = pokResp.data.results;
    return pokeData;
  } catch(err) {
    throw new Error(`ERROR!!!!!!!\n${ err }`)
  }
}

async function getIndvPokemon() {
  try {
    const pokemonUrlArr = await getAllPokemon();
    const pokemonDtlArr = [];

    for (let pok of pokemonUrlArr) {
      const pokIndvRes = await axios.get(pok.url);
      pokemonDtlArr.push(pokIndvRes);
    }

    return pokemonDtlArr;
  } catch(err) {
    throw new Error(`ERROR!!!!!!!\n${ err }`)
  }
}

async function buildPokemonObj() {
  try {
    const dtlsMap = new Map();
    const pokemonDtlArr = await getIndvPokemon();

    const cleanedArr = pokemonDtlArr.forEach(pok => (
      dtlsMap.set(pok.data.name, 
            {
              "id": pok.data.id,
              "name": pok.data.name,
              "baseExperience": pok.data.base_experience,
              "type": pok.data.types[0].type.name
            }
      )
    ))
    console.log("POKEMON MAP!!!", dtlsMap);
    return dtlsMap;
  } catch(err) {
    throw new Error(`ERROR!!!!!!!\n${ err }`)
  }
}

export default [
  { 
    id: 1, name: 'bulbasaur', baseExperience: 64, type: 'grass', 
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" 
  },
  { 
    id: 2, name: 'ivysaur', baseExperience: 142, type: 'grass', 
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" 
  },
  { 
    id: 3, name: 'venusaur', baseExperience: 263, type: 'grass', 
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" 
  },
  { 
    id: 4, name: 'charmander', baseExperience: 62, type: 'fire', 
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" 
  },
  { 
    id: 5, name: 'charmeleon', baseExperience: 142, type: 'fire', 
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" 
  },
  { 
    id: 6, name: 'charizard', baseExperience: 267, type: 'fire', 
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" 
  },
  { 
    id: 7, name: 'squirtle', baseExperience: 63, type: 'water', 
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" 
  },
  { 
    id: 8, name: 'wartortle', baseExperience: 142, type: 'water', 
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png" 
  },
  { 
    id: 9, name: 'blastoise', baseExperience: 265, type: 'water', 
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" 
  },
  { 
    id: 10, name: 'caterpie', baseExperience: 39, type: 'bug', 
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png" 
  },
  { 
    id: 11, name: 'metapod', baseExperience: 72, type: 'bug', 
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png" 
  },
  { 
    id: 12, name: 'butterfree', baseExperience: 198, type: 'bug', 
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png" 
  },
  { 
    id: 13, name: 'weedle', baseExperience: 39, type: 'bug', 
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png" 
  },
  { 
    id: 14, name: 'kakuna', baseExperience: 72, type: 'bug', 
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png" 
  },
  { 
    id: 15, name: 'beedrill', baseExperience: 178, type: 'bug', 
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png" 
  },
  { 
    id: 16, name: 'pidgey', baseExperience: 50, type: 'normal', 
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png" 
  },
  { 
    id: 17, name: 'pidgeotto', baseExperience: 122, type: 'normal', 
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png" 
  },
  { 
    id: 18, name: 'pidgeot', baseExperience: 216, type: 'normal', 
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png" 
  }
];
