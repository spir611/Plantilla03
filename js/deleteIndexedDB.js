/* "use strict";

function deleteIndexedDB(name) {
    const transaction = db.transaction(['miAlmacen'], 'readwrite');
    const almacen = transaction.objectStore('miAlmacen');
    const request = almacen.delete(name);

    request.onsuccess = function() {
        console.log(`IndexedDB: Eliminada la clave ${name}`);
    };

    request.onerror = function(event) {
        console.error('IndexedDB: Error al eliminar el dato', event);
    };
} */

"use strict";

async function deleteIndexedDB(name) {
    await openDatabase(); // Asegurarnos de que la base de datos está abierta.

    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['LoginStore'], 'readwrite');
        const almacen = transaction.objectStore('LoginStore');
        const request = almacen.delete(name);

        request.onsuccess = function() {
            console.log(`IndexedDB: Eliminada la clave ${name}`);
            resolve();
        };

        request.onerror = function(event) {
            console.error("IndexedDB: Error al eliminar el dato", event);
            reject(event);
        };
    });
}
