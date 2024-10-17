"use strict"

//cargar el ejercicio seleccionado en el contenido principal
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
        case "ejerc3":
            mainContent.innerHTML=
            `<div class="container">
                <div class="card">
                <div class="card-img">
                    <img src="../img/strings_texto.jpg" alt="Image ejercicio 3">
                </div>
                <div class="cardTitle">Modificador de texto</div>
                <div class="cardBody">
                    <p>Permite realizar cambios a un texto introducido: mayúsculas o minúsculas de vocales o consonantes en distintas posiciones con la posibilidad de realizarlo de forma aleatorio a diferentes velocidades.</p>
                </div>
                <div class="cardFooter"><a href="../ejercicios/STRINGS/Ejercicio1/strings.html"> Solución &gt;&gt;</a></div>
                </div>
            </div>`;
        break;
        case "ejerc4":
            mainContent.innerHTML=
            `<div class="container">
                <div class="card">
                <div class="card-img">
                    <img src="" alt="Image ejercicio 4">
                </div>
                <div class="cardTitle">Api Web</div>
                <div class="cardBody">
                    <p>Próximamente</p>
                </div>
                <div class="cardFooter"><a href=""> Solución &gt;&gt;</a></div>
                </div>
            </div>`;
        break;



    }
}