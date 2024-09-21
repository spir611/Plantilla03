"use strict"
const resultado = document.getElementById("resultado");
const texto=`Estoy mostrando el resultado del ${resultado.getAttribute('name')}`
const boton = document.getElementById("boton");

boton.addEventListener("click", function () {
    mostrar(resultado, texto);
});
