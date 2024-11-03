/* "use strict";

function getIndexedDB(name) {
    const transaction = db.transaction(['miAlmacen'], 'readonly');
    const almacen = transaction.objectStore('miAlmacen');
    const request = almacen.get(name);

    request.onsuccess = function(event) {
        if (request.result) {
            const valor = decodeURIComponent(request.result.valor);
            console.log(`IndexedDB: Recuperado ${name}=${valor}`);
        } else {
            console.log(`IndexedDB: No se encontró el valor para ${name}`);
        }
    };

    request.onerror = function(event) {
        console.error('IndexedDB: Error al obtener el dato', event);
    };
} */
"use strict";
async function getIndexedDB(name) {
await openDatabase(); // Asegurarnos que la BD está abierta.
return new Promise((resolve, reject) => {
const transaction = db.transaction(['LoginStore'], 'readonly');
const store = transaction.objectStore('LoginStore');
const request = store.get(name);

request.onsuccess = function(event) {
if (request.result) {
const value = decodeURIComponent(request.result.valor);
console.log(`IndexedDB: Recuperado ${name}=${value}`);
resolve(value);
} else {
console.log(`IndexedDB: No se encontró el valor para ${name}`);
resolve(null);
}
};

request.onerror = function(event) {
console.error('IndexedDB: Error al obtener el dato', event);
reject(event);
};
});
}

