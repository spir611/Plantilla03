'use strict';

function borrarDato(id) {
    console.log("Borrando datos...");
    solicitudDB = indexedDB.open(nombreBD, versionBD);
    solicitudDB.onerror = function (event) {
        console.error(`IndexedDB error: ${event.target.errorCode}`);
    };
    solicitudDB.onsuccess = function (event) {
        bd = event.target.result;
        canalBD = bd.transaction(tablaBD, "readwrite").objectStore(tablaBD);
        canalBD.delete(id);
    };
    mostrarDatos();
}



/* // Función para borrar un dato de IndexedDB
async function borrarData(nombre) {
    if (!nombre) {
        alert("El nombre del dato a borrar es inválido o está vacío.");
        return;
    }

    try {
        const db = await openDatabase(); // Asumiendo que tienes una función para abrir IndexedDB

        return new Promise((resolve, reject) => {
            const transaction = db.transaction("datos", "readwrite");
            const store = transaction.objectStore("datos");

            const deleteRequest = store.delete(nombre); // Eliminar por clave (nombre en este caso)

            deleteRequest.onsuccess = function () {
                alert(`Dato "${nombre}" eliminado correctamente.`);
                mostrarDatos(); // Refrescar los datos en la tabla
                resolve();
            };

            deleteRequest.onerror = function () {
                console.error("Error al borrar el dato:", deleteRequest.error);
                reject(`Error al borrar el dato "${nombre}".`);
            };
        });
    } catch (error) {
        console.error("Error general al borrar el dato:", error);
        alert("Ocurrió un error al intentar borrar el dato.");
    }
}
 */