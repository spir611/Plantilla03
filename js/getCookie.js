function getCookie(cname) {

    //convertir eltodos los cookies guardados en una array asociativa
    let cookies=document.cookie.split("; ");


    for(let i = 0; i <cookies.length; i++) {
        //volvemos a convertir cada cookie individual en un array[nombre, valor] por lo que cookie[0]=name cookie[1]=valor
        let cookie=cookies[i].split("=");
        //comprobamos el nombre de cada cookie con el nombre que pasamos y si coinciden devolvemos el valor de la cookie
        if(decodeURIComponent(cookie[0])==cname){
            return decodeURIComponent(cookie[1]);
        }
    }
}    