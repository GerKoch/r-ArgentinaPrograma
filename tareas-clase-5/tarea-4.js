//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const listadoNumeros = document.querySelectorAll("li");
const arrayNumeros = conversionArrayListadoNumeros(listadoNumeros);

resultados();

function conversionArrayListadoNumeros(listadoNumeros){
    const array = [];
    
    for(let i=0; i<listadoNumeros.length; i++){
        array.push(Number(listadoNumeros[i].innerText));
    }
    return array;
}

function calcularMayor(array){
    let mayor = array[0];
   
    for(let i=0; i < array.length; i++){
        if(array[i] > mayor){
            mayor = array[i];
        }
    }
    return mayor;
}

function calcularMenor(array){
    let menor =array[0];
    
    for(let i=0; i < array.length; i++){
        if(array[i] < mayor){
            menor = array[i];
        }
        return menor;
    }
}

function encontrarRepetido(array){
    let repetido;
    let frecuencia = 0;

    for(let i=0; i < array.length; i++){
        let counter = 0;
        
        for(let e = 0; e < array.length; e++){
            if(array[e] === array[i]){
                counter++;
            }
        }
        if(counter > frecuencia){
            repetido = array[i];
            frecuencia = counter;
        }
    } 
    return `${repetido} y se repite ${frecuencia} veces`;
}

function resultados(){
    const mayor = document.querySelector("#mayor");
    const menor = document.querySelector("#menor");
    const repetido = document.querySelector("#repetido");

    mayor.textContent = `El número mayor es: ${calcularMayor(arrayNumeros)}`;
    menor.textContent = `El número menor es: ${calcularMenor(arrayNumeros)}`;
    repetido.textContent = `El número que más se repite es: ${encontrarRepetido(arrayNumeros)}`;

}
