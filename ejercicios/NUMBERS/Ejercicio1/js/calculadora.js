"use strict"

//evento para cargar todo el DOM
document.addEventListener('DOMContentLoaded', function() {
    //creamos un array con todos los botones de la calculadora
    const buttons = document.querySelectorAll('.btn');
    const screen = document.getElementById('screen');
    let screenValue = '';
    //guardamos el último valor para gestión de errores de operadores duplicados o iniciales no deseados
    let lastButtonText = '';
   
    //accedemos a cada boton y gestionamos la pantalla de input o correspondiente acción
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const buttonText = this.innerText;
  
        if (buttonText === '=') {
          const result = calculate(screenValue);
          screen.value = result;
          screenValue = result === "ERROR" ? '' : result;
        } else if (buttonText === 'AC') {
          screenValue = '';
          screen.value = screenValue;
        } else if (buttonText === '<-') {
          screenValue = screenValue.slice(0, -1);
          screen.value = screenValue;
        } else {
          // Manejar el caso de punto decimal al principio
          if (buttonText === '.' && (screenValue === ''||isNaN(lastButtonText))) {
            screenValue += '0.';
            screen.value = screenValue;
          } else {
            // Evitar dos operadores seguidos, excepto para el símbolo de raíz cuadrada o ! factorial
            if (isNaN(buttonText) && isNaN(lastButtonText) && buttonText !== '√' && buttonText !=='!') {
              screenValue = "ERROR";
              screen.value = screenValue;
            } else {
              screenValue += buttonText;
              screen.value = screenValue;
            }
          }
        }  
        lastButtonText = buttonText;
      }); 
    });
  });
  

  const logoutButton=document.getElementById("logoutButton");

//evento al cliquear en logout para borrar cookie
logoutButton.addEventListener("click", function(event) {
    event.preventDefault();
    deleteIndexedDB("loggedIn");
    window.location.href="../../../../index.html";
}); 
