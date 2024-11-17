'use strict';

let datosAcceso = []; 

if (navigator.cookieEnabled == true) { 
    const nombre = document.getElementById("nombre"); 
    const valor = document.getElementById("valor"); 
    const grabar = document.getElementById("guardar"); 

    mostrarDatos(); 
    grabar.addEventListener("click", function (evento) {
        grabarDato(nombre.value, valor.value); 
    });
} else {
    alert("El uso de cookies está desactivado");
}


const logoutButton=document.getElementById("logoutButton");


logoutButton.addEventListener("click", function(event) {
    event.preventDefault();
    deleteIndexedDB("loggedIn");
    window.location.href="../../../../index.html";
}); 