'use strict';

function grabarDatoApi(nombre, especie, foto) {
    console.log("Grabando datos...");
    const solicitudDB = indexedDB.open(nombreBD, versionBD);

    solicitudDB.onerror = function (event) {
        console.error(`IndexedDB error: ${event.target.errorCode}`);
    };

    solicitudDB.onsuccess = function (event) {
        const bd = event.target.result;
        const canalBD = bd.transaction(tablaBD, "readwrite").objectStore(tablaBD);

        const solicitud = canalBD.add({ nombre, especie, foto });

        solicitud.onsuccess = function () {
            console.log("Dato guardado con éxito:", { nombre, especie, foto });
        };

        solicitud.onerror = function (event) {
            console.error("Error al guardar en IndexedDB:", event.target.error);
        };
    };
}

