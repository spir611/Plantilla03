/***** LISTA CON PRIORIDAD *****/
import { toDo, toDoPrior, TAREAS, MAX_TAREAS } from '../main.js';
import { generaAleatorioEnteros, generaAleatorioLetras } from './aleatorio.js';

export function anadoPrior() {
    let tarea = generaAleatorioEnteros(0, 9); // Generar tarea aleatoria
    let prioridad = generaAleatorioEnteros(1, 10); // Generar prioridad (1-10)
    let tareaConPrioridad = `${prioridad}-${TAREAS[tarea]}`; // Combinar prioridad y tarea
    let posicion = toDoPrior.tamano(); // Usar el tamaño actual de la lista prioritaria como posición

    if (toDoPrior.tamano() == MAX_TAREAS) {
        document.getElementById("resListaPrior").innerHTML = "DEBERÍAS EMPEZAR A HACER LAS TAREAS PRIORITARIAS";
    } else {
        toDoPrior.enlistar(tareaConPrioridad, posicion);

        
        document.getElementById("resListaPrior").innerHTML =
            "QUEDAN TAREAS PRIORITARIAS PENDIENTES: <br />";

        
        const tablaCuerpo = document.getElementById("tablaCuerpo");
        let fila;
        if (tablaCuerpo.rows[posicion]) {
            fila = tablaCuerpo.rows[posicion];
        } else {
            fila = tablaCuerpo.insertRow();
            fila.insertCell(0);
            fila.insertCell(1); 
        }

        
        fila.cells[1].textContent = tareaConPrioridad;
    }
}


export function eliminoPrior() {
    const tablaCuerpo = document.getElementById("tablaCuerpo");

  
    let menorPrioridad = Infinity;
    let filaConMenorPrioridad = null;

    for (let i = 0; i < tablaCuerpo.rows.length; i++) {
        const celdaPrioritaria = tablaCuerpo.rows[i].cells[1]; 
        const contenido = celdaPrioritaria.textContent.trim();

        if (contenido !== "") {
            const prioridad = parseInt(contenido.split("-")[0]);
            if (prioridad < menorPrioridad) {
                menorPrioridad = prioridad;
                filaConMenorPrioridad = i; 
            }
        }
    }

    if (filaConMenorPrioridad !== null) {
        
        tablaCuerpo.rows[filaConMenorPrioridad].cells[1].textContent = "";

       
        const celdaNormal = tablaCuerpo.rows[filaConMenorPrioridad].cells[0];
        const celdaPrioritaria = tablaCuerpo.rows[filaConMenorPrioridad].cells[1];

        if (celdaNormal.textContent.trim() === "" && celdaPrioritaria.textContent.trim() === "") {
            tablaCuerpo.deleteRow(filaConMenorPrioridad);
        }
    }

    const resListaPrior = document.getElementById("resListaPrior");
    const hayTareasPrioritarias = Array.from(tablaCuerpo.rows).some(
        (row) => row.cells[1].textContent.trim() !== ""
    );

    resListaPrior.innerHTML = hayTareasPrioritarias
        ? "Aún quedan Tareas Prioritarias pendientes:"
        : "NO HAY MÁS TAREAS PRIORITARIAS";
}
