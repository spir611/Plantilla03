'use strict';

function mostrarDatos() {
    console.log("Mostrando datos...");
    const cuerpo = document.getElementById("cuerpo"); // referencia al objeto html dónde voy a mostrar los datos

    if (localStorage.getItem("localAcceso") && JSON.parse(localStorage.getItem("localAcceso")).length > 0) { // si existe y hay al menos 1
       const datosAcceso = JSON.parse(localStorage.getItem("localAcceso")); // guardo el JSON de la variable localStorage 'acceso' en el array 'datosAcceso'
        cuerpo.innerHTML = "Los datos almacenados son: <br />";

        datosAcceso.forEach(function (datoAcceso) {
            let linea = document.createElement("tr"); // creo una fila
            let campoNombre = document.createElement("td");// creo una celda para el nombre
            let   campoValor = document.createElement("td") ;// creo una celda para la clave
            let campoBorrar = document.createElement("td"); // creo una celda para el botón 'borrar'
            let campoActualizar = document.createElement("td"); // creo una celda para el botón 'actualizar'


            let   botonBorrar = document.createElement("button");// creo un botón
              let  imagenBorrar = document.createElement("img"); // creo una imagen
             
            let    imagenActualizar = document.createElement("img"); // creo una imagen



            // DATOS

            campoNombre.innerHTML = datoAcceso.nombre; // escribo el nombre contenido en el array
            campoValor.innerHTML = datoAcceso.valor; // escribo el valor contenida en el array
            // BOTÓN
            botonBorrar.textContent = "Borrar" // etiqueto el botón
            botonBorrar.className = "borrar"; // asigno el botón a una clase
            botonBorrar.addEventListener('click', function () { // añado al botón un evento de escucha (listener)
                borrarDato(datoAcceso.nombre); // la función 'forEach' tiene una variable 'posición', la cuál uso para saber el elemento que he de borrar
            });

            imagenBorrar.src = "../img/delete.svg"; // añado al botón una imagen
            imagenBorrar.width = "22"; // añado al botón los estilos
            imagenBorrar.height = "22";
            imagenBorrar.style = "vertical-align: middle";
            // DOM
            botonBorrar.appendChild(imagenBorrar); // añado la imagen al botón
            campoBorrar.appendChild(botonBorrar); // añado el botón a la celda


            // BOTÓN ACTUALIZAR
            let botonActualizar = document.createElement("button");
            botonActualizar.textContent = "Actualizar";
            botonActualizar.className = "actualizar";

            botonActualizar.addEventListener('click', function () { // añado al botón un evento de escucha (listener)
                // Borrar el dato y cargarlo en los campos de entrada
                document.getElementById("nombre").value = datoAcceso.nombre;
                document.getElementById("valor").value =datoAcceso.valor;
                borrarDato(datoAcceso.nombre); // la función 'forEach' tiene una variable 'posición', la cuál uso para saber el elemento que he de borrar
                console.log(`Dato eliminado y cargado para actualización: ${datoAcceso.nombre}`);
            });

            imagenActualizar.src = "../img/recover.svg"; // añado al botón una imagen
            imagenActualizar.width = "22"; // añado al botón los estilos
            imagenActualizar.height = "22";
            imagenActualizar.style = "vertical-align: middle";


            //DOM
            botonBorrar.appendChild(imagenBorrar); // añado la imagen al botón
            campoBorrar.appendChild(botonBorrar); // añado el botón a la celda
            botonActualizar.appendChild(imagenActualizar); // añado la imagen al botón
            campoActualizar.appendChild(botonActualizar); // añado el botón a la celda

            linea.appendChild(campoNombre); // añado a la línea la celda con el nombre
            linea.appendChild(campoValor); // añado a la línea la celda con la clave
            linea.appendChild(campoBorrar); // añado a la línea la celda con el botón
            linea.appendChild(campoActualizar); // añado a la línea la celda con el botó


            cuerpo.appendChild(linea); // añado al tbody 'cuerpo' la línea
        });
    } else {
        cuerpo.innerHTML = 'No existen datos almacenados';
    }
    console.table(datosAcceso);
}
