"use strict"

document.addEventListener("DOMContentLoaded", function() {
    const logoutButton = document.getElementById("logoutButton");

    // Verificar que el botón logoutButton existe antes de añadir el event listener
    if (logoutButton) {
        // Evento al cliquear en logout para borrar cookie
        logoutButton.addEventListener("click", function(event) {
            event.preventDefault();
            deleteIndexedDB("loggedIn");
            window.location.href = "../index.html";
        });
    } else {
        console.log("logoutButton no se encontró en el DOM.");
    }
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

document.getElementById("ejerc7").addEventListener("click", function(){
    loadExercises("ejerc7");
});

document.getElementById("ejerc8").addEventListener("click", function(){
    loadExercises("ejerc8");
});

document.getElementById("ejerc9").addEventListener("click", function(){
    loadExercises("ejerc9");
});

