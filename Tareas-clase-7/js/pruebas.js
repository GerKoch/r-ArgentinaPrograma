function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );
}
probarValidarNombre();

function probarValidarCiudad() {
    console.assert(
        validarCiudad("") === "Este campo debe tener al menos 1 caracter",
        "Validar ciudad no validó que que ciudad no sea vacío",
    );

    console.assert(
        validarCiudad(
            "1111111111111111111111111111111111111111111111111111111111111111111111111111111111111") ===
        "Este campo debe tener menos de 50 caracteres",
        "Validar ciudad no validó que ciudad sea menor a 50 caracteres",
    );
}
probarValidarCiudad();

function provarvalidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo("") === 
        "Este campo debe tener al menos un caracter", 
        "Validar descripcionRegalo no valido que descripcionRegalo no sea vacío ",
    );
    console.assert(
        validarDescripcionRegalo("1111111111111111111111111111111111111111111111111111111111111111111111111111111111111") === 
        "Este campo debe tener menos de 50 caracteres", 
        "Validar descripcionRegalo no valido que descripcionRegalo sea menor a 50 caracteres",
    );
}
provarvalidarDescripcionRegalo();
