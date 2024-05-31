function provarValidarCantidadIntegrantesTrabajan(){
    console.assert(
        validarCantidadIntegrantesTrabajan("") === "El campo ingrese la cantidad de integrantes de su familia que trabajen no puede estar vacío",
        "validarCantidadIntegrantesTrabajan no validó que el campo está vacío",
    )
    console.assert(
        validarCantidadIntegrantesTrabajan("-10") === "El campo de cantidad integrantes sólo acepta números positivos",
        "validarCantidadIntegrantesTrabajan no validó que el campo sólo acepta números positivos",
    )
    console.assert(
        validarCantidadIntegrantesTrabajan("100") === "",
        "validarCantidadIntegrantesTrabajan no validó que el campo tiene un salario válido",
    )
}

provarValidarCantidadIntegrantesTrabajan();