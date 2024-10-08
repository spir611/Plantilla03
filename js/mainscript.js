"use strict"

const username="Sandra";

const usuario=document.getElementById("usuario");

const logoutButton=document.getElementById("logoutButton");

logoutButton.addEventListener("click", function(event) {
    deleteCookie("logged");
    window.location.href="../index.html";
}); 

usuario.innerHTML=`<h1>${username}</h1>`;