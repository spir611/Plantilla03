"use strict"


function loadExercises(exercise){
    const mainContent=document.getElementById("mainContent");

    switch(exercise){
        case "ejerc1":
            mainContent.innerHTML=
            `<div class="container">
                <div class="card">
                <div class="card-img">
                    <img src="../img/calculadoracient.jpg" alt="Image ejercicio 1">
                </div>
                <div class="cardTitle">Calculadora</div>
                <div class="cardBody">
                    <p>Una calculadora básica funcional con GUI</p>
                </div>
                <div class="cardFooter"><a href="../ejercicios/NUMBERS/Ejercicio1/calculadora.html"> Solución &gt;&gt;</a></div>
                </div>
            </div>`;
        break;
        case "ejerc2":
            mainContent.innerHTML=
            `<div class="container">
                <div class="card">
                <div class="card-img">
                    <img src="../img/conversor..jpg" alt="Image ejercicio 2">
                </div>
                <div class="cardTitle">Cambio de Bases</div>
                <div class="cardBody">
                    <p>Una GUI de cambio de bases desde la base decimal a binario, hexadecimal o octal</p>
                </div>
                <div class="cardFooter"><a href="../ejercicios/NUMBERS/Ejercicio2/cambiodebases.html"> Solución &gt;&gt;</a></div>
                </div>
            </div>`;
        break;

    }
}