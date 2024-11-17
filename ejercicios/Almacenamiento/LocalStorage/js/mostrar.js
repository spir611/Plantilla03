'use strict';

function mostrarDatos() {
    console.log("Mostrando datos...");
    const cuerpo = document.getElementById("cuerpo"); 

    if (localStorage.getItem("localAcceso") && JSON.parse(localStorage.getItem("localAcceso")).length > 0) { 
       const datosAcceso = JSON.parse(localStorage.getItem("localAcceso")); 
        cuerpo.innerHTML = "Los datos almacenados son: <br />";

        datosAcceso.forEach(function (datoAcceso) {
            let linea = document.createElement("tr"); 
            let campoNombre = document.createElement("td");
            let   campoValor = document.createElement("td") ;
            let campoBorrar = document.createElement("td"); 
            let campoActualizar = document.createElement("td"); 


            let   botonBorrar = document.createElement("button");
            let  imagenBorrar = document.createElement("img"); 
             
            let    imagenActualizar = document.createElement("img"); 



            // DATOS

            campoNombre.innerHTML = datoAcceso.nombre; 
            campoValor.innerHTML = datoAcceso.valor; 
            // BOTÓN
            botonBorrar.textContent = "Borrar" 
            botonBorrar.className = "borrar"; 
            botonBorrar.addEventListener('click', function () { 
                borrarDato(datoAcceso.nombre); 
            });

            imagenBorrar.src = "../img/delete.svg"; 
            imagenBorrar.width = "22"; 
            imagenBorrar.height = "22";
            imagenBorrar.style = "vertical-align: middle";
            // DOM
            botonBorrar.appendChild(imagenBorrar); 
            campoBorrar.appendChild(botonBorrar); 


            // BOTÓN ACTUALIZAR
            let botonActualizar = document.createElement("button");
            botonActualizar.textContent = "Actualizar";
            botonActualizar.className = "actualizar";

            botonActualizar.addEventListener('click', function () { 
              
                document.getElementById("nombre").value = datoAcceso.nombre;
                document.getElementById("valor").value =datoAcceso.valor;
                borrarDato(datoAcceso.nombre); 
                console.log(`Dato eliminado y cargado para actualización: ${datoAcceso.nombre}`);
            });

            imagenActualizar.src = "../img/recover.svg"; 
            imagenActualizar.width = "22"; 
            imagenActualizar.height = "22";
            imagenActualizar.style = "vertical-align: middle";


            //DOM
            botonBorrar.appendChild(imagenBorrar); 
            campoBorrar.appendChild(botonBorrar); 
            botonActualizar.appendChild(imagenActualizar); 
            campoActualizar.appendChild(botonActualizar); 

            linea.appendChild(campoNombre); 
            linea.appendChild(campoValor); 
            linea.appendChild(campoBorrar); 
            linea.appendChild(campoActualizar); 


            cuerpo.appendChild(linea); 
        });
    } else {
        cuerpo.innerHTML = 'No existen datos almacenados';
    }
    console.table(datosAcceso);
}
