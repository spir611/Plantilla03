"use strict"

export class Lista {
    constructor() {
        this.lista = [];
    }


    enlistar(elemento, indice) {
    if (indice >= 0 && indice <= this.lista.length) {
        this.lista.splice(indice, 0, elemento);
    } else {
        console.error("Índice fuera de rango.");
    }
} 


    desenlistar(indice) {
        if (indice >= 0 && indice < this.lista.length) {
            return this.lista.splice(indice, 1)[0]; 
        } else {
            console.error("Índice fuera de rango.");
            return null;
        }
    }


    vacio() {
        return (this.lista.length == 0);
    }

    tamano() {
        return this.lista.length;
    }

    devolver() {
        return this.lista;
    }


    ojear(indice) {
    if (indice >= 0 && indice < this.lista.length) {
            return this.lista[indice];
        } else {
            console.error("Índice fuera de rango.");
            return null;
        }
    }

    ordenar() {
        return this.lista.sort();
    }

    posicionMayor() {
        let mayor = {
            posicion: 0,
            contenido: "",
        };
        if (!this.vacio()) {
            mayor.contenido = this.lista[mayor.posicion];
            for (let i = 1; i < this.lista.length; i++) {
                if (mayor.contenido < this.lista[i]) {
                    mayor.posicion = i;
                    mayor.contenido = this.lista[i];
                }
            }
        }
        return mayor;
    }
}