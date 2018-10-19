var cajas = document.getElementsByTagName('div');

var primeraCaja = document.getElementById('primeraCaja');

// primeraCaja.innerHTML = '<u>Hola Mundo</u>';

// Ahora vamos a crear una serie de Nodos.
var caja = document.createElement('div');   // Creamos el elemento
var contenido = document.createTextNode('Hola Mundo'); //Creamos el contenido
caja.appendChild(contenido); // Le añadimso el contenido al elemento. Los linkamos
//caja.setAttribute('class', 'caja naranja'); // Indicamos su atributos

// Recordar que las cajas están en un contenedor 
var contenedor = document.getElementById('contenedor'); // Ahora quedaría meter mi caja en el contenedor
contenedor.appendChild(caja);


// Ahora modificaremos la clase o el id de un elemento
caja.id = 'primera';
caja.className = 'caja naranja';

// Para saber cual es el elemento padre haríamos lo siguiente.
var padre = cajas[0].parentNode;

// Estas dos lineas hacen lo mismo pero escrito de distinta manera
// padre.insertBefore(caja, primeraCaja);
// padre.insertBefore(caja, cajas[0]);


// De esta manera podríamos reemplazar un elemento hijo de nuestro contenedor
padre.replaceChild(caja, cajas[2]);


// Para eliminar un nodo haríamos lo siguiente
padre.removeChild(cajas[3]);