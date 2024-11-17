'use strict';

function borrarDato(nombre) {
    console.log("Borrando dato...");
    let caducidadCookie = 1 * 60 * 250; 
    let theDate = new Date(); 
    let currentMiliseconds = theDate.getTime(); 
    let expirationMiliseconds = currentMiliseconds - caducidadCookie; 
    theDate.setTime(expirationMiliseconds); 
    console.log(`Fecha caducidad: ${theDate}`);

    
    document.cookie = nombre + "=;expires=" + theDate.toUTCString() + ";path=./;SameSite=Strict;Secure"; 

    mostrarDatos(); 
}
 
 