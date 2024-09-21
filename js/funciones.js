"use strict"
const nombreEjercicio = resultado.getAttribute('name');

function mostrar(resultado, texto) {
    console.log(texto);
    resultado.innerHTML = texto;
}