"use strict"

function setCookie(cname, cvalue, exmin) {
        if(navigator.cookieEnabled==true){   
    let theDate = new Date();
    let currentMilliSec=theDate.getTime();
    let expirationMilliSec=currentMilliSec+(exmin*60*1000);

    theDate.setTime(expirationMilliSec);
    let expires="expires="+theDate.toUTCString();
    let sameSite="SameSite=Strict";
    document.cookie = encodeURIComponent(cname) + "=" + encodeURIComponent(cvalue) + ";" + expires + ";path=/;"+sameSite;
    }else{
        alert("EL uso de cookies está disacivado.")
    }
}