"use strict"

const logoutButton=document.getElementById("logoutButton")

logoutButton.addEventListener("click", function(event) {
    deleteCookie("logged");
    window.location.href="../../../index.html";


}); 
