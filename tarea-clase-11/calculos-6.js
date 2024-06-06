function obtenerMayorSalarioAnual(numeros) {
    let mayorSalario = numeros[0];
    for (let i=1; i < numeros.length; i++) {
        if (numeros[i] > mayorSalario) {
            mayorSalario = numeros[i];
        }
    }
    return mayorSalario;
}

function obtenerMenorSalarioAnual(numeros) {
    let menorSalario = numeros[0];
    for (let i=1; i < numeros.length; i++) {
        if (numeros[i] < menorSalario) {
            menorSalario = numeros[i];
        }
    }
    return menorSalario;
}

function obtenerSalarioAnualPromedio(numeros){
    let acumulador = numeros[0];
    for (let i=1; i < numeros.length; i++) {
        acumulador += numeros[i];
    }
    return (acumulador / numeros.length).toFixed(2);
}

function obtenerSalarioMensualPromedio(numeros) {
    let acumulador = numeros[0];
    for (let i=1; i < numeros.length; i++) {
        acumulador += numeros[i];
    }
    return ((acumulador / numeros.length) / 12).toFixed(2);
}
