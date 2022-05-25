import pokemonArray from "./data/pokemon.js";

//console.log(pokemonArray[0]);

const newPokemon = pokemonArray
  .map((pokemon) => {
    return `<div class="card">
  <div class="card__content">
      <img class="card__image" src="${pokemon.sprite}" />
  
      <div class="card__heading">${pokemon.name}</div>
      <p class="card__text">${pokemon.name} (#${pokemon.id}) is a ${pokemon.types[0]} & ${pokemon.types[1]} type pokemon</p>
  </div>
</div>`;
  })
  .join("");
const cardContainer = document.querySelector(".card-container");

const individualPokemon = {
  id: `${pokemonArray[0].id}`,
  name: `${pokemonArray[0].name}`,
  types: `${pokemonArray[0].types}`,
  sprite: `${pokemonArray[0].sprite}`,
};

console.log(pokemonArray[0]);

// const pokemonContainer = (individualPokemon) => {
//   return `
//     <div class="card">
//         <div class="card__content">
//             <img class="card__image" src="${individualPokemon.sprite}" />

//             <div class="card__heading">${individualPokemon.name}</div>
//             <p class="card__text">${individualPokemon.name}${individualPokemon.id} is a ${individualPokemon.types}</p>
//         </div>
//     </div>`;
// };

cardContainer.innerHTML = newPokemon;
p.innerText = p.innerText.replace("undefined", "");
