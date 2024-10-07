"use strict"
const username="Sandra";

const usuario=document.getElementById("usuario")
const logoutButton=document.getElementById("logoutButton")

logoutButton.addEventListener("click", function(event) {
    deleteCookie("logged");
    window.location.href="file:///C:/Users/spirp/OneDrive/a_daw_2curso/DWdecliente/spir611/Cookies_Numeros/index.html";


}); 

usuario.innerHTML=`<h1>${username}</h1>`;