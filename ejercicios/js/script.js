"use strict"

const logoutButton=document.getElementById("logoutButton");

logoutButton.addEventListener("click", function(event) {
    deleteCookie("logged");
    window.location.href="../../../index.html";
}); 


document.getElementById("ejerc1").addEventListener("click", function(){
    loadExercises("ejerc1");
});

document.getElementById("ejerc2").addEventListener("click", function(){
    loadExercises("ejerc2");
});

