//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $segundosVideosClases = document.querySelectorAll(".segundos");
const $munitosVideosClases = document.querySelectorAll(".minutos");
const $horasVideosClases = document.querySelectorAll(".horas");
const botonCalculoDuracion = document.querySelector("#calcular-total-duracion");

botonCalculoDuracion.onclick = function(){
    const totalSegundos = sumarValores($segundosVideosClases);
    const totalMinutos = sumarValores($munitosVideosClases);
    const totalHoras = sumarValores($horasVideosClases);
    
    totalTiempo = calcularTotalTiempo(totalSegundos, totalMinutos, totalHoras);
    const totalResultado = document.querySelector("#total-duracion-videos");
    
    totalResultado.innerText = `Duración total de videos: ${totalTiempo}`;

    botonCalculoDuracion.disabled = true;
};

function sumarValores(videosClases){
    let sumar = 0;

    for(let i=0; i<videosClases.length; i++){
        sumar += Number(videosClases[i].innerText);
    }
    return sumar;
}

function calcularTotalTiempo(segundos, minutos, horas){
    totalSegs = segundos/60;
    totalmins = Math.floor(segundos/60)+(minutos/60);
    totalHs = horas+Math.floor((Math.floor(segundos/60)+minutos)/60);

    return `${totalHs}hs, ${totalmins}mins, ${totalSegs}segs`;
}