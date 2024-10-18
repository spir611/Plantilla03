"use strict"

const username="Sandra";

const usuario=document.getElementById("usuario");

const logoutButton=document.getElementById("logoutButton");

//evento al cliquear en logout para borrar cookie
logoutButton.addEventListener("click", function(event) {
    event.preventDefault();
    deleteLocalStorage("loggedIn");
    window.location.href="../index.html";
}); 

//personalización del banner de bienvenida-nombre usuario
usuario.innerHTML=`<h1>${username}</h1>`;


