import pokemonArray from "./data/pokemon.js";

//console.log(pokemonArray[0]);

const pokemonCard = {
  id: `${pokemonArray[0]}`,
  name: `${pokemonArray[1]}`,
  types: `${pokemonArray[2]}`,
  sprites: `${pokemonArray[3]}`,
};

console.log(pokemonCard);
