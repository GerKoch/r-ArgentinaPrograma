//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

/*
Ejemplo form:
  <form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
  </form>

  <div id="resultado">Hola</div>
*
* */

const botonSaludo = document.querySelector("#crear-saludo");

botonSaludo.onclick = function (){
  let nameUser = concatenarNombreUser();
  let ageUser = document.querySelector("#edad").value;

  personalizarSaludo(nameUser);
  mostrarInfoUser(nameUser, ageUser);

  return false;
};

function concatenarNombreUser() {
  const firstName = document.querySelector("#primer-nombre").value;
  const firstSurname = document.querySelector("#primer-apellido").value;
  const secondName = document.querySelector("#segundo-nombre").value
    ? ` ${document.querySelector("#segundo-nombre").value}`
    : "";

  const secondSurname = document.querySelector("#segundo-apellido").value
    ? ` ${document.querySelector("#segundo-apellido").value}`
    : "";

  return `${firstName}${secondName} ${firstSurname}${secondSurname}`;
}

function personalizarSaludo(nombre) {
  const saludo = document.querySelector("h1");
  saludo.innerText = `Bienvenido ${nombre}!`;
}

function mostrarInfoUser(nombre, edad) {
  const infoUser = document.querySelector("#info-user");
  infoUser.innerText = `${nombre}, ${edad} años`;
}

