// Lo vamos a hacer con una función autoinvocada para proteger nuestro codigo

(function(){

var formulario = document.getElementById('formulario'),
nombre = formulario.nombre,
correo = formulario.correo,
sexo = formulario.sexo,
terminos = formulario.terminos,
error = document.getElementById('error');

function validarNombre(e) {
    if(nombre.value == '' || nombre.value == null){
        console.log('Complete el nombre');
        error.style.display = 'block';
        error.innerHTML +='<li>Complete nombre</li>';
        e.preventDefault();
        
    } else {
        error.style.display = 'none';
    }

}

function validarCorreo(e) {
    if(correo.value == '' || correo.value == null) {
        error.style.display = 'block';
        error.innerHTML += '<li>Complete Correo Electrónico</>';
        e.preventDefault();

} else {
    error.style.display = 'none';
}
}

function validarSexo(e) {
    if(sexo.value == '' || sexo.value == null) {
        error.style.display = 'block';
        error.innerHTML +='<li>Campo obligatorio sin rellenar (sexo)</li>';
        e.preventDefault();
    } else {
        error.style.display = 'none';
    }

}

function validarTerminos(e) {
    if(terminos.checked == false) {
        terminos.style.display = 'block';
        error.innerHTML +='<li>Terminos no aceptados</>';
        e.preventDefault();
    } else {
        error.style.display = 'none';
    }


}

function validarFormulario(e) {
    error.innerHTML = '';
    validarNombre(e);
    validarCorreo(e);
    validarSexo(e);
    validarTerminos(e);
    
}

formulario.addEventListener('submit', validarFormulario);


}())