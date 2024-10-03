document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    const screen = document.getElementById('screen');
    let screenValue = '';
    let lastButtonText = '';
  
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
  