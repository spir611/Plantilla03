'use strict';

let datosAcceso = []; 

if (window.localStorage) {
    const nombre = document.getElementById("nombre"); // para acceder al valor del input 
    const valor = document.getElementById("valor"); // para acceder al valor del input 
    const grabar = document.getElementById("guardar"); 

    mostrarDatos(); 
    grabar.addEventListener("click", function (evento){
    event.preventDefault();
    if (nombre.value.trim() === "" || valor.value.trim() === "") {
        alert("Por favor, completa ambos campos antes de guardar.");
        return;
    }

    
        grabarDato(nombre.value, valor.value);
    });
    
} else {
    alert("El navegador no soporta localStorage");
}

const logoutButton=document.getElementById("logoutButton");


logoutButton.addEventListener("click", function(event) {
    event.preventDefault();
    deleteIndexedDB("loggedIn");
    window.location.href="../../../index.html";
}); 