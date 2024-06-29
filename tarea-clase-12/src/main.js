const listPokemon = document.querySelector("#listPokemon");
const modal = document.querySelector(".contentModal");
const pokeUrl = "https://pokeapi.co/api/v2/pokemon/";
let nextLink = "";
let prevLink = "";

const prev = () => {
    getPokemons(prevLink);
}

const next = () => {
    getPokemons(nextLink);
}
const pagination = () => {

}
let allPokemons = [];

const getPokemons = (url) => {
    fetch(url)
        .then(response => response.json())
        .then(response => {
            nextLink = response.next;
            prevLink = response.previous;
            allPokemons = response.results;
            showPokemons();
        })
}

const getInfoPokemon = async (pokemonUrl) => {
    try {
        const response = await fetch(pokemonUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Pokemon:', error);
    }
}

const CardPokemon = (data) => {
    console.log(data);
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

    const buttonModal = document.getElementById(`buttonModal-${data.id}`);
    const modalPokemon = document.querySelector("#modalPokemon");
    const main = document.querySelector("main");

    let types = data.types.map(type => `<p>Tipo: ${type.type.name}</p>`);
    types = types.join("");

    let ability = data.abilities.map(ability => `<p>Ability: ${ability.ability.name}</p>`)
    ability = ability.join("");

    buttonModal.addEventListener("click", function () {

        modal.innerHTML = "";

        modalPokemon.style.display = "block";
        main.style.position = "static";
        main.style.height = "100%";
        main.style.overflow = "hidden";

        let cardModal = document.createElement("div");
        let contentModal = `
         <div class="modalContainer">
            <img src=${data.sprites.other["official-artwork"].front_default} alt=${data.name}>
            <div class="modalInformation">
                <p>Name: ${data.name}</p>
                        <p>Order: #${data.id}</p>
                        <p>Weight: ${data.weight}Kg</p>
                        <p>${types}</p>
                        <p>${ability}</p>
                    </div>
                    <span class="closeModal">X</span>
                </div>
            `;

        cardModal.innerHTML = contentModal;
        modal.appendChild(cardModal);

        const closeModal = document.querySelector(".closeModal");
        console.log(closeModal);

        closeModal.onclick = function () {
            modalPokemon.style.display = "none";
            main.style.position = "inherit";
            main.style.height = "auto";
            main.style.overflow = "visible";
        }
    })


}

const showPokemons = () => {
    listPokemon.innerHTML = "";
    if (allPokemons.length === 0) {
        return alert("No se encontraron pokemons");
    }
    return allPokemons.map(async (pokemon) => {
        let pokemonInfo = await getInfoPokemon(pokemon.url)
        return CardPokemon(pokemonInfo)
    })
}


getPokemons(`${pokeUrl}?offset=0&limit=20`);



