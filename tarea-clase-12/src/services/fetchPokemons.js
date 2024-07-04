import {showPokemons} from "../showPokemonsCard/loaderPokemons.js";
import { ButtonsPagination } from "../components/ButtonsPagination/index.js";

export const pokeUrl = "https://pokeapi.co/api/v2/pokemon/";
export let nextLink = "";
export let prevLink = "";
export let allPokemons = [];

export const getPokemons = (url) => {
    fetch(url)
        .then(response => response.json())
        .then(response => {
            nextLink = response.next;
            prevLink = response.previous;
            allPokemons = response.results;
            showPokemons();
            ButtonsPagination(nextLink, prevLink);
        })
}

export const getInfoPokemon = async (pokemonUrl) => {
    try {
        const response = await fetch(pokemonUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Pokemon:', error);
    }
};
