/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

function handleChangeUsers(){
    let $cantidadIntegrantesTrabajan = document.querySelector("#cantidad-integrantes-trabajan");
    return Number($cantidadIntegrantesTrabajan.value);
}

document.querySelector("#agregar").onclick = function(event){
    event.preventDefault();
    
    borrarIntegrantesAnteriores();
    crearIntegrantes(handleChangeUsers());
};

document.querySelector("#quitar").onclick = function(event){
    event.preventDefault();
    const usersContainer = document.querySelector("#integrantes");
    const quantityUsers = usersContainer.querySelectorAll("div.integrante");
    const totalUsers = quantityUsers.length;
  
    const quantityDelete = handleChangeUsers();
    if (totalUsers <= 0) {
        return null
    }

    if (quantityDelete >= totalUsers) {
        return borrarIntegrantesAnteriores()
    }

    for (let i=0; i < totalUsers; i++){
        if (i >= (totalUsers - quantityDelete)){
            quantityUsers[i].remove();
            console.log(i);
        }
            
    }
    return null;
    
};


document.querySelector("#calcular").onclick = function(event){
    const numeros = obtenerSalariosIntegrantes();
    mostrarSalario(`mayor`, obtenerMayorSalarioAnual(numeros));
    mostrarSalario(`menor`, obtenerMenorSalarioAnual(numeros));
    mostrarSalario(`anual`, obtenerSalarioAnualPromedio(numeros));
    mostrarSalario(`mensual`, obtenerSalarioMensualPromedio(numeros));
    mostrarResultados();

    event.preventDefault();
}

document.querySelector("#resetear").onclick = resetear;

function borrarIntegrantesAnteriores(){
    const $integrantes = document.querySelectorAll(".integrante");
    for (let i=0; i < $integrantes.length; i++){
        $integrantes[i].remove();
    }
}

function crearIntegrantes(cantidadIntegrantesTrabajan){
    
    if (cantidadIntegrantesTrabajan > 0){
        mostrarBotonCalculo();
        mostrarBotonReseteo();
    } else {
        resetear();
    }

    for(let i=0; i<cantidadIntegrantesTrabajan; i++){
        crearIntegrante(i);
    }
}

function crearIntegrante(indice){
    const $div = document.createElement("div");
    $div.className = "integrante";

    const $label = document.createElement("label");
    $label.textContent = "Salario anual del integrante #:" + (indice + 1);
    const $input = document.createElement("input");
    $input.type = "number";

    $div.appendChild($label);
    $div.appendChild($input);

    const $integrantes = document.querySelector("#integrantes");
    $integrantes.appendChild($div);
}

function resetear(){
    borrarIntegrantesAnteriores();
    ocultarBotonCalculo();
    ocultarResultados();
    ocultarBotonReseteo();
}

function ocultarBotonCalculo(){
    document.querySelector("#calcular").className = "oculto";
}

function mostrarBotonCalculo(){
    document.querySelector("#calcular").className = "btn btn-primary col-3 m-2";
}

function ocultarBotonReseteo(){
    document.quertSelector("#resetear").className = "oculto";
}

function mostrarBotonReseteo(){
    document.querySelector("#resetear").className = "btn btn-danger col-3 m-2";
}

function ocultarResultados(){
    document.querySelector("#analisis").className = "oculto";
}

function mostrarResultados(){
    document.querySelector("#analisis").className = "";
}

function mostrarSalario(tipo, valor){
    document.querySelector(`#${tipo}-salario`).textContent = valor;
}

function obtenerSalariosIntegrantes(){
    const $integrantes = document.querySelectorAll(".integrante input");
    const salarios = [];
    for (let i=0; i<$integrantes.length; i++){
        if (Number($integrantes[i].value) > 0) {
            salarios.push(Number($integrantes[i].value));
        }
      
    }
    return salarios;
}



function validarCantidadIntegrantesTrabajan(cantidad){
    if(!/^[0-9]+$/.test(cantidad)){
        return "Ingresar sólo números positivos";
    } else if(salary === ""){
        return "El campo cantidad integrantes trabajan no puede estar vacío";
    }else {
    return "";
    }
}

validarCantidadIntegrantesTrabajan();
