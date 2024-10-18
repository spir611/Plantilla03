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
if(getLocalStorage("loggedIn")==="true"){
    console.log(getLocalStorage("loggedIn"));
    window.location.href="../Plantilla03/ejercicios/ejercicios.html";
    console.log(window.location.href);
} 
//creamos un evento para cuando se hace clic en en boton de Ingresar
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombreUsuario=usernameInput.value;
    const contrasena=passwordInput.value;

// Validación adicional usando expresión regular
const usernameRegex = /^.{3,}$/;
if (!usernameRegex.test(nombreUsuario)) {
    alert("El nombre de usuario debe tener al menos 3 caracteres.");
    loginForm.reset();

}

//comprobramos si las credenciales son correctas    
if(nombreUsuario===USERNAMEDB && contrasena===PASSWORDDB){
    //crear una cookie
    setLocalStorage("loggedIn", "true") ;
    console.log(localStorage);  
    loginForm.reset();  
    //redireccion a la página principal de los ejercicios   
    window.location.href="./main.html";
            

}else{

    //si las credenciales son incorrectas 
        loginMessage.style.color="red";
        loginMessage.innerText="El nombre de usuario o la contraseña es incorrecto.";
        loginForm.reset();
        
        
}
});    

logoutButton.addEventListener("click", function(event) {
deleteLocalStorage("loggedIn");
window.location.href="..Plantilla03/index.html";


}); 


