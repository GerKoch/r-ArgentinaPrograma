import {getPokemons, pokeUrl} from "./services/fetchPokemons.js";


getPokemons(`${pokeUrl}?offset=0&limit=20`);



