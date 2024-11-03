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


openDatabase();
//comprobamos el estado de login al cargar la pagina para comprobar la bbdd
document.addEventListener("DOMContentLoaded", function() {
    checkLoginStatus();
});



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
iniciarSesion(nombreUsuario, contrasena);
});

async function checkLoginStatus() {
    await openDatabase(); // Asegúrate de que la base de datos esté abierta antes de la verificación

    const result = await getIndexedDB("loggedIn");
    if (result === "true") {
        console.log("Usuario ya ha iniciado sesión.");
        // Si el usuario ya está logueado, redirigir a la página principal de ejercicios
        window.location.href = "./ejercicios/ejercicios.html";
    } else {
        console.log("No se encontró el valor para loggedIn, redirigiendo al login.");
    }
}


async function iniciarSesion(nombreUsuario, contrasena) {

    if (nombreUsuario === USERNAMEDB && contrasena === PASSWORDDB) {
        console.log(nombreUsuario === USERNAMEDB && contrasena === PASSWORDDB);
        try {
            await setIndexedDB("loggedIn", "true");
            console.log("Usuario logueado exitosamente en IndexedDB");
            loginForm.reset();
            // Redirección a la página principal
            window.location.href = "../main.html";
        } catch (error) {
            console.error("Error al guardar el estado de login en IndexedDB:", error);
        }
    } else {
        console.log("Credenciales incorrectas");
    }
}

