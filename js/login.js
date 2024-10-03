"use strict"

//declarar los credenciales reales: nombre de usuario /contraseña
const USERNAMEDB= "Sandra";
const PASSWORDDB= "1234";

//recoger los elementos necesarios del DOM con los IDs coreespondiente

const loginCard=document.getElementById("loginCard");
const loginForm=document.getElementById("loginForm");
    //comprobamos que obtiene el valor correcto del loginForm
console.log(loginForm);
const loginMessage=document.getElementById("messageBienvenida");
const mainContent=document.getElementById("mainContent");

//Obtener los campos de entrada y el boton de envio(submitButton) dentro del formulario con id loginForm
const usernameInput=document.getElementById("username");
const passwordInput=document.getElementById("password");
const submitButton=loginForm.querySelector('input[type="submit"]');
console.log(submitButton);
submitButton.disabled=false; //asegurar que el boton de envio no este deshabilitado




//añadir un evento al formulario cuando se envia el formulario y event.preventDefault() previene que se recarga la página (su comportamiento por defecto)
loginForm.addEventListener("submit", function(event){
    event.preventDefault();

 //una vez enviado el formulario obtenemos los valores de los valores de los campos definidos arriba   
    const nombreUsuario=usernameInput.value;
    const contrasena=passwordInput.value;

    //comprobramos si las credenciales son correctas    
    if(nombreUsuario===USERNAMEDB && contrasena===PASSWORDDB){

            //muestra el mensaje de bienvenida en color verde si las credenciales correctas
                loginMessage.style.color="green";
                loginMessage.innerText="Bienvenido a la página web";
            //variable.disabled= true deshabilita este campo de entrada- deshabilitamos todos los campos de entrada  
            usernameInput.disabled=true;
            passwordInput.disabled=true;
            submitButton.disabled=true;
            
            //setTimeout ejecuta la función en un tiempo definido en este caso 2s
            setTimeout(function(){
                //se oculta el formulario de login
                loginCard.style.display="none";
                //se muestra el contenido prinicipal de la pagina
                mainContent.style.display="block";

                //volvmeos a habilitar los campos de entrada del formulario y el boton de envio
                usernameInput.disabled=false;
                passwordInput.disabled=false;
                submitButton.disabled=false;
                //reestablecemos el formulario con sus valores iniciales
                loginForm.reset();
                //limpiamos el mensaje de bienvenida-lo dejamos en blanco
                loginMessage.innerText="";
            
            }, 2000);


        }else{

            //si las credenciales son incorrectas se ejecuta este código, el mensaje aparece en rojo
                loginMessage.style.color="red";
                loginMessage.innerText="El nombre de usuario o la contraseña es incorrecto.";
            
            
        }
});