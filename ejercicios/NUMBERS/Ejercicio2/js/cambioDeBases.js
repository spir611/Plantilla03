"use strict"

//recoger los datos y definirlos como variables

const binaryButton = document.getElementById("binaryButton");
console.log(binaryButton);
const octalButton = document.getElementById("octalButton");
const hexButton = document.getElementById("hexButton");
const clearButton = document.getElementById("clearButton");
const result = document.getElementById("result");

let resultado;

//crear un evento para cuando se pulsa en Binario
binaryButton.addEventListener("click", function() {
    const numberInput =(parseInt)(document.getElementById("numberInput").value);
    resultado=convertToBinary(numberInput);
    result.innerHTML=resultado;
});


//crear un evento para cuando se pulsa en Octal
octalButton.addEventListener("click", function() {
    const numberInput =(parseInt)(document.getElementById("numberInput").value);
    resultado=convertToOctal(numberInput);
    result.innerHTML=resultado;
});

//crear un evento para cuando se pulsa en Hexadecimal
hexButton.addEventListener("click", function() {
    const numberInput =(parseInt)(document.getElementById("numberInput").value);
    resultado=convertToHex(numberInput);
    result.innerHTML=resultado;
});

//crear un evento para cuando se pulsa en clear
clearButton.addEventListener("click", function(){
    result.innerHTML="";
    document.getElementById("numberInput").value = "";
});

