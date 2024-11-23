// ***** COLA *****
import { taller, MATRICULAS, AFORO_TALLER } from '../main.js';
import { generaAleatorioEnteros, generaAleatorioLetras } from './aleatorio.js';

export function llega() {
    const coche = generaAleatorioEnteros(0, 9); // Generar índice de matrícula aleatoria
    const cuerpoDiv = document.querySelector(".cuerpo");

    if (taller.tamano() >= AFORO_TALLER) {
        document.getElementById("resCola").innerHTML = "El taller está lleno, no se pueden añadir más coches.";
        return; 
    }

   
    taller.encolar(MATRICULAS[coche]);

    
    const nuevoCoche = document.createElement("div");
    nuevoCoche.classList.add("coche");
    nuevoCoche.textContent = `🚗 ${MATRICULAS[coche]}`; 

    
    cuerpoDiv.appendChild(nuevoCoche);

    
    document.getElementById("resCola").innerHTML = `Se ha añadido un coche. Total en la cola: ${taller.tamano()}.`;
}


export function atiendo() {
    const cuerpoDiv = document.querySelector(".cuerpo");

    if (taller.vacio()) {
        document.getElementById("resCola").innerHTML = "No hay más coches para atender.";
    } else {
      
        taller.desencolar();

        
        const primerCoche = cuerpoDiv.firstElementChild;
        if (primerCoche) {
            cuerpoDiv.removeChild(primerCoche);
        }

        
        if (taller.vacio()) {
            document.getElementById("resCola").innerHTML = "No hay más coches para atender.";
        } else {
            document.getElementById("resCola").innerHTML = `Se ha atendido un coche. Total en la cola: ${taller.tamano()}.`;
        }
    }
}
