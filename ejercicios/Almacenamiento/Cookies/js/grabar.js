'use strict';

function grabarDato(nombre, valor) {
    console.log("Grabando dato...");
    let caducidadCookie = 1 * 60 * 1000;

    let theDate = new Date(); 
    let currentMiliseconds = theDate.getTime(); 
    let expirationMiliseconds = currentMiliseconds + caducidadCookie; 
    theDate.setTime(expirationMiliseconds); 
    console.log(`Fecha caducidad: ${theDate}`);

    
    document.cookie = encodeURIComponent(nombre) + "=" + encodeURIComponent(valor) + ";expires=" + theDate.toUTCString() + ";path=./;SameSite=Strict;Secure";

    mostrarDatos(); 
}