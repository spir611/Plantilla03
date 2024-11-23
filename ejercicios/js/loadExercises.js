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
        case "ejerc5":
            mainContent.innerHTML=
            `<div class="container">
                <div class="card">
                <div class="card-img">
                    <img width=96% src="../img/matriz.jpg" alt="Image ejercicio 5">
                </div>
                <div class="cardTitle">Matrices</div>
                <div class="cardBody">
                    <p>En este ejercicio trabajamos con matrices, creando matrices con valores aleatorios y la posibilidad de generarlas a velocidades distintas. Adicionalmente podemos seleccionar entre tres operaciones sumar restar y multiplicar las dos matrices generadas.</p>
                </div>
                <div class="cardFooter"><a href="../ejercicios/ARRAYS/matrix.html"> Solución &gt;&gt;</a></div>
                </div>
            </div>`;
        break;
        case "ejerc6":
            mainContent.innerHTML=
            `<div class="container">
                <div class="card">
                <div class="card-img">
                    <img width=90% src="../img/cookies.png" alt="Image ejercicio 6">
                </div>
                <div class="cardTitle">Cookies</div>
                <div class="cardBody">
                    <p>En este ejercicio trabajamos con almacenamiento usando cookies.</p>
                </div>
                <div class="cardFooter"><a href="../ejercicios/ALMACENAMIENTO/Cookies/cookies.html"> Solución &gt;&gt;</a></div>
                </div>
            </div>`;
        break;
        case "ejerc7":
            mainContent.innerHTML=
            `<div class="container">
                <div class="card">
                <div class="card-img">
                    <img width=96% src="../img/session.jpg" alt="Image ejercicio 7">
                </div>
                <div class="cardTitle">Session Storage</div>
                <div class="cardBody">
                    <p>En este ejercicio trabajamos con almacenamiento usando Session Storage.</p>
                </div>
                <div class="cardFooter"><a href="../ejercicios/ALMACENAMIENTO/SessionStorage/sessionStorage.html"> Solución &gt;&gt;</a></div>
                </div>
            </div>`;
        break;
        case "ejerc8":
            mainContent.innerHTML=
            `<div class="container">
                <div class="card">
                <div class="card-img">
                    <img width=96% src="../img/local.jpg" alt="Image ejercicio 8">
                </div>
                <div class="cardTitle">Local Storage</div>
                <div class="cardBody">
                    <p>En este ejercicio trabajamos con almacenamiento usando local storage.</p>
                </div>
                <div class="cardFooter"><a href="../ejercicios/ALMACENAMIENTO/LocalStorage/localStorage.html"> Solución &gt;&gt;</a></div>
                </div>
            </div>`;
        break;
        case "ejerc9":
            mainContent.innerHTML=
            `<div class="container">
                <div class="card">
                <div class="card-img">
                    <img width=96% src="../img/indexDB.jpg" alt="Image ejercicio 9">
                </div>
                <div class="cardTitle">Indexed DB</div>
                <div class="cardBody">
                    <p>En este ejercicio trabajamos con almacenamiento usando indexedDB. Además recogemos datos de un api de uno en uno o de cinco en cinco. Se realiza un CRUD: guardar, borrar, leer y actualizar.</p>
                </div>
                <div class="cardFooter"><a href="../ejercicios/ALMACENAMIENTO/IndexedDB/indexedDB.html"> Solución &gt;&gt;</a></div>
                </div>
            </div>`;
        break;
       
        case "ejerc10":
            mainContent.innerHTML=
            `<div class="container">
                <div class="card">
                <div class="card-img">
                    <img width=96% src="../img/lavadora.jpg" alt="Image ejercicio 10">
                </div>
                <div class="cardTitle">Hacer la Colada con Pila</div>
                <div class="cardBody">
                    <p>En este ejercicio introducimos y sacamos prendas de la colada con la estructura Pila utilizando Programación Orientada a Objetos y modularización.</p>
                </div>
                <div class="cardFooter"><a href="../ejercicios/Estructuras/colada/index.html"> Solución &gt;&gt;</a></div>
                </div>
            </div>`;
        break;
        case "ejerc11":
            mainContent.innerHTML=
            `<div class="container">
                <div class="card">
                <div class="card-img">
                    <img width=96% src="../img/taller.jpg" alt="Image ejercicio 11">
                </div>
                <div class="cardTitle">Taller con la estructura cola</div>
                <div class="cardBody">
                    <p>En este ejercicio usamos la estructura de cola junto a la programación orientada a objetos y la modularización.</p>
                </div>
                <div class="cardFooter"><a href="../ejercicios/Estructuras/taller/index.html"> Solución &gt;&gt;</a></div>
                </div>
            </div>`;
        break;
        case "ejerc12":
            mainContent.innerHTML=
            `<div class="container">
                <div class="card">
                <div class="card-img">
                    <img width=96% src="../img/lista.avif" alt="Image ejercicio 12">
                </div>
                <div class="cardTitle">Gestor de tareas con una estructura lista</div>
                <div class="cardBody">
                    <p>En este ejercicio gestionamos un tareas de dos forma con una estructura lista normal y otra prioritaria..</p>
                </div>
                <div class="cardFooter"><a href="../ejercicios/Estructuras/tareas/index.html"> Solución &gt;&gt;</a></div>
                </div>
            </div>`;
        break;
    }
}