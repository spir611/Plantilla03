"use strict"

const logoutButton=document.getElementById("logoutButton");

//evento al cliquear en logout para borrar cookie
logoutButton.addEventListener("click", function(event) {
    event.preventDefault();
    deleteIndexedDB("loggedIn");
    window.location.href="../../../../index.html";
}); 



// Selección de elementos
const dimensionInput = document.getElementById('dimension');
const rangoInferiorInput = document.getElementById('rangoInferior');
const rangoSuperiorInput = document.getElementById('rangoSuperior');
const matrizAContainer = document.getElementById('matrizA');
const matrizBContainer = document.getElementById('matrizB');
const matrizCContainer = document.getElementById('matrizC');

let intervaloGeneracion;  // Variable para almacenar el intervalo de generación continua
let velocidad = 1000;  // Velocidad de generación en milisegundos (inicialmente 1 segundo)

// Manejar los clics en todos los botones
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const matrizA = JSON.parse(matrizAContainer.dataset.matriz || '[]');
        const matrizB = JSON.parse(matrizBContainer.dataset.matriz || '[]');

        switch (event.target.id) {
            case 'valoresAleatorios':
                
                generarValoresAleatorios();
                valoresGenerados=true;
                
                break;
            case 'generarMatrices': 
            
                generarYMostrarMatrices();
                break;
            case 'clearValores' :
                dimensionInput.value = "";
                rangoInferiorInput.value = "";
                rangoSuperiorInput.value = "";
                break;
            case 'aleatorio':
                clearInterval(intervaloGeneracion);
                intervaloGeneracion = setInterval(generarYMostrarMatrices, velocidad);
                break;
            case 'parar':
                clearInterval(intervaloGeneracion);
                break;
            case 'rapido':
                velocidad = 500;
                if (intervaloGeneracion) {
                    clearInterval(intervaloGeneracion);
                    intervaloGeneracion = setInterval(generarYMostrarMatrices, velocidad);
                }
                break;
            case 'lento':
                velocidad = 1500;
                if (intervaloGeneracion) {
                    clearInterval(intervaloGeneracion);
                    intervaloGeneracion = setInterval(generarYMostrarMatrices, velocidad);
                }
                break;
            case 'suma':
                mostrarMatriz(sumarMatrices(matrizA, matrizB), matrizCContainer);
                break;
            case 'resta':
                mostrarMatriz(restarMatrices(matrizA, matrizB), matrizCContainer);
                break;
            case 'multiplicacion':
                mostrarMatriz(multiplicarMatrices(matrizA, matrizB), matrizCContainer);
                break;
            case 'clearButton':
                limpiarMatrizC();
                break;

            default:
                console.warn('Botón no reconocido:', event.target.id);
        }
    });
});

// Función para generar un número aleatorio entre un mínimo y un máximo
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Función para generar valores aleatorios para los inputs
function generarValoresAleatorios() {
    const dimension = generarNumeroAleatorio(2, 5);  // Dimensión entre 2 y 10
    
    let rangoInferior;
    let rangoSuperior;

    // Asegurarse de que rangoSuperior es mayor que rangoInferior
    do {
        rangoInferior = generarNumeroAleatorio(2, 350);  // Rango inferior entre -50 y 0
        rangoSuperior = generarNumeroAleatorio(2, 500);   // Rango superior entre 1 y 50
    } while (rangoSuperior <= rangoInferior);

    // Asignar valores a los inputs
    dimensionInput.value = dimension;
    rangoInferiorInput.value = rangoInferior;
    rangoSuperiorInput.value = rangoSuperior;
}


// Función para generar una matriz aleatoria
function generarMatrizAleatoria(dimension, rangoInferior, rangoSuperior) {
    let matriz = [];
    for (let i = 0; i < dimension; i++) {
        matriz[i] = [];
        for (let j = 0; j < dimension; j++) {
            matriz[i][j] = generarNumeroAleatorio(rangoInferior, rangoSuperior);
        }
    }
    return matriz;
}

// Función para mostrar matrices en el DOM
function mostrarMatriz(matriz, container) {
    container.innerHTML = '';
    matriz.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        row.forEach(value => {
            const cell = document.createElement('span');
            cell.classList.add('cell');
            cell.textContent = value+ " ";
            rowDiv.appendChild(cell);
        });
        container.appendChild(rowDiv);
    });
}


// Función para sumar matrices
function sumarMatrices(matrizA, matrizB) {
    return matrizA.map((row, i) => row.map((value, j) => value + matrizB[i][j]));
}

// Función para restar matrices
function restarMatrices(matrizA, matrizB) {
    return matrizA.map((row, i) => row.map((value, j) => value - matrizB[i][j]));
}

// Función para multiplicar matrices
function multiplicarMatrices(matrizA, matrizB) {
    const dimension = matrizA.length;
    let resultado = Array.from({ length: dimension }, () => Array(dimension).fill(0));
    for (let i = 0; i < dimension; i++) {
        for (let j = 0; j < dimension; j++) {
            for (let k = 0; k < dimension; k++) {
                resultado[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }
    return resultado;
}

// Función para generar y mostrar matrices A y B con los valores de los inputs
function generarYMostrarMatrices() {
    const dimension = parseInt(dimensionInput.value);
    const rangoInferior = parseInt(rangoInferiorInput.value);
    const rangoSuperior = parseInt(rangoSuperiorInput.value);

    // Verificar que los valores de los inputs sean válidos
    if (isNaN(dimension) || isNaN(rangoInferior) || isNaN(rangoSuperior)) {
        alert("Por favor, asegúrese de que todos los valores sean números válidos.");
        return;
    }
    if (dimension < 2 || dimension > 5) {
        alert("La dimensión debe estar entre 2 y 5.");
        return;
    }
    if (rangoInferior < 2 || rangoInferior > 350) {
        alert("El rango inferior debe estar entre 2 y 350.");
        return;
    }
    if (rangoSuperior < 2 || rangoSuperior > 500 || rangoSuperior <= rangoInferior) {
        alert("El rango superior debe estar entre 2 y 500 y mayor que el rango inferior.");
        return;
    }

    const matrizA = generarMatrizAleatoria(dimension, rangoInferior, rangoSuperior);
    const matrizB = generarMatrizAleatoria(dimension, rangoInferior, rangoSuperior);

    mostrarMatriz(matrizA, matrizAContainer);
    mostrarMatriz(matrizB, matrizBContainer);

    matrizAContainer.dataset.matriz = JSON.stringify(matrizA);
    matrizBContainer.dataset.matriz = JSON.stringify(matrizB);
}


function limpiarContenedor(container) {
    const nuevoContenedor = container.cloneNode(false);  
    container.parentNode.replaceChild(nuevoContenedor, container);
}

function limpiarMatrizC() {
    const matrizCContainer = document.getElementById("matrizC");
    matrizCContainer.innerHTML = "";
}
