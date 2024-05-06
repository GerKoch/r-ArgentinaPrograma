//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>


const $botonCalcularSalarioMensual = document.querySelector("#calcular-salario-mensual-btn");

$botonCalcularSalarioMensual.onclick = function () {
  const salarioAnual = document.querySelector("#salario-anual").value;

  const salarioMensual = salarioAnual/12;

  document.querySelector("#salario-mensual").value = salarioMensual;

  return false;
};