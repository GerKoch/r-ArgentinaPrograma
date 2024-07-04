import {getPokemons} from "../../services/fetchPokemons.js";

const buttonsContainer = document.querySelector("#buttonsPagination");

export const ButtonsPagination = (nextLink, prevLink) => {
    
    let btnNext;
    let btnPrevious;

    btnNext = nextLink ? `<button class="btn btn-pag btn-light " data-url=${nextLink}>Siguiente</button>` : ``;
    btnPrevious = prevLink ? `<button class="btn btn-pag btn-light" data-url=${prevLink}>Anterior</button>` : ``;
    buttonsContainer.innerHTML = btnPrevious + "" + btnNext;
}

buttonsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn")) {
        let value = e.target.dataset.url;
        getPokemons(value);
    }
});

