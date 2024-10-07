<h2>JavaScript: Mi Portfolio</h2>
<h3>Portfolio : Fundamentos de JS (ES6): Ejercicios</h3> 
<h4>Desarrollo Web de Entorno Cliente : CFGS</h4>
<h4>CFIFP Alan Turing - Curso 2024/25</h4>
<hr/>
<br>
<h3>**Objetivo**</h3>
<br>
<p>Esta plantilla es un portfolio de diferentes ejercicios que demuestran los fundamentos de JavaScript realizados durante el módulo 
Desarrollo Web del Entorno Cliente durante el curso 2024/25.</p>
<br>
<hr/>
<br>
<h3>**Lenguajes empleados:**</h3>
<br>
<p>HTML5, CSS3, JavaScript(ES6)</p>

<br>
<hr/>
<br>
<h3>**HTML5**</h3>
<br>
<p>Se ha utilizado los elementos de "div" con una class "header" para alojar el titulo del proyecto y la imagen del alumno; "nav"
para crear el menu; un "div" class "container" para alojar una serie de cards, uno para cada ejercicio, subdividos en "div´s"  
de "class" imagen, título, descripción y un footer que sirve para enlazar al ejercicio correspondiente; y un "div" footer para alojar
el copyright del autor.</p>

<br>
<hr/>
<br>
<h3>**CSS**</h3>
<br>
Destacan el uso de:
      -transiciones para simular el movimiento del Título y la imagen de la autora al entrar en la página
      -diferentes 3 tonos del color azul para guardar la estética de la página y ofrecer un contraste a los botones para enfocar la atención, contrastado con una letra en blanco o negro
      -diferentes tipos de border shadowing sobre los cards para crear un efecto de 3D y unligero aumento de estos al pasar por encima (hover)
      -flexbox para el layout

  <br>
  <hr/>
  <br>
<h3>**JavaScript**</h3> 
<br>
<h5>Actividad 1: Refactorización</h5>
<p> Se completa la refactorización del código JavaScript con el uso de un solo archivo para toda la página, la eliminación de hardcode en el script para poder reutilizar el código</p>
<br>
<h5>Actividad 2: Login con ventanas (prompt(), alert(), confirm()</h5>
<p> En un primer intento para crear un acceso a la página web mediante un login, se ha utilizado los métodos: prompt(), confirm() y alert(). Adicionalmente se ha realizado un control de errores en JavaScript si no se han introducido ningun valor en los input de usuario y/o contraseña o si alguno de esos valores eran incorrectos, mostrando al usuario un mensaje de error y permitiendo repetir o cancelar la operación. Para facilitar la comprobación del acceso se han incluido en la ventana del prompt los valores correctos como valores por defecto. Una vez que se validan correctamente las credenciales se muestra el contenido de la página web y si no es el caso se muestra un mensaje de error mediante un alert().</p>
<br/>
<h5>Actividad 3: Login con formularios (sin cookies</h5>
<p> En esta actividad se ha creado un login mediante un formulario. Se ha controlado los errores de formato en el control de acceso mediante el uso del atributo pattern en el caso del usuario y mensajes de error acompañantes utilizando los metodos setCustomValidity (on input/oninvalid) en el propio formulario usando html. Mediante la etiqueta input se ha usado el submit como evento para gestionar la captura de los datos usando el querySelector. Para prevenir la recarga de la página al realizar el evento submit se ha incluido el metodo event.preventDefault(). La autenticacion del formulario se ha llevado acabo mediante sentencias de selección para determinar la validez de los datos introducidos. En el caso de que autenticación es correcto se procede a poner un mensaje de Bienvenida en el formulario del Login y despues de 2segundos este se hace invisible y el menú y contenido de la página se hace visible. No es un método idonéo para realizar un login. Este se va a mejorar en la siguiente actividad con el uso de window.location.href. Adicionalmente, esta actividad no soluciona el problema de la reaparición del Login cada vez que se recarga la página. El uso de Cookies resolverá este problema en la siguiente actividad. Se ha incluido un desplegable NUMBER en el menú con enlaces al ejercicio 1: una calculadora básica con GUI  (ya funcional en esta entrega y ejercicio 2 : una cambio de bases (no se incluye el cambio de bases en esta entrega.</p>
<br/>
<h5>Actividad 4: Login con formularios con cookies + ejercicios: La calculadora y el cambio de bases</h5>
<p>En este actividad se ha mejorado el login con el uso de cookies. Se ha creado tres nuevas funciones para manejar los cookies: setCookie (para la crear la cookie al loguearse), getCookie( para comprobar en cada refresco de página la existencia de una cookie logged vigente), deleteCookie( para forzar el borrado de la cookie si el usuario cliquea en Logout con el uso de la etiqueta Max-Age=0 en la cadena del cookie). El uso de cookies mejora la experiencia del usuario, permitiendole navigar al landing page sin tener que loguearse cada vez. En esta entrega también se ha continuado el uso de window.location.href y se ha añadido los ejercicios contenidos en el desplegable NUMBER: Calculadora y Cambio de Bases. La calculadora es una básica con muchos funciones + - / * % ! sqrt C <-. Tiene un GUI que imita una calculadora real con su pantalla de input. Guarda los valores pulsados en pantalla hasta que se pulsa = y entonces se devuelve el resultado con dos decimales usando la función toFixed(2). Se ha integrado también el BigInt para tratar los números grandes del factorial, un valor error si se intenta pulsar dos operadores seguidas, y un valor Infinito para tratar las divisiones por cero. El cambio de bases pide la entrada de un número decimal y lo convierte en binario, hexadecimal o octal según el botón cliqueado. Adicionalmente se ha incluido un botón CLEAR para borrar la entrada del número y el resultado para realizar operaciones de nuevo.</p>
<br/>
<br/>      
<hr/>
<br>
<h3>**Webgrafía**</h3>  
<br>
<p>=>www.W3schools.es</p>
<p>=>apuntes de clase : Desarrollo Web Entorno Cliente - CFIFP Alan Turing (curso 2024/25)</p>

<br>
<hr/>


