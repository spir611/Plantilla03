'use strict';

function grabarDato(nombre, especie, foto) {
    console.log("Grabando datos...");
    if(!nombre){
        alert("Hay que introducir un nombre");
        return;
    }
    solicitudDB = indexedDB.open(nombreBD, versionBD);
    solicitudDB.onerror = function (event) {
        console.error(`IndexedDB error: ${event.target.errorCode}`);
    };
    solicitudDB.onsuccess = function (event) {
        bd = event.target.result;
        canalBD = bd.transaction(tablaBD, "readwrite").objectStore(tablaBD);
        canalBD.add({ nombre, especie, foto });
        mostrarDatos();
    };
    
}