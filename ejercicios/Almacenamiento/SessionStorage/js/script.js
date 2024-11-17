'use strict';

let datosAcceso = []; // 'array' dónde almaceno los valos de nombre y clave

if (window.sessionStorage) {
    const nombre = document.getElementById("nombre"); // para acceder al valor del input para el nombre
    const valor = document.getElementById("valor"); // para acceder al valor del input para la clave
    const grabar = document.getElementById("guardar"); // para comprobar cuando se ha pulsado el bóton 'guardar'

    mostrarDatos(); // nada más cargar la página muestro el contenido de 'localStorage'
    grabar.addEventListener("click", function (evento){
    event.preventDefault();
    if (nombre.value.trim() === "" || valor.value.trim() === "") {
        alert("Por favor, completa ambos campos antes de guardar.");
        return;
    }

     // escucho la pulsación del botón 'guardar'
        grabarDato(nombre.value, valor.value);
    });
    
} else {
    alert("El navegador no soporta localStorage");
}


const logoutButton=document.getElementById("logoutButton");

//evento al cliquear en logout para borrar cookie
logoutButton.addEventListener("click", function(event) {
    event.preventDefault();
    deleteIndexedDB("loggedIn");
    window.location.href="../../../../index.html";
}); 