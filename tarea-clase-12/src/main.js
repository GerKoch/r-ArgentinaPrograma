const listPokemon = document.querySelector("#listPokemon");
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

const getPokemons = (url) => {

    fetch(url)
        .then(response => response.json())
        .then(response => {
            nextLink = response.next;
            prevLink = response.previous;
            showPokemons(response.results);
        })
}

const showPokemons = (array) => {
    listPokemon.innerHTML = "";
    array.map(item => {
        fetch(item.url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                loadCardPokemon(data);
            })
    })
}

const loadCardPokemon = (data) => {
    let card = document.createElement("div");
    let content = `
        <div class="pokemon">
            <div class="pokemon-image">
                <img src=${data.sprites.other["official-artwork"].front_default} alt=${data.name}>
                <p>${data.name}</p>
            </div>
        </div>
    `;
    card.innerHTML = content;
    listPokemon.appendChild(card);
}

getPokemons(`${pokeUrl}?offset=0&limit=20`);


