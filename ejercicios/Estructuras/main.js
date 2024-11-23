"use strict"

import { Pila } from './clases/Pila.js';
import { Cola } from './clases/Cola.js';
import { Lista } from './clases/Lista.js';
import { introduzco, obtengo } from './modules/scriptPila.js';
import { llega, atiendo } from './modules/scriptCola.js';
import { anado, elimino } from './modules/scriptLista.js';
import { anadoPrior, eliminoPrior } from './modules/scriptListaPrior.js';

// OBJETOS
// ***** PILA *****
export let colada = new Pila();
export const PRENDAS = ['VESTIDO', 'PANTALÓN', 'CAMISETA','CAMISA', 'CALZONCILLOS', 'CALCETINES', 'BUFANDA', 'GUANTES', 'CHALECO', 'ABRIGO'];
export const CESTA_COLADA = 10; 
export let ultPrenda = "";

// ***** COLA *****
export let taller = new Cola();
export const MATRICULAS = ['12345-ABC', '23456-BCD', '34567-CDE', '45678-DEF', '56789-EFG', '67890-FGH', '78901-GHI', '89012-HIJ', '90123-IJK', '98765-JKL'];
export const AFORO_TALLER = 10; 
export let ultCoche = "";

// ***** LISTA *****
export let toDo = new Lista();
export const TAREAS = ['LLAMAR', 'RECOGER', 'ENTRENAR', 'ORDENAR', 'FREGAR', 'COMPRAR', 'LIMPIAR', 'ESTUDIAR', 'LAVARSE', 'COMIDA'];

export let toDoPrior = new Lista(); 



export const MAX_TAREAS = 10; 
export let ultTarea = "";

document.addEventListener('DOMContentLoaded', () => {
    // ***** LISTA *****
    const botonAnadir = document.getElementById("anadir");
    const botonEliminar = document.getElementById("eliminar");
    const botonAnadirPrior = document.getElementById("anadirPrior");
    const botonEliminarPrior = document.getElementById("eliminarPrior");
    const botonIntroducir= document.getElementById("introducir");
    const botonObtener=document.getElementById("obtener");
    const botonLlegada=document.getElementById("llegada");
    const botonAtender=document.getElementById("atender");

    if (botonLlegada) botonLlegada.addEventListener("click", llega);
    if (botonAtender) botonAtender.addEventListener("click", atiendo);


    if (botonIntroducir) botonIntroducir.addEventListener("click", introduzco);
    if (botonObtener) botonObtener.addEventListener("click", obtengo);
    if (botonAnadir) botonAnadir.addEventListener("click", anado);
    if (botonEliminar) botonEliminar.addEventListener("click", elimino);
    if (botonAnadirPrior) botonAnadirPrior.addEventListener("click", anadoPrior);
    if (botonEliminarPrior) botonEliminarPrior.addEventListener("click", eliminoPrior);
});
