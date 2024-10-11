"use strict"

//borrar cookies
function deleteCookie(cname){
    document.cookie=encodeURIComponent(cname)+ 
    "=; Max-Age=0; path=/;+sameSite=Strict";

}