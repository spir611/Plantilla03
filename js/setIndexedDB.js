/* "use strict";



function setIndexedDB(name, value) {
    const transaction = db.transaction(['LoginStore'], 'readwrite');
    const almacen = transaction.objectStore('LoginStore');
    const request = almacen.put({ nombre: name, valor: encodeURIComponent(value || "") });

    request.onsuccess = function() {
        console.log(`IndexedDB: Guardado ${name}=${encodeURIComponent(value || "")}`);
    };

    request.onerror = function(event) {
        console.error('IndexedDB: Error al guardar el dato', event);
    };
} */
"use strict";

async function setIndexedDB(name, value) {
    await openDatabase(); // Asegurarnos de que la base de datos está abierta.

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['LoginStore'], 'readwrite');
        const almacen = transaction.objectStore('LoginStore');
        console.log("Datos que intentas guardar en IndexedDB:", { name, valor: encodeURIComponent(value || "") });
        const request = almacen.put({ name: name, valor: encodeURIComponent(value || "") });

        request.onsuccess = function() {
            console.log(`IndexedDB: Guardado ${name}=${encodeURIComponent(value || "")}`);
            resolve();
        };

        request.onerror = function(event) {
            console.error("IndexedDB: Error al guardar el dato", event);
            reject(event);
        };
    });
}
