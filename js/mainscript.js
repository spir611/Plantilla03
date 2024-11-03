"use strict"

const username="Sandra";

const usuario=document.getElementById("usuario");

/* const logoutButton=document.getElementById("logoutButton");

//evento al cliquear en logout para borrar cookie
logoutButton.addEventListener("click", function(event) {
    event.preventDefault();
    deleteIndexedDB("loggedIn");
    window.location.href="../index.html";
});  */
document.addEventListener("DOMContentLoaded", function() {
    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", function(event) {
            event.preventDefault();
            deleteIndexedDB("loggedIn");
            window.location.href = "../index.html";
        });
    } else {
        console.log("logoutButton no se encontró en el DOM.");
    }
});

//personalización del banner de bienvenida-nombre usuario
usuario.innerHTML=`<h1>${username}</h1>`;


