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

/* async function guardarData() {
    console.log("Iniciando guardarData..."); // Depuración
    const db = await openDatabase()
    const nombre = document.getElementById("nombre").value.trim();
    const especie = document.getElementById("especie").value.trim();
    const foto= document.getElementById("urlFoto").value.trim();

    console.log(`Guardando: ${nombre}, ${especie}, ${foto}`); // Depuración

    return new Promise((resolve, reject) => {
        const transaction = db.transaction("datos", "readwrite");
        const store = transaction.objectStore("datos");

        const getRequest = store.get(nombre);
        getRequest.onsuccess = function () {
         
            const addRequest = store.add({ nombre, especie, foto});
            addRequest.onsuccess = function () {
                alert("Dato guardado correctamente");
                console.log("Dato guardado correctamente."); // Depuración
                mostrarDatos(); // Actualizar la tabla automáticamente
                resolve();
            };
            addRequest.onerror = function () {
                console.error("Error al guardar el dato."); // Depuración
                
            };
        };

        getRequest.onerror = function () {
            console.error("Error al verificar el dato."); // Depuración
           
        };
    });
}
 */