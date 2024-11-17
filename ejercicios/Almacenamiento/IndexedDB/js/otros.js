document.addEventListener("DOMContentLoaded", () => {
    
    // Botones para interactuar con la API
    document.getElementById("btn1").addEventListener("click", obtenerUnPersonaje);
    document.getElementById("btn5").addEventListener("click", obtenerCincoPersonajes);
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
        alert("Personaje cargado correctamente.");
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
            grabarDato(datos.name,datos.species,datos.image);
            
        }

        // Mostrar aviso (opcional)
        alert("Cinco personajes cargados correctamente.");
    } catch (error) {
        mostrarError(`Error al obtener los personajes: ${error.message}`);
    }
}

// Función para agregar una fila a la tabla
function agregarFila(datos) {
    const fila = document.createElement('tr');

    // Verificar si la URL de la foto existe y no es null
    const foto = datos.image
        ? `<img src="${datos.image}" alt="${datos.name}" style="width: 50px; height: auto;">`
        : "Sin foto disponible";

    fila.innerHTML = `
        <td>${datos.name}</td>
        <td>${datos.species}</td>
        <td>${foto}</td>
        <td>
            <button class="btn btn-borrar">Borrar</button>
        </td>
        <td>
            <button class="btn btn-actualizar">Actualizar</button>
        </td>
    `;

    // Evento para el botón Borrar
    fila.querySelector(".btn-borrar").addEventListener("click", () => {
        borrarData(datos.name); // Usa borrarData para eliminar de IndexedDB
        fila.remove(); // Eliminar visualmente la fila
    });

    // Evento para el botón Actualizar
    fila.querySelector(".btn-actualizar").addEventListener("click", () => {
        // Colocar los datos en los inputs
        document.getElementById("nombre").value = datos.name;
        document.getElementById("especie").value = datos.species;
        document.getElementById("urlFoto").value = datos.image || "";

        // Eliminar el dato de IndexedDB
        borrarData(datos.name);

        // Eliminar la fila de la tabla
        fila.remove();
    });

    outputTableBody.appendChild(fila);
}

// Función para mostrar un mensaje de error
function mostrarError(mensaje) {
    const filaError = document.createElement('tr');
    filaError.innerHTML = `
        <td colspan="5">${mensaje}</td>
    `;
    outputTableBody.appendChild(filaError);
}
