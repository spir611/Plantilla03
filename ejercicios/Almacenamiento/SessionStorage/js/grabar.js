'use strict';

function grabarDato(name, value) {
    console.log("Grabando dato...");
    datosAcceso.push({
        nombre: name,
        valor: value
    }); 
    sessionStorage.setItem("sessionAcceso", JSON.stringify(datosAcceso)); 

    mostrarDatos();
}