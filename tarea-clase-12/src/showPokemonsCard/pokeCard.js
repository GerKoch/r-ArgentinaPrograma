import {ButtonModalPokemon} from "../components/ModalPokemons/ModalPokemons.js";
const listPokemon = document.querySelector("#listPokemon");

export const CardPokemon = (data) => {
    let card = document.createElement("div");
    let content = `
        <div class="pokemon">
            <div class="pokemon-image">
                <img src=${data.sprites.other["official-artwork"].front_default} alt=${data.name}>
                <div calss="dataPokemon">
                    <p>${data.name}</p>
                    <button class="btn buttonInformation" id="buttonModal-${data.id}">Información</button>
                </div>
            </div>
        </div>
    `;
    card.innerHTML = content;
    listPokemon.appendChild(card);

    ButtonModalPokemon(data);
};