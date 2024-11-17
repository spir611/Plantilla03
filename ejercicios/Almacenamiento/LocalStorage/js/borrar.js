'use strict';

function borrarDato(name) {
    console.log("Borrando dato...");
    let newDatosAcceso = [];
    let cont = 0;

    datosAcceso = JSON.parse(localStorage.getItem("localAcceso")); 
    for (let i = 0; i < datosAcceso.length; i++) {
        if (!(datosAcceso[i].nombre == name)) { 
            newDatosAcceso[cont] = datosAcceso[i];
            cont++;
        }
        
    }
    datosAcceso = [...newDatosAcceso]; 
    localStorage.setItem("localAcceso", JSON.stringify(datosAcceso)); 

    mostrarDatos(); 