// ***** LISTA *****
import { toDo, TAREAS, MAX_TAREAS } from '../main.js';
import { generaAleatorioEnteros, generaAleatorioLetras } from './aleatorio.js';

export function anado() {
    const tarea = generaAleatorioEnteros(0, 9); // Generar tarea aleatoria
    const tablaCuerpo = document.getElementById("tablaCuerpo");
    let fila;

    // Buscar una fila vacía en la primera columna o crear una nueva
    for (let i = 0; i < tablaCuerpo.rows.length; i++) {
        const celdaTareas = tablaCuerpo.rows[i].cells[0]; // Primera columna
        if (celdaTareas.textContent.trim() === "") {
            fila = tablaCuerpo.rows[i];
            break;
        }
    }

    if (!fila) {
        fila = tablaCuerpo.insertRow(); // Crear una nueva fila si no hay ninguna vacía
        fila.insertCell(0); // Crear celda para tareas normales
        fila.insertCell(1); // Crear celda para tareas prioritarias
    }

    // Añadir la tarea a la primera columna
    fila.cells[0].textContent = TAREAS[tarea];

    // Actualizar el mensaje directamente
    const tablaCuerpoRows = [...tablaCuerpo.rows];
    const hayTareas = tablaCuerpoRows.some(row => row.cells[0].textContent.trim() !== "");
    document.getElementById("resLista").innerHTML = hayTareas
        ? "QUEDAN TAREAS PENDIENTES"
        : "NO HAY TAREAS PENDIENTES";
}


export function elimino() {
    const tablaCuerpo = document.getElementById("tablaCuerpo");

    
    for (let i = 0; i < tablaCuerpo.rows.length; i++) {
        const celdaNormal = tablaCuerpo.rows[i].cells[0]; 
        if (celdaNormal.textContent.trim() !== "") {
            celdaNormal.textContent = ""; 
            break;
        }
    }

   
    const tablaCuerpoRows = [...tablaCuerpo.rows];
    const hayTareas = tablaCuerpoRows.some(row => row.cells[0].textContent.trim() !== "");
    document.getElementById("resLista").innerHTML = hayTareas
        ? "QUEDAN TAREAS PENDIENTES"
        : "NO HAY TAREAS PENDIENTES";
}
  
      