const listaPokemon = document.querySelector("#listaPokemon");
const botonesHeader = document.querySelectorAll(".btn-header");
const buttonsPage = document.querySelector("#buttons");


let pokeUrl = "https://pokeapi.co/api/v2/pokemon/";


const getPokemons = async (url) => {
    let btnNext;
    let btnPrevious;
    try {
        const response = await fetch(url);
        const results = await response.json();
        // console.log(results);
        findPokemons(results.results);
        
        btnNext = results.next ? `<button class="btn" data-url=${results.next}>Siguiente</button>` : "";
        btnPrevious = results.previous ? `<button class="btn" data-url=${results.previous}>Anterior</button>` : "";
        buttonsPage.innerHTML = btnPrevious + " " + btnNext;

    } catch (error) {
        console.log(error);
    }

}

getPokemons(pokeUrl);

const findPokemons = async (data) => {
    let templateHTML;
    listaPokemon.innerHTML = "";
    try {
        for (let index of data) {
            const resp = await fetch(index.url);
            const resul = await resp.json();
            // console.log(resul);
            templateHTML = `
            <div class="pokemon">
                <div class="pokemon-imagen">
                    <img src="${resul.sprites.other["official-artwork"].front_default}" alt="${resul.name}">
                    <div class="pokemon-info"> 
                        <h2 class="pokemon-nombre">${resul.name}</h2>
                        <p class="pokemon-id">#${resul.id}</p>
                    </div>
                </div>
            </div>                
            `
            listaPokemon.innerHTML += templateHTML;
        }
    } catch (error) {
        console.log(error)
    }
}

buttonsPage.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn")) {
        let value = e.target.dataset.url;
        // console.log(value);
        getPokemons(value);
    }
})