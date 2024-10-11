"use strict"


function getCookie(cname) {

    //convertir todos los cookies guardados en array
    let cookies=document.cookie.split("; ");


    for(let i = 0; i <cookies.length; i++) {
        //division de cada cookie
        let cookie=cookies[i].split("=");
        //comprobación existencia nombre cookie
        if(decodeURIComponent(cookie[0])==cname){
            //devolución valor cookie
            return decodeURIComponent(cookie[1]);
        }
    }
}    