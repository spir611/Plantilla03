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
<h5>Actividad 3: Login con formularios</h5>
<p> En esta actividad se ha creado un login mediante un formulario. Se ha controlado los errores de formato en el control de acceso mediante el uso del atributo pattern en el caso del usuario y mensajes de error acompañantes utilizando los metodos setCustomValidity (on input/oninvalid) en el propio formulario usando html. Mediante la etiqueta input se ha usado el submit como evento para gestionar la captura de los datos usando el querySelector. Para prevenir la recarga de la página al realizar el evento submit se ha incluido el metodo event.preventDefault(). La autenticacion del formulario se ha llevado acabo mediante sentencias de selección para determinar la validez de los datos introducidos. En el caso de que autenticación es correcto se procede a poner un mensaje de Bienvenida en el formulario del Login y despues de 2segundos este se hace invisible y el menú y contenido de la página se hace visible. No es un método idonéo para realizar un login. Este se va a mejorar en la siguiente actividad con el uso de window.location.href. Adicionalmente, esta actividad no soluciona el problema de la reaparición del Login cada vez que se recarga la página. El uso de Cookies resolverá este problema en la siguiente actividad. </p>
<br/>
<hr/>
<br>
<h3>**Webgrafía**</h3> 
<br>
<p>=>www.W3schools.es</p>
<p>=>apuntes de clase : Desarrollo Web Entorno Cliente - CFIFP Alan Turing (curso 2024/25)</p>

<br>
<hr/>


