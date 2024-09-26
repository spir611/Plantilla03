
const USERNAMEDB= "Sandra";
const PASSWORDDB= "1234";


function login(){
let nombreUsuario=prompt("Introduce el nombre de usuario:");
let contrasena=prompt("Introduce la contraseña");


if(nombreUsuario==="" || contrasena ===""){
    alert("El acceso ha sido cancelado.");
}else
    
    if(nombreUsuario===USERNAMEDB && contrasena===PASSWORDDB){

        
        alert("¡Bienvenido a la página web!");
        document.getElementById("main-content").style.display="block";

    }else{
        
        alert("El nombre de usuario o contraseña no son correctos.");
        
        let repetir=confirm("¿Quieres intentar otra vez?");

        
        if(repetir){
            login();
        }else{
            alert("El acceso ha sido cancelado.");
        }

        
    }
}

window.onload=function(){
    login()};