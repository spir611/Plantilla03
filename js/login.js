"use strict"

//declarar los credenciales reales: nombre de usuario /contraseña
const USERNAMEDB= "Sandra";
const PASSWORDDB= "1234";

//recoger los elementos necesarios del DOM con los IDs coreespondiente

const loginCard=document.getElementById("loginCard");
const loginForm=document.getElementById("loginForm");
const loginMessage=document.getElementById("messageBienvenida");
const mainContent=document.getElementById("mainContent");
const usernameInput=document.getElementById("username");
const passwordInput=document.getElementById("password");
const submitButton=loginForm.querySelector('input[type="submit"]');
submitButton.disabled=false;
const logoutButton=document.getElementById("logoutButton")
const topnav=document.getElementById("topnav");

//comprobamos la existencia de una cookie
 if(getCookie("logged")==="true"){
    console.log(getCookie("logged"));
    window.location.href="./main.html";
    console.log(window.location.href);
} 

//creamos un evento para cuando se hace clic en en boton de Ingresar
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombreUsuario=usernameInput.value;
    const contrasena=passwordInput.value;

   
    //comprobramos si las credenciales son correctas    
    if(nombreUsuario===USERNAMEDB && contrasena===PASSWORDDB){
        //crear una cookie
        setCookie("logged", "true", 1) ;
                console.log(document.cookie);  
        loginForm.reset();  
        //redireccion a la página principal de los ejercicios   
        window.location.href="./main.html";
             

    }else{

        //si las credenciales son incorrectas 
            loginMessage.style.color="red";
            loginMessage.innerText="El nombre de usuario o la contraseña es incorrecto.";
            
            
    }
});    

logoutButton.addEventListener("click", function(event) {
    deleteCookie("logged");
    window.location.href="../index.html";


}); 


