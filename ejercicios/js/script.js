"use strict"

const logoutButton=document.getElementById("logoutButton");

//evento para logout
logoutButton.addEventListener("click", function(event) {
    deleteCookie("logged");
    window.location.href="../../../index.html";
}); 

//eventos para cargar el contenido de los ejercicios
document.getElementById("ejerc1").addEventListener("click", function(){
    loadExercises("ejerc1");
});

document.getElementById("ejerc2").addEventListener("click", function(){
    loadExercises("ejerc2");
});

document.getElementById("ejerc3").addEventListener("click", function(){
    loadExercises("ejerc3");
});

document.getElementById("ejerc4").addEventListener("click", function(){
    loadExercises("ejerc4");
});

document.getElementById("ejerc5").addEventListener("click", function(){
    loadExercises("ejerc5");
});

document.getElementById("ejerc6").addEventListener("click", function(){
    loadExercises("ejerc6");
});