// Con Document estamos haciendo a todo el documento. Si cogemos document.body estaríamso entrando en la parte del body de html

var cajas = document.getElementsByTagName('div'); // Obtenemos el elemento por etiqueta y lo guardamos en la variable cajas

cajas[0].textContent = 'Hola Mundo'; // Cambiamos el texto del primer div a Hola Mundo
cajas[1].innerHTML = '<h1>Hola</h1>'; // Podemos cambiar también el tipo 

// También podemos cargar por nombre de clase de la siguiente manera:
var cajasdos = document.getElementsByClassName('caja');

// Este es el elemento más usado. La mejor norma es usar class en html para css y id en html para usarlo con JS
var primeraCaja = document.getElementById('primeraCaja');