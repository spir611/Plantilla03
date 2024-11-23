// ***** PILA *****
import { colada, PRENDAS, CESTA_COLADA } from '../main.js';
import { generaAleatorioEnteros, generaAleatorioLetras } from './aleatorio.js';

export function introduzco() {
    const prenda = generaAleatorioEnteros(0, 9); 
    const listaColada = document.getElementById("listaColada");


    if (colada.tamano() >= CESTA_COLADA) {
        document.getElementById("resPila").innerHTML = "La cesta está llena, hay que ponerse a hacer la colada.";
        return; 
    }


    colada.apilar(PRENDAS[prenda]);

    
    const nuevoElemento = document.createElement("li");

    
    const textoPrenda = document.createTextNode(`${colada.tamano()}: ${PRENDAS[prenda]} `);

    
    const imagen = document.createElement("img");
    imagen.src = `../../../img/${PRENDAS[prenda].toLowerCase()}.png`; 
    imagen.alt = PRENDAS[prenda]; 
    imagen.style.width = "40px"; 
    imagen.style.height = "40px";
    imagen.style.marginLeft = "10px";


    nuevoElemento.appendChild(textoPrenda);
    nuevoElemento.appendChild(imagen);

    
    listaColada.appendChild(nuevoElemento);

    
    document.getElementById("resPila").innerHTML =
        "Se ha añadido una prenda. Total en la cesta: " + colada.tamano();
}


export function obtengo() {
    const listaColada = document.getElementById("listaColada");

    if (colada.vacio()) {
        document.getElementById("resPila").innerHTML = "No hay más ropa que lavar.";
    } else {
        
        colada.desapilar();

        
        listaColada.removeChild(listaColada.lastChild);

       
        if (colada.vacio()) {
            document.getElementById("resPila").innerHTML = "No hay más ropa que lavar.";
        } else {
            document.getElementById("resPila").innerHTML =
                "Se ha eliminado una prenda. Total en la cesta: " + colada.tamano();
        }
    }
}
