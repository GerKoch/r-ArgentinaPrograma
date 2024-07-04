const modal = document.querySelector(".contentModal");

export const ButtonModalPokemon = (data) => {

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

    closeModal.onclick = function () {
        modalPokemon.style.display = "none";
        main.style.position = "inherit";
        main.style.height = "auto";
        main.style.overflow = "visible";
    }
})

};



