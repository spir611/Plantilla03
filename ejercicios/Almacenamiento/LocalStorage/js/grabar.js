'use strict';

function grabarDato(name, value) {
    console.log("Grabando dato...");
    datosAcceso.push({
        nombre: name,
        valor: value
    }); 

    
    localStorage.setItem("localAcceso", JSON.stringify(datosAcceso)); 

    mostrarDatos(); 
}