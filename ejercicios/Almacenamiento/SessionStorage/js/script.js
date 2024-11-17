'use strict';

let datosAcceso = []; 

if (window.sessionStorage) {
    const nombre = document.getElementById("nombre"); 
    const valor = document.getElementById("valor"); 
    const grabar = document.getElementById("guardar"); 

    mostrarDatos(); 
    grabar.addEventListener("click", function (event){
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
    window.location.href="../../../../index.html";
}); 