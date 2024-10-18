"use strict"

const logoutButton=document.getElementById("logoutButton");

//evento para logout
logoutButton.addEventListener("click", function(event) {
    deleteLocalStorage("loggedIn");
    window.location.href="../../../../index.html";
}); 


const textarea = document.getElementById('miTextarea');
const botones = document.querySelectorAll('.btn');


botones.forEach(boton => {
    boton.addEventListener('click', (event) => {
        
            switch (event.target.id) {
                case 'A-Z':
                    textarea.value=convertirAMayusculas(textarea.value);
                    break;
                case 'a-z':
                    textarea.value=convertirAMinusculas(textarea.value);
                    break;
                case 'A_':
                    textarea.value=convertirPrimeraLetraAMayuscula(textarea.value);
                    break;
                case '_Z':
                    textarea.value=convertirUltimaLetraAMayuscula(textarea.value);
                    break;
                case 'a_':
                    textarea.value=convertirPrimeraLetraAMinusculas(textarea.value);
                    break;
                case '_z':
                    textarea.value=convertirUltimaLetraAMinusculas(textarea.value);
                    break;
                case 'AIEOU':
                    textarea.value=convertirVocalesAMayusculas(textarea.value);
                    break;
                case 'aeiou':
                    textarea.value=convertirVocalesAMinusculas(textarea.value);
                break;
                case 'BC':
                    textarea.value=convertirConsonantesAMayusculas(textarea.value);
                    break;
                case 'bc':
                    textarea.value=convertirConsonantesAMinusculas(textarea.value);
                    break;
                case 'Aleatorio':
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
