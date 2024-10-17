"use strict"

function convertirAMayusculas(texto){

    return texto.toUpperCase();
}


function convertirAMinusculas(texto){

    return texto.toLowerCase();
}

//convierte la primera letra en Mayuscula resto en minusculas
function convertirPrimeraLetraAMayuscula(texto){
        const palabras =texto.split(" ");
        for (let i=0;i<palabras.length; i++){
            palabras[i]=palabras[i].charAt(0).toUpperCase()+palabras[i].slice(1).toLowerCase();
        }
        return palabras.join(" ");
}

//convierte la ultima letra en mayuscula resto minuscula
function convertirUltimaLetraAMayuscula(texto){
    const palabras =texto.split(" ");
    for (let i=0;i<palabras.length; i++){
        let ultimoLetra=palabras[i].charAt((palabras[i].length)-1).toUpperCase();
        let primerPartePalabra=palabras[i].slice(0,-1);
        palabras[i]=primerPartePalabra.toLowerCase()+ultimoLetra;
    }
    return palabras.join(" ");
}

//convierte la primera letra en minuscula resto mayusculas
function convertirPrimeraLetraAMinusculas(texto){

    const palabras =texto.split(" ");
    for (let i=0;i<palabras.length; i++){
        palabras[i]=palabras[i].charAt(0).toLowerCase()+palabras[i].slice(1).toUpperCase();
    }
    return palabras.join(" ");
}

//convierte la ultima letra de cada palabra en minuscula resto mayuscula
function convertirUltimaLetraAMinusculas(texto){

    const palabras =texto.split(" ");
    for (let i=0;i<palabras.length; i++){
        let ultimoLetra=palabras[i].charAt((palabras[i].length)-1).toLowerCase();
        let primerPartePalabra=palabras[i].slice(0,-1);
        palabras[i]=primerPartePalabra.toUpperCase()+ultimoLetra;
    }
    return palabras.join(" ");
}
//convierte los vocales en mayusculas resto minusculas
function convertirVocalesAMayusculas(texto){
    const vocales=["a","e","i","o","u"];
    let nuevaPalabra="";
    const palabras =texto.split(" ");
    for (let i=0;i<palabras.length; i++){
        for(let j=0;j<palabras[i].length;j++){
            if (vocales.includes((palabras[i].charAt(j)).toLowerCase())){
                nuevaPalabra+=(palabras[i].charAt(j)).toUpperCase();
            
            }else{
                nuevaPalabra+=(palabras[i].charAt(j)).toLowerCase();
            } 
        }
        palabras[i]=nuevaPalabra;
        nuevaPalabra="";
    }
    return palabras.join(" ");
}

//convierte los vocales en minusculas resto mayusculas
function convertirVocalesAMinusculas(texto){
    const vocales=["a","e","i","o","u"];
    let nuevaPalabra="";
    const palabras =texto.split(" ");
    for (let i=0;i<palabras.length; i++){
        for(let j=0;j<palabras[i].length;j++){
            if (vocales.includes((palabras[i].charAt(j)).toLowerCase())){
                nuevaPalabra+=(palabras[i].charAt(j)).toLowerCase();
            
            }else{
                nuevaPalabra+=(palabras[i].charAt(j)).toUpperCase();
            } 
        }
        palabras[i]=nuevaPalabra;
        nuevaPalabra="";
    }
    return palabras.join(" ");
}

//convierte los consonantes en mayusculas resto minusculas
function convertirConsonantesAMayusculas(texto){
    const vocales=["a","e","i","o","u"];
    let nuevaPalabra="";
    const palabras =texto.split(" ");
    for (let i=0;i<palabras.length; i++){
        for(let j=0;j<palabras[i].length;j++){
            if (!vocales.includes((palabras[i].charAt(j)).toLowerCase())){
                nuevaPalabra+=(palabras[i].charAt(j)).toUpperCase();
            
            }else{
                nuevaPalabra+=(palabras[i].charAt(j)).toLowerCase();
            } 
        }
        palabras[i]=nuevaPalabra;
        nuevaPalabra="";
    }
    return palabras.join(" ");
}

//convierte los consonantes en minusculas resto mayusculas
function convertirConsonantesAMinusculas(texto){
    const vocales=["a","e","i","o","u"];
    let nuevaPalabra="";
    const palabras =texto.split(" ");
    for (let i=0;i<palabras.length; i++){
        for(let j=0;j<palabras[i].length;j++){
            if (!vocales.includes((palabras[i].charAt(j)).toLowerCase())){
                nuevaPalabra+=(palabras[i].charAt(j)).toLowerCase();
            
            }else{
                nuevaPalabra+=(palabras[i].charAt(j)).toUpperCase();
            } 
        }
        palabras[i]=nuevaPalabra;
        nuevaPalabra="";
    }
    return palabras.join(" ");
}
//modifica texto aleatoriomente entre las diferentes funciones
function convertirTextoAleatorio(texto){

    let seleccionAleatorio=Math.floor(Math.random()*(9-1+1)+1);
    let resultado="";


    switch(seleccionAleatorio){
        case 1:
            resultado=convertirAMayusculas(texto);
            break;
        case 2:
            resultado=convertirAMinusculas(texto);    
            break;
        case 3:
            resultado=convertirPrimeraLetraAMayuscula(texto);
            break;    
        case 4:
            resultado=convertirUltimaLetraAMayuscula(texto);
            break;
        case 5:
            resultado=convertirPrimeraLetraAMinusculas(texto);
            break;
        case 6:
            resultado=convertirVocalesAMayusculas(texto);    
            break;
        case 7:
            resultado=convertirVocalesAMinusculas(texto);       
            break;
        case 8:
            resultado=convertirConsonantesAMayusculas(texto)
            break;
        case 9:
            resultado=convertirConsonantesAMinusculas(texto)
            break;
    }
    return resultado;
}

//detiene los intervalos invocados
function pararClearSetInterval() {
    // Detener los intervalos si están activos
    if (pararClearSetInterval.aleatorioIntervalLento) {
        clearInterval(pararClearSetInterval.aleatorioIntervalLento);
        pararClearSetInterval.aleatorioIntervalLento = null; // Limpiar el identificador
    }
    if (pararClearSetInterval.aleatorioIntervalRapido) {
        clearInterval(pararClearSetInterval.aleatorioIntervalRapido);
        pararClearSetInterval.aleatorioIntervalRapido = null; // Limpiar el identificador
    }
}


//repite la funcion aleatorio cada 4s
function aleatorioIntervalLento(aleatorio){
    pararClearSetInterval();

    pararClearSetInterval.aleatorioIntervalLento=setInterval(aleatorio,4000);

    
    
//repite la funcion aleatorio cada 1s
}function aleatorioIntervalRapido(aleatorio){
    pararClearSetInterval();
    pararClearSetInterval.aleatorioIntervalRapido=setInterval(aleatorio,1000);

    
}