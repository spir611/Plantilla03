'use strict';
// Definición de variables globales
/* const nombreBD = "miBaseDeDatos"; */
/* const versionBD = 1; */
/* const tablaBD = "miTabla"; */
/* let solicitudDB; */
/* let bd; */
/* let canalBD; */


async function mostrarDatos() {
    console.log("Mostrando datos...");
    const cuerpo = document.getElementById("cuerpo");
    cuerpo.innerHTML = "";
    solicitudDB = indexedDB.open(nombreBD, versionBD);
    solicitudDB.onerror = function (event) {
        console.error(`IndexedDB error: ${event.target.errorCode}`);
    };
    solicitudDB.onsuccess = function (event) {
        bd = event.target.result;
        canalBD = bd.transaction(tablaBD, "readonly").objectStore(tablaBD);
        canalBD.getAll().onsuccess = function (event) {
            let registros = event.target.result;
            console.log(registros);
            for (let registro of registros) {
                let linea = document.createElement("tr"), // creo una fila
                    campoNombre = document.createElement("td"), // creo una celda para el nombre
                    campoEspecie = document.createElement("td"), // creo una celda para la especie
                    campoFoto=document.createElement("td"),  //creo una celda para la foto
                    campoBorrar = document.createElement("td"), // creo una celda para el botón 'borrar'
                    campoActualizar=document.createElement("td"), //creo una celda para boton actualizar
                    botonBorrar = document.createElement("button"), // creo un botón
                    imagenBorrar = document.createElement("img"), // creo una imagen
                    botonActualizar = document.createElement("button"), // creo un botón
                    imagenActualizar = document.createElement("img"); // creo una imagen

                    

                campoNombre.innerHTML = registro.nombre; // escribo el nombre contenido en el array
                campoEspecie.innerHTML = registro.especie; // escribo la especie contenida en el array
                /* campoFoto.innerHTML = registro.foto;  */// escribo la foto contenida en el array
                // Crear la imagen en lugar de escribir la URL
                const img = document.createElement("img");
                img.src = registro.foto; // asigna la URL de la foto
                img.alt = registro.nombre; // texto alternativo
                img.style.width = "50px"; // ajusta el ancho
                img.style.height = "auto"; // mantiene la proporción
                campoFoto.appendChild(img); // añade la imagen a la celda


                //boton borrar

                botonBorrar.textContent = "Borrar" // etiqueto el botón
                botonBorrar.className = "borrar"; // asigno el botón a una clase
                botonBorrar.addEventListener('click', function () { // añado al botón un evento de escucha (listener)
                    borrarDato(registro.id); // la función 'forEach' tiene una variable 'posición', la cuál uso para saber el elemento que he de borrar
                });

                imagenBorrar.src = "../img/delete.svg"; // añado al botón una imagen
                imagenBorrar.width = "22"; // añado al botón los estilos
                imagenBorrar.height = "22";
                imagenBorrar.style = "vertical-align: middle";

                botonBorrar.appendChild(imagenBorrar); // añado la imagen al botón
                campoBorrar.appendChild(botonBorrar); // añado el botón a la celda

                //boton actualizar
                botonActualizar.textContent = "Actualizar" // etiqueto el botón
                botonActualizar.className = "actualizar"; // asigno el botón a una clase
                botonActualizar.addEventListener('click', function () { // añado al botón un evento de escucha (listener)
                    // Borrar el dato y cargarlo en los campos de entrada
                    document.getElementById("nombre").value = registro.nombre;
                    document.getElementById("especie").value = registro.especie;
                    document.getElementById("foto").value = registro.foto;
                    borrarDato(registro.id); // la función 'forEach' tiene una variable 'posición', la cuál uso para saber el elemento que he de borrar
                });
                imagenActualizar.src = "../img/recover.svg"; // añado al botón una imagen
                imagenActualizar.width = "22"; // añado al botón los estilos
                imagenActualizar.height = "22";
                imagenActualizar.style = "vertical-align: middle";

                botonActualizar.appendChild(imagenActualizar); // añado la imagen al botón
                campoActualizar.appendChild(botonActualizar); // añado el botón a la celda





                linea.appendChild(campoNombre); // añado a la línea la celda con el nombre
                linea.appendChild(campoEspecie); // añado a la línea la celda con la clave
                linea.appendChild(campoFoto);  //añado a la linea la celda con la clave
                linea.appendChild(campoBorrar); // añado a la línea la celda con el botón
                linea.appendChild(campoActualizar); // añado a la línea la celda con el botón

                cuerpo.appendChild(linea); // añado al tbody 'cuerpo' la línea 
            }
        };
    };
}