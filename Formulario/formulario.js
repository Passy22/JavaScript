// Lo vamos a hacer con una función autoinvocada para proteger nuestro codigo

// Aquí una posible mejora es intentar que dentro del span que ya tenemos definido en la hoja de estilo
// metemos los errores que se hayan dado en el formulario creando el elemento a partir del dom sin 
// inyectar html a pelo

(function(){

var formulario = document.getElementById('formulario'),
nombre = formulario.nombre,
correo = formulario.correo,
sexo = formulario.sexo,
terminos = formulario.terminos,
error = document.getElementById('error');
var salida = '';

function validarNombre(e){
    if(nombre.value == '' || nombre.value == null) {
        
        salida += '<li>Complete nombre</li>';
    }
}

function validarCorreo(e) {
    if(correo.value == '' || correo.value == null) {
        salida += '<li>Complete correo electrónico</li>';
    }
}

function validarSexo(e) {
    if(sexo.value == '' || sexo.value == null) {
        salida += '<li>Complete sexo</li>';
    }
}

function validarTerminos(e) {
    if(terminos.checked == false) {
        salida += '<li>Acepte los terminos</li>';
        }
}

function validarFormulario(e) {
    console.log('e:', e);
    error.innerHTML = '';
    validarNombre(e);
    validarCorreo(e);
    validarSexo(e);
    validarTerminos(e);
    if(salida == '' || salida == null){
        error.style.display = 'none';
    } else {
        error.style.display = 'block';
        error.innerHTML += salida;
        salida = '';
        e.preventDefault();
    }
}

formulario.addEventListener('submit', validarFormulario);

}())