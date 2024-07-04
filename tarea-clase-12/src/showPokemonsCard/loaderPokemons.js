import { allPokemons } from "../services/fetchPokemons.js";
import { getInfoPokemon } from "../services/fetchPokemons.js";
import { CardPokemon } from "./pokeCard.js";

export const showPokemons = () => {
    listPokemon.innerHTML = "";
    if (allPokemons.length === 0) {
        return alert("No se encontraron pokemons");
    }
    return allPokemons.map(async (pokemon) => {
        let pokemonInfo = await getInfoPokemon(pokemon.url);
        return CardPokemon(pokemonInfo);
    })
};

