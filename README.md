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
<h5>Actividad 2: Login con ventanas prompt(), alert(), confirm()</h5>
<p> En un primer intento para crear un acceso a la página web mediante un login, se ha utilizado los métodos: prompt(), confirm() y alert(). Adicionalmente se ha realizado un control de errores en JavaScript si no se han introducido ningun valor en los input de usuario y/o contraseña o si alguno de esos valores eran incorrectos, mostrando al usuario un mensaje de error y permitiendo repetir o cancelar la operación. Para facilitar la comprobación del acceso se han incluido en la ventana del prompt los valores correctos como valores por defecto. Una vez que se validan correctamente las credenciales se muestra el contenido de la página web y si no es el caso se muestra un mensaje de error mediante un alert().</p>
<br/>
<h5>Actividad 3: Login con formularios sin cookies</h5>
<p> En esta actividad se ha creado un login mediante un formulario. Se ha controlado los errores de formato en el control de acceso mediante el uso del atributo pattern en el caso del usuario y mensajes de error acompañantes utilizando los metodos setCustomValidity (on input/oninvalid) en el propio formulario usando html. Mediante la etiqueta input se ha usado el submit como evento para gestionar la captura de los datos usando el querySelector. Para prevenir la recarga de la página al realizar el evento submit se ha incluido el metodo event.preventDefault(). La autenticacion del formulario se ha llevado acabo mediante sentencias de selección para determinar la validez de los datos introducidos. En el caso de que autenticación es correcto se procede a poner un mensaje de Bienvenida en el formulario del Login y despues de 2segundos este se hace invisible y el menú y contenido de la página se hace visible. No es un método idonéo para realizar un login. Este se va a mejorar en la siguiente actividad con el uso de window.location.href. Adicionalmente, esta actividad no soluciona el problema de la reaparición del Login cada vez que se recarga la página. El uso de Cookies resolverá este problema en la siguiente actividad. Se ha incluido un desplegable NUMBER en el menú con enlaces al ejercicio 1: una calculadora básica con GUI ya funcional en esta entrega y ejercicio 2 : una cambio de bases no se incluye el cambio de bases en esta entrega.</p>
<br/>
<h5>Actividad 4: Login con formularios con cookies + ejercicios: La calculadora y el cambio de bases</h5>
<p>En este actividad se ha mejorado el login con el uso de cookies. Se ha creado tres nuevas funciones para manejar los cookies: setCookie (para la crear la cookie al loguearse), getCookie( para comprobar en cada refresco de página la existencia de una cookie logged vigente), deleteCookie( para forzar el borrado de la cookie si el usuario cliquea en Logout con el uso de la etiqueta Max-Age=0 en la cadena del cookie). El uso de cookies mejora la experiencia del usuario, permitiendole navigar al landing page sin tener que loguearse cada vez. En esta entrega también se ha continuado el uso de window.location.href. Adicionalmente se ha reorganizado el DOM creando una página main de Bienvenida personalizada con el nombre del usuario que permite al usuario acceder a la página principal de los ejercicios donde el menú en lugar de tener un opción de ejercicios ahora provee distintos desplegables para acceder a los ejercicios según tipo. De momento se ha creado un DOM denominado NUMBERS y otro llamado STRINGS. En el desplegable NUMBERS tenemos la opción de acceder al ejercicio de la Calculadora o él del Cambio de Bases. La calculadora es una básica con muchos funciones + - / * % ! sqrt C <-. Tiene un GUI que imita una calculadora real con su pantalla de input. Guarda los valores pulsados en pantalla hasta que se pulsa = y entonces se devuelve el resultado con dos decimales usando la función toFixed(2). Se ha integrado también el BigInt para tratar los números grandes del factorial, un valor error si se intenta pulsar dos operadores seguidas, y un valor Infinito para tratar las divisiones por cero. El cambio de bases pide la entrada de un número decimal y lo convierte en binario, hexadecimal o octal según el botón cliqueado. Adicionalmente se ha incluido un botón CLEAR para borrar la entrada del número y el resultado para realizar operaciones de nuevo. Proximamente se incluirá ejercicios visitables desde el desplegable STRINGS.</p>
<br/>
<h5>Actividad 5: Login con formularios con Local Storage + ejercicios: Modificado de texto</h5>
<p>En esta actividad, se ha optimizado el sistema de login mediante cookies, que anteriormente permitía el acceso a la página sin necesidad de volver a iniciar sesión hasta la expiración configurada. Ahora, el login es completamente persistente, lo que significa que los usuarios no tienen que volver a ingresar sus credenciales, incluso si cambian de pestaña, recargan la página o cierran el navegador. Esto proporciona una experiencia más fluida y conveniente, ya que es el usuario quien decide cuándo cerrar la sesión mediante el botón de "LOGOUT".</p>
</br>
<p>Se ha optado por usar Local Storage en lugar de Session Storage, dado que Local Storage es más persistente y mantiene los datos clave/valor incluso después de cerrar el navegador. Además, los datos almacenados no contienen información sensible, lo que hace que este enfoque sea adecuado para la funcionalidad requerida.</p>
</br>
<p>Este cambio mejora significativamente la experiencia del usuario, reduciendo fricciones innecesarias y ofreciendo mayor flexibilidad al navegar por la aplicación. No obstante, es importante tener en cuenta que, aunque Local Storage es una herramienta útil para la persistencia de datos, debe complementarse con buenas prácticas de seguridad, como el uso de tokens y la implementación de políticas de expiración para proteger mejor la información del usuario.</p>
</br>
<p>Adicionalmente se ha añadido un nuevo ejercicio en el desplegable: Strings. Se trata de un modificador de texto que según el botón seleccionado por el usuario permite cambiar las letra del texto introducido por este. Las diferentes opciones incluyen: todo mayúscula, todo minúscula, primera o última letra mayúscula o minúscula, los vocales y consonantes tanto mayúsculas como minúsculas, etc. Se permite adicionalmente seleccionar los cambios de forma aleatorio usando el metódo Math.random() a velocidades más rápidas o lentas usando setInterval() y clearInterval(). También se ha incluido en el mismo desplegable una opcion para realizar una ApiWeb próximamente, de la misma forma que se ha introducido un nuevo desplegable para actividades de Arrays que se realizarán también próximamente.</p>
<br/>
<h5>Actividad 6: Login con IndexedDB + actividad de Arrays-Generador de Matrices</h5>
<p>En esta actividad se ha pasado a guardar los datos del login en una BBDD usando IndexedDB para que la sesión sea mas persistente. Se ha creado las tres funciones similares a Local Storage: getIndexedDB, setIndexedDB, deleteIndexedDB. Adicionalmente se ha creado una nueva función que comprueba si una bbdd, utilizando IndexedDB, con el mismo nombre y version se ha creado anteriormente y si no es el caso se crea. En otro caso se indica si se ha abierto la conexión con exito (onsuccess) o sin éxito (onerror). La sesión se mantiene abiertoa mientras que no se pulse en logout porque se comparan los valores con la bbdd (indexedDB) cada vez que se recarga la página o se vuelve al index.html principal. Los valores solamente se eliminan de la bbdd cuando se pulsa en logout y es solamente en este momento cuando se obliga al usuario a loguear de nuevo.</p>  
<br/>
<p>Adicionalmente se ha añadido un nuevo ejercicio en el desplegable: Arrays. Se trata de un generador de Matrices que permite generar los valores de dimensión y de los rangos inferior y superior a partir de los cuales se generar los matrices de forma aleatorio pulsando en Generar Matrices. Igualmente se pueden generar las matrices usando los valores previamente creado aleatoriamente a diferentes velocidades (rápido, lento, normal (aleatorio) or parar). Una vez generado las matrices se puede hacer tres operaciones con las dos matrices generadas: sumar, restar y multiplicar. Para mejorar la calidad del generador se ha incluido dos botones de limpieza: una para borrar los valores de dimensión y los dos rangos y otro para borrar el resultado de las operaciones: sumar, restar y multiplicar</p>
<br/> 
<h5>Actividad 7: Almacenamiento con Cookies, Session Storage, Local Storage, IndexedDB</h5>
<p>En esta actividad se almacenan datos mediante las cuatro formas locales y se realiza un CRUD sobre estos: guardar, listar, borrar y actualizar. Las funciones de guardar, borrar y actualizar se han llevado a cabo a través de un botón con un evento "click", mientras que el listado se muestra en forma de una tabla dinámica y automática por debajo del propio formulario de entrada que se actualiza al guardar o borrar un dato. Con IndexedDB se han creado dos botones adicionales en el formulario que permiten cargar datos de la API Rick y Morti de uno en uno o de cinco en cinco, los cuales se almacenan individualmente en la bbdd DATOSRM en la tabla "datos" igual que los introducidos en el formulario, pero se cargan de golpe en la tabla en a propia página web. En caso de IndexedDB se almacenan tres valores: nombre, especie y una foto del personaje. En cambio en los otros tres casos de almacenamiento se introducen unicamente dos campos un nombre y un valor.</p>  
<br/>
<h5>Actividad 8: Estructuras: Pila, Cola, Lista con Modularización</h5>
<p>En esta actividad trabajamos la estructuras de datos: Pila, Cola y Lista utilizando el enfoque de la programación orientada a objetos. Para demostrar el uso de la estructura Pila, simulamos la cesta de la colada en la que vamos introduciendo prendas hasta alcanzar un límite máximo de 10. Las prendas se lavan siguiendo el proceso LIFO. Para demostrar el uso de la estructura Cola, simulamos un taller de coches en el que los coches se colocan en cola y son atendidos según el proceso de FIFO. Para demostrar el uso de la Lista, creamos un gestor de tareas que permite manejar tanto tareas normales como tareas prioritarias. En el primer listado se realizan las tareas de forma aleatoria y el segundo por prioridad (el número más bajo primero). Además, hemos incorporado la modularización de los archivos en esta actividad, organizando el código en diferentes módulos para mejorar la claridad y facilitar el mantenimiento.</p>  
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


