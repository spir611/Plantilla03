'use strict';
let datos = [];
let solicitudDB, 
    bd,
    canalBD;
let nombreBD = "DATOSRM";
let versionBD = 1;
let tablaBD = "datos";
solicitudDB = indexedDB.open(nombreBD, versionBD); 
solicitudDB.onerror = function (event) {
    console.error(`IndexedDB error: ${event.target.errorCode}`); 
};
solicitudDB.onsuccess = function (event) { 
    console.info('Conexión satisfactoria'); 
    bd = event.target.result; 
};
solicitudDB.onupgradeneeded = function (event) { 
    console.info('Base de datos creada'); 
    bd = event.target.result; 
    let registros = bd.createObjectStore(tablaBD, { keyPath: "id", autoIncrement: true }); 
    registros.createIndex("nombre", "nombre", { unique: false }); // CREAMOS UN CAMPO 'nombre'
    registros.createIndex("especie", "especie", { unique: false }); // CREAMOS UN CAMPO 'clave'
    registros.createIndex("foto", "foto", { unique: false }); // CREAMOS UN CAMPO 'clave'

    registros.oncompleted = function (event) {
        console.info('Almacen de datos creado');
    }
};

mostrarDatos(); // MUESTRO LOS DATOS
// DATOS
const nombre = document.getElementById("nombre");
const especie = document.getElementById("especie");
const foto= document.getElementById("foto");
// GUARDAR
const guardar = document.getElementById("guardar");
guardar.addEventListener("click", function () {
    grabarDato(nombre.value, especie.value, foto.value);
});

document.addEventListener("DOMContentLoaded", () => {
    
    // Botones para interactuar con la API
    document.getElementById("btn1").addEventListener("click", obtenerUnPersonaje);
  /*   document.getElementById("btn5").addEventListener("click", obtenerCincoPersonajes); */
    const btn5 = document.getElementById("btn5");

    // Remueve cualquier evento duplicado previamente (precaución adicional)
    btn5.removeEventListener("click", obtenerCincoPersonajes);

    // Agregar el evento correctamente
    btn5.addEventListener("click", obtenerCincoPersonajes);
});


// Genera un número aleatorio entre 1 y 826
function aleatorio() {
    return Math.floor(Math.random() * 826) + 1;
}

// Función para obtener un solo personaje de la API
async function obtenerUnPersonaje() {
    try {
        const idAleatorio = aleatorio();
        const respuesta = await fetch(`https://rickandmortyapi.com/api/character/${idAleatorio}`);
        if (!respuesta.ok) throw new Error(`Error en la solicitud: ${respuesta.status}`);

        const datos = await respuesta.json();

        /* // Agregar el personaje a la tabla
        agregarFila(datos); */

        // Guardar en IndexedDB
        grabarDato(datos.name,datos.species,datos.image);

        // Mostrar aviso (opcional)
        console.log("Personaje cargado correctamente.");
    } catch (error) {
        mostrarError(`Error al obtener el personaje: ${error.message}`);
    }
}

// Función para obtener cinco personajes de la API
async function obtenerCincoPersonajes() {
    try {
        const idsAleatorios = Array.from({ length: 5 }, () => aleatorio());
        const promesas = idsAleatorios.map(id => fetch(`https://rickandmortyapi.com/api/character/${id}`));
        const respuestas = await Promise.all(promesas);

        for (const respuesta of respuestas) {
            if (!respuesta.ok) throw new Error(`Error en la solicitud: ${respuesta.status}`);
            const datos = await respuesta.json();

            // Agregar cada personaje a la tabla
            /* agregarFila(datos); */

            // Guardar en IndexedDB
            grabarDatoApi(datos.name,datos.species,datos.image);
            
        }
        mostrarDatos();
        // Mostrar aviso (opcional)
        console.log("Cinco personajes cargados correctamente.");
    } catch (error) {
        mostrarError(`Error al obtener los personajes: ${error.message}`);
    }
}
async function obtenerCincoPersonajes() {
    try {
        const idsAleatorios = Array.from({ length: 5 }, () => aleatorio());
        const promesas = idsAleatorios.map(id =>
            fetch(`https://rickandmortyapi.com/api/character/${id}`)
        );
        const respuestas = await Promise.all(promesas);

        // Procesa cada respuesta y guarda los datos
        for (const respuesta of respuestas) {
            if (!respuesta.ok) {
                throw new Error(`Error en la solicitud: ${respuesta.status}`);
            }

            const datos = await respuesta.json();

            // Graba cada personaje en IndexedDB
            grabarDatoApi(datos.name, datos.species, datos.image);
        }

        console.log("Cinco personajes cargados correctamente.");
        mostrarDatos(); // Muestra los datos después de grabar todos
    } catch (error) {
        console.error("Error al obtener los personajes:", error);
    }
}
const logoutButton=document.getElementById("logoutButton");

//evento al cliquear en logout para borrar cookie
logoutButton.addEventListener("click", function(event) {
    event.preventDefault();
    deleteIndexedDB("loggedIn");
    window.location.href="../../../../index.html";
}); 