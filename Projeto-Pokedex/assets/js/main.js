
function convertPokemonTypesToLi(pokemonTypes) {
  return pokemonTypes.map((typeSlot) => '<li class="type">${typeSlot.type.name}</li>')
}

function convertPokemonToLi(pokemon) {
  return
   <li class="pokemon">
      <span class="number">${pokemon.order}</span>
      <span class="name">${pokemon.name}</span>

     <div class="detail">
       <ol class="types">
        ${convertPokemonTypesToLi(pokemon.types).join(' ')}
       </ol>

       <img src="${pokemon.sprites.other.dream_world.front_default}"
        alt="${pokemon.name}"></img>
      </div>
   </li>
}

const pokemonList = document.getElementById("pokemonList");

pokeApi.getPokemons().then((pokemons = []) => {
  pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join("");
});
// Esse código foi substituído pelo de cima:
// const listItems = []

// for (let i = 0; i < pokemons.length; i++) {
//    const pokemon = pokemons[i];
//    listItems.push(convertPokemonToLi(pokemon))
// }

// console.log(listItems)
