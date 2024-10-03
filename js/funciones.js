"use strict"


function mostrar(resultado, texto) {
    console.log(texto);
    resultado.innerHTML = texto;
}

function calculate(expression) {
    // Manejar raíz cuadrada para separar el simbolo  √ y el numero para realizar el cálculo, tomando en consideración la posibilidad de introducir numeros con decimales
    
    expression = expression.replace(/√(\d*\.?\d+)/g, (match, number) => {
        return Math.sqrt(parseFloat(number));
    });

    //manejo del ! factorial con BigInt para numeros grandes

    expression = expression.replace(/(\d+)!/g, (match, number) => {
        return factorial(BigInt(number));
    }); 

    // Dividir la expresión en un array de Strings de números y operadores
    const operadores = expression.split(/([+\-*/%^])/);

    //calculo del resto de los operadores sin ! o √ primer numero de la expresión

    let result = parseFloat(operadores[0]);
    //indices impares para sacar el operador correpondientes para tratarlo en el switch
    for (let i = 1; i < operadores.length; i += 2) {
        const operator = operadores[i];
        const nextNumber = parseFloat(operadores[i + 1]);

        //manejo de errores no se introduce dos operadores seguidos
        if (isNaN(nextNumber)) {
            return "ERROR";
        }
        //realizar calculo según el operador pulsado except ! y √
        switch (operator) {
            case '+':
                result += nextNumber;
                
                break;
            case '-':
                result -= nextNumber;
                
                break;
            case '*':
                result *= nextNumber;
                
                break;
            case '/':
                if (nextNumber === 0) {
                    return "INFINITO";
                } else {
                    result /= nextNumber;
                    
                }
                break;
            case '%':
                result %= nextNumber;
                
                break;
            case '^':
                result = Math.pow(result, nextNumber);
                
                break;
            default:
                return "ERROR";
        }
    }

    return isNaN(result) ? "ERROR" : result.toFixed(2); 
}


function factorial(n){
    
    if((n===0n || n===1n)){
        return 1n;
    }

    return n*factorial(n-1n);
     
}