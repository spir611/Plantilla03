"use strict"
const nombreEjercicio = resultado.getAttribute('name');

function mostrar() {
    console.log(`Estoy mostrando el resultado del ${nombreEjercicio}`);
    resultado.innerHTML = `Estoy mostrando el resultado del ${nombreEjercicio}`;
}