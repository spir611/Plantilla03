"use strict"
console.log("Archivo cargado correctamente");

const logoutButton=document.getElementById("logoutButton");

//evento al cliquear en logout para borrar cookie
logoutButton.addEventListener("click", function(event) {
    event.preventDefault();
    deleteIndexedDB("loggedIn");
    window.location.href="../../../../../index.html";
}); 



const textarea = document.getElementById('miTextarea');
const botones = document.querySelectorAll('.btn');


botones.forEach(boton => {
    boton.addEventListener('click', (event) => {
        console.log(event.target.id);
        
            switch (event.target.id) {
                case 'A-Z':
                    console.log("Ejecutando convertirAMayusculas");
                    textarea.value=convertirAMayusculas(textarea.value);
                    console.log(textarea.value);
                    break;
                case 'a-z':
                    console.log("Ejecutando convertirAMayusculas");
                    textarea.value=convertirAMinusculas(textarea.value);
                    break;
                case 'A_':
                    console.log("Ejecutando convertirAMayusculas");
                    textarea.value=convertirPrimeraLetraAMayuscula(textarea.value);
                    break;
                case '_Z':
                    console.log("Ejecutando convertirAMayusculas");
                    textarea.value=convertirUltimaLetraAMayuscula(textarea.value);
                    break;
                case 'a_':
                    console.log("Ejecutando convertirAMayusculas");
                    textarea.value=convertirPrimeraLetraAMinusculas(textarea.value);
                    break;
                case '_z':
                    console.log("Ejecutando convertirAMayusculas");
                    textarea.value=convertirUltimaLetraAMinusculas(textarea.value);
                    break;
                case 'AIEOU':
                    console.log("Ejecutando convertirAMayusculas");
                    textarea.value=convertirVocalesAMayusculas(textarea.value);
                    break;
                case 'aeiou':
                    console.log("Ejecutando convertirAMayusculas");
                    textarea.value=convertirVocalesAMinusculas(textarea.value);
                break;
                case 'BC':
                    console.log("Ejecutando convertirAMayusculas");
                    textarea.value=convertirConsonantesAMayusculas(textarea.value);
                    break;
                case 'bc':
                    console.log("Ejecutando convertirAMayusculas");
                    textarea.value=convertirConsonantesAMinusculas(textarea.value);
                    break;
                case 'Aleatorio':
                    console.log("Ejecutando convertirAMayusculas");
                    textarea.value=convertirTextoAleatorio(textarea.value);
                    break;
                case 'Parar':
                    pararClearSetInterval();
                    break;
                case 'Rapido':
                    pararClearSetInterval();
                    aleatorioIntervalRapido(()=>{
                        textarea.value=convertirTextoAleatorio(textarea.value);
                    });
                    break;
                case 'Lento':
                    pararClearSetInterval();
                    aleatorioIntervalLento(()=>{
                        textarea.value=convertirTextoAleatorio(textarea.value)
                });
                    break;
                default:
                    console.log(`No se encontró acción para ${event.target.id}`);
            }
        });
    
});
